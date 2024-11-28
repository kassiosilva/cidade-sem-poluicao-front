import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

import { queryClient } from './lib/react-query'
import { RoutesConfig } from './routes'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position="top-right" />
      <RoutesConfig />
    </QueryClientProvider>
  )
}
