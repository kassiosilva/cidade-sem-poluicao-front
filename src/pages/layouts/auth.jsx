import { Navigate, Outlet } from 'react-router'

import { Header } from '../../components/header'
import { useAuth } from '../../hooks/useAuth'
import styles from './auth.module.css'

export function AuthLayout() {
  // const { isUserAuthenticated } = useAuth()

  // if (isUserAuthenticated) {
  //   return <Navigate to="dashboard" replace />
  // }

  return (
    <section className={`${styles.main} vh-100`}>
      <Header title="CIDADE SEM POLUIÇÃO" />

      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  )
}
