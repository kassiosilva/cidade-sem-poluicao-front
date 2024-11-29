import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'sonner'

import { registerDonation } from '../../api/register-donation'
import styles from './register-donation.module.css'

export function RegisterDonation() {
  const [amount, setAmout] = useState(0)
  const [donation, setDonation] = useState('')

  const { mutateAsync: createDonation, isPending } = useMutation({
    mutationFn: registerDonation,
  })

  function handleAmount(e) {
    setAmout(e.target.value)
  }

  function handleDonation(e) {
    setDonation(e.target.value)
  }

  async function onSubmit(e) {
    e.preventDefault()

    try {
      await createDonation({ amount, donation })

      toast.success('Agradecemos por sua doação!')
    } catch (error) {
      toast.error('Não foi possível fazer a doação.')
    }
  }

  return (
    <div className={styles.main}>
      <form
        onSubmit={onSubmit}
        className={`needs-validation ${styles.form}`}
        autoComplete="off"
      >
        <div className={`mb-3 custom-width ${styles.containerInput}`}>
          <label
            htmlFor="exampleInputEmail1"
            className={`form-label ${styles.label}`}
          >
            QUANTIDADE
          </label>

          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={handleAmount}
            required
            autoFocus
            min={1}
          />
        </div>

        <div className={`mb-3 custom-width ${styles.containerInput}`}>
          <label
            htmlFor="exampleInputPassword1"
            className={`form-label ${styles.label}`}
          >
            O QUE FOI DOADO?
          </label>
          <input
            type="text"
            className="form-control"
            value={donation}
            onChange={handleDonation}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={isPending}>
          {isPending ? (
            <>
              <span
                className="spinner-border spinner-border-sm"
                aria-hidden="true"
              />

              <span role="status"> Enviando...</span>
            </>
          ) : (
            'REGISTRAR'
          )}
        </button>
      </form>
    </div>
  )
}
