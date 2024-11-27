import styles from './contact-us.module.css'

export function ContactUs() {
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
        <form>
          <input type="text" placeholder="NOME" />

          <input type="text" placeholder="E-MAIL OU TELEFONE" />

          <textarea placeholder="TEXTO" />

          <button type="button" className="btn btn-primary">
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  )
}
