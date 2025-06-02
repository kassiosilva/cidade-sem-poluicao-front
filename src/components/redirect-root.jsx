import { Navigate } from 'react-router'

import { useAuth } from '../hooks/useAuth'
export function RedirectRoot() {
  const { isUserAuthenticated } = useAuth()

  return isUserAuthenticated ? (
    <Navigate to="dashboard" replace />
  ) : (
    <Navigate to="/login" replace />
  )
}
