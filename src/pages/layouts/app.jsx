import { Navigate, Outlet } from 'react-router'

import { useAuth } from '../../hooks/useAuth'

export function AppLayout() {
  const { isUserAuthenticated } = useAuth()

  return isUserAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}
