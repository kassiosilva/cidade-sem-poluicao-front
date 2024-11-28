import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'sonner'

import { registerDonor } from '../../api/register-donor'
import styles from './register-donor.module.css'

export function RegisterDonor() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const { mutateAsync: createDonor, isPending } = useMutation({
    mutationFn: registerDonor,
  })

  function handleName(e) {
    setName(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePhone(e) {
    setPhone(e.target.value)
  }

  async function onSubmit(e) {
    e.preventDefault()

    try {
      await createDonor({ name, email, phone })

      toast.success('Doador cadastrado!')
    } catch (error) {
      toast.error('Não foi possível cadastrar doador.')
    }
  }

  return (
    <div className={`${styles.main} vh-100`}>
      <header className={styles.header}>
        <h1>PÁGINA DE CADASTRO</h1>
      </header>

      <form onSubmit={onSubmit} className="needs-validation" autoComplete="off">
        <div className="row">
          <div className="col">
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="NOME"
                value={name}
                onChange={handleName}
                required
                autoFocus
              />
            </div>
          </div>

          <div className="col">
            <div className={styles.inputContainer}>
              <input
                type="email"
                placeholder="E-MAIL"
                value={email}
                onChange={handleEmail}
                required
                autoFocus
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className={styles.inputContainer}>
              <input
                type="tel"
                placeholder="TELEFONE"
                value={phone}
                onChange={handlePhone}
                required
                autoFocus
                pattern="(\d{3}\d{3}\d{3}\d{2})"
                maxLength="11"
              />
            </div>
          </div>

          <div className="col">
            <div className={styles.inputContainer}>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    />

                    <span role="status">Cadastrando ...</span>
                  </>
                ) : (
                  'CADASTRE-SE'
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
