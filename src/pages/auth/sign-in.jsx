import { useState } from 'react'
import { Link } from 'react-router'

import { useAuth } from '../../hooks/useAuth'

export function SignIn() {
  const { login, loginIsPending } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  async function onSubmit(e) {
    e.preventDefault()

    login({ email, password })
  }

  return (
    <div className="card shadow-lg my-5">
      <div className="card-body p-5">
        <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>

        <form
          onSubmit={onSubmit}
          className="needs-validation"
          autoComplete="off"
        >
          <div className="mb-3">
            <label className="mb-2 text-muted" htmlFor="email">
              E-mail
            </label>

            <input
              id="email"
              type="email"
              className="form-control"
              value={email}
              onChange={handleEmail}
              required
              autoFocus
            />
          </div>

          <div className="mb-3">
            <label className="text-muted" htmlFor="password">
              Senha
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePassword}
              className="form-control"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary ms-auto"
            disabled={loginIsPending}
          >
            {loginIsPending ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                />

                <span role="status">Entrando ...</span>
              </>
            ) : (
              'Entrar'
            )}
          </button>
        </form>
      </div>

      <div className="card-footer py-3 border-0">
        <div className="text-center">
          Não tem uma conta?{' '}
          <Link to="/signup" className="text-dark">
            Crie uma
          </Link>
        </div>
      </div>
    </div>
  )
}
