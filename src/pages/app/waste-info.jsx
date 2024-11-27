import styles from './waste-info.module.css'

export function WasteInfo() {
  return (
    <div className={`${styles.main} vh-100`}>
      <h1>
        ABAIXO DISPONIBILIZAMOS ALGUNS LINKS DE SITES QUE PODERÃO SER MUITO
        ÚTEIS PARA O SEU APRENDIZADO A RESPEITO DO LIXO
      </h1>

      <div className={styles.cardS}>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Gemas ufpa</h5>
            <p className="card-text">
              Com o objetivo de promover a conscientização coletiva a respeito
              do assunto, o site gemas.ufpa.br teve a iniciativa de produzir um
              conteúdo de excelente didática para essa finalidade.
            </p>
            <a
              href="https://gemas.ufpa.br/produ%C3%A7%C3%B5es/cartilhas"
              className="card-link"
            >
              Ir para o site
            </a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Prohome</h5>
            <p className="card-text">
              O site da prohome imoveis, além de fornecer uma cartilha,
              disponibiliza um e-book para download.
              <br />
              Você pode acessá-lo clicando no link abaixo ou acessando o site:
              <br />
              www.prohomeimoveis/prohome-ambiental/cartilha-reciclagem-de-lixo
            </p>
            <a
              href="https://www.prohomeimoveis.com.br/prohome-ambiental/cartilha-reciclagem-de-lixo/"
              className="card-link"
            >
              Ir para o site
            </a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Canal urbanismo e meio ambiente</h5>
            <p className="card-text">
              O site do canal urbanismo e meio ambiente disponibiliza diversos
              folhetos e cartilhas muito uteis para a educação social
            </p>
            <a
              href="https://urbanismoemeioambiente.fortaleza.ce.gov.br/infocidade/14-educacao-ambiental"
              className="card-link"
            >
              Ir para o site
            </a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Scribd</h5>
            <p className="card-text">
              Scribd é uma plataforma de compartilhamento de documentos digitais
              sobre diversos assuntos.
            </p>
            <a
              href="https://pt.scribd.com/doc/82793944/Cartilha-do-Lixo"
              className="card-link"
            >
              Ir para o site
            </a>
          </div>
        </div>
      </div>

      <div className={styles.cardI}>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">gov.br</h5>
            <a
              href="https://www.gov.br/pt-br/conteudos-externos/meio-ambiente-e-clima/gestao-do-lixo/servicos-gestao-do-lixo"
              className="card-link"
            >
              Ir para o site
            </a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">unimed.coop.br</h5>
            <a
              href="https://www.unimed.coop.br/portalunimed/cartilhas/voce-separa-o-lixo-corretamente/cartilha/voce-separa-o-lixo-corretamente.html"
              className="card-link"
            >
              Ir para o site
            </a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">gov.br</h5>
            <a
              href="https://www.gov.br/mma/pt-br/noticias/como-e-porque-separar-o-lixo"
              className="card-link"
            >
              Ir para o site
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
