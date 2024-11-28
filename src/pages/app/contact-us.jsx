import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'sonner'

import { sendContact } from '../../api/send-contact'
import styles from './contact-us.module.css'

export function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const { mutateAsync: registerContact, isPending } = useMutation({
    mutationFn: sendContact,
  })

  function handleName(e) {
    setName(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handleMessage(e) {
    setMessage(e.target.value)
  }

  async function onSubmit(e) {
    e.preventDefault()

    try {
      await registerContact({ name, email, message })

      toast.success('Obrigado pela sua mensagem!')
    } catch (error) {
      toast.error('Não foi possível enviar seu contato.')
    }
  }

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h1>
          DÚVIDAS, RECLAMAÇÕES OU
          <br />
          SUGESTÕES?
        </h1>
      </header>

      <div className={styles.formContainer}>
        <form
          onSubmit={onSubmit}
          className="needs-validation"
          autoComplete="off"
        >
          <input
            type="text"
            placeholder="NOME"
            className="form-control"
            value={name}
            onChange={handleName}
            required
            autoFocus
          />

          <input
            type="email"
            placeholder="E-MAIL"
            className="form-control"
            value={email}
            onChange={handleEmail}
            required
          />

          <textarea
            placeholder="TEXTO"
            className="form-control"
            value={message}
            onChange={handleMessage}
          />

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

                <span role="status">Enviando ...</span>
              </>
            ) : (
              'ENVIAR'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
