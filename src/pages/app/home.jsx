import './home.css'

export function Home() {
  return (
    <main className="vh-100">
      <header>
        <h1>
          SEJA BEM VINDO (A) AO
          <br />
          PROJETO FORTALEZA LIMPA!
        </h1>
      </header>

      <div className="botton-container-1">
        <div className="botton-container-se">
          <button type="button" className="btn btn-light">
            FAÇA AQUI SUAS
            <br />
            DOAÇÕES
          </button>
        </div>
        <div className="botton-container-sd">
          <button type="button" className="btn btn-light">
            ACOMPANHE AQUI OS DIAS DE COLETA DE LIXO
          </button>
        </div>
      </div>

      <div className="botton-container-2">
        <div className="botton-container-ie">
          <button type="button" className="btn btn-light">
            CONSCIÊNCIA
            <br />
            AMBIENTAL
          </button>
        </div>
        <div className="botton-container-id">
          <button type="button" className="btn btn-light">
            FALE CONOSCO
          </button>
        </div>
      </div>
    </main>
  )
}
