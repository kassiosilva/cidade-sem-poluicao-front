import styles from './register-donation.module.css'

export function RegisterDonation() {
  return (
    <div className={styles.main}>
      <form className={styles.form}>
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
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary custom-button">
          REGISTRAR
        </button>
      </form>
    </div>
  )
}
