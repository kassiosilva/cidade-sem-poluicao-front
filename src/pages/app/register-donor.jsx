import styles from './register-donor.module.css'

export function RegisterDonor() {
  return (
    <div className={`${styles.main} vh-100`}>
      <header className={styles.header}>
        <h1>PÁGINA DE CADASTRO</h1>
      </header>

      <form>
        <div className="row">
          <div className="col">
            <div className={styles.inputContainer}>
              <input type="text" id="nome" name="nome" placeholder="NOME" />
            </div>
          </div>

          <div className="col">
            <div className={styles.inputContainer}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-MAIL"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className={styles.inputContainer}>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="TELEFONE"
              />
            </div>
          </div>

          <div className="col">
            <div className={styles.inputContainer}>
              <button type="button" className="btn btn-primary">
                CADASTRE-SE
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
