import './register-donor.css'

export function RegisterDonor() {
  return (
    <div className="main vh-100">
      <header>
        <h1>PÁGINA DE CADASTRO</h1>
      </header>

      <div className="input-row">
        <div className="input-container">
          <input type="text" id="nome" name="nome" placeholder="NOME" />
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="TELEFONE"
          />
        </div>

        <div className="input-container">
          <input type="email" id="email" name="email" placeholder="E-MAIL" />
          <button type="button" className="btn btn-primary">
            CADASTRE-SE
          </button>
        </div>
      </div>
    </div>
  )
}
