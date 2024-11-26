import './donations.css'

export function Donations() {
  return (
    <div className="main vh-100">
      <header>
        <h1>FAÇA AQUI SUAS DOAÇÕES</h1>
      </header>

      <div className="botton-container-1">
        <div className="botton-container-se">
          <button type="button" className="btn btn-light">
            CADASTRO DE
            <br />
            DOADOR
          </button>
        </div>
        <div className="botton-container-sd">
          <button type="button" className="btn btn-light">
            PONTOS DE
            <br />
            DOAÇÕES
          </button>
        </div>
      </div>

      <div className="botton-container-2">
        <div className="botton-container-i">
          <button type="button" className="btn btn-light">
            MENU ANTERIOR
          </button>
        </div>
      </div>
    </div>
  )
}
