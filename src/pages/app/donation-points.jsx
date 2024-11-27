import styles from './donation-points.module.css'

export function DonationsPoints() {
  return (
    <div className={`${styles.main} vh-100`}>
      <h1>
        VISITE O SITE DA PREFEITURA DE FORTALEZA PARA SABER A LOCALIZAÇÃO DOS
        PONTOS DE DOAÇÕES DE SUA CIDADE
        <br />
        CLIQUE NO LINK ABAIXO
      </h1>

      <div className={styles.card} style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">SITE DA PREFEITURA DE FORTALEZA</h5>
          <a
            href="https://catalogodeservicos.fortaleza.ce.gov.br/categoria/urbanismo-meio-ambiente/servico/122"
            className="card-link"
          >
            Ir para o site
          </a>
        </div>
      </div>
    </div>
  )
}
