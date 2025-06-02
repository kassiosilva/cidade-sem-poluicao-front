import { useState } from 'react'
import { Link } from 'react-router'

import { useAuth } from '../../hooks/useAuth'

export function SignUp() {
  const { registerUser, registerUserIsPending } = useAuth()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleUsername(e) {
    setUsername(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  async function onSubmit(e) {
    e.preventDefault()

    registerUser({ username, email, password })
  }

  return (
    <div className="card shadow-lg my-5">
      <div className="card-body p-5">
        <h1 className="fs-4 card-title fw-bold mb-4">Cadastre-se</h1>

        <form
          onSubmit={onSubmit}
          className="needs-validation"
          autoComplete="off"
        >
          <div className="mb-3">
            <label className="mb-2 text-muted" htmlFor="name">
              Nome
            </label>

            <input
              id="name"
              type="text"
              className="form-control"
              value={username}
              onChange={handleUsername}
              required
              autoFocus
            />
          </div>

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
            />
          </div>

          <div className="mb-3">
            <label className="text-muted" htmlFor="password">
              Senha
            </label>

            <input
              id="password"
              type="password"
              className="form-control"
              value={password}
              onChange={handlePassword}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary ms-auto"
            disabled={registerUserIsPending}
          >
            {registerUserIsPending ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                />

                <span role="status">Cadastrando ...</span>
              </>
            ) : (
              'Cadastrar'
            )}
          </button>
        </form>
      </div>

      <div className="card-footer py-3 border-0">
        <div className="text-center">
          Já tem uma conta?{' '}
          <Link to="/" className="text-dark">
            Faça login
          </Link>
        </div>
      </div>
    </div>
  )
}
