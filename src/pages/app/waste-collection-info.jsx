import EcoforLogo from '../../images/ecofor.png'
import FortalezaAmbientalLogo from '../../images/fortaleza-ambiental.png'
import MarquiseLogo from '../../images/marquise-ambiental.png'
import PrefeituraLogo from '../../images/prefeitura-fortaleza.png'
import styles from './waste-collection-info.module.css'

export function WasteCollectionInfo() {
  return (
    <div className={`${styles.main}`}>
      <h1>
        ABAIXO DISPONIBILIZAMOS ALGUNS SITES PARA VOCÊ SE MANTER INFORMADO A
        RESPEITO DO CALENDÁRIO DE COLETA DE LIXO EM NOSSA CIDADE OU EM CIDADES
        VIZINHAS:
      </h1>

      <div className={styles.cardsS}>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={MarquiseLogo}
            className="card-img-top"
            alt="Marquise Ambiental"
          />
          <div className="card-body">
            <h5 className={styles.cardTitle}>marquiseambiental.com.br</h5>
            <p className={styles.cardText}>
              Nesse site você pode encontrar informações sobre a coleta de lixo
              em algumas cidades vizinhas a Fortaleza
            </p>
            <a
              href="https://www.marquiseambiental.com.br/"
              className="btn btn-primary stretched-link"
            >
              Ir para o site
            </a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={PrefeituraLogo}
            className="card-img-top"
            alt="Prefeitura de Fortaleza"
          />
          <div className="card-body">
            <h5 className={styles.cardTitle}>fortaleza.ce.gov.br</h5>
            <p className={styles.cardText}>
              O site de Fortaleza disponibiliza diversas informações, incluindo
              também sobre o ambiente da cidade
            </p>
            <a
              href="https://www.fortaleza.ce.gov.br/"
              className="btn btn-primary stretched-link"
            >
              Ir para o site
            </a>
          </div>
        </div>
      </div>

      <div className={styles.cardsI}>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={FortalezaAmbientalLogo}
            className="card-img-top"
            alt="Imagem do site"
          />
          <div className="card-body">
            <h5 className={styles.cardTitle}>fortalezaambiental.com.br</h5>
            <p className={styles.cardText}>
              O site Fortaleza ambiental disponibiliza algumas informações de
              coleta de resíduos
            </p>
            <a
              href="https://fortalezaambiental.com.br/"
              className="btn btn-primary stretched-link"
            >
              Ir para o site
            </a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={EcoforLogo} className="card-img-top" alt="Imagem do site" />
          <div className="card-body">
            <h5 className={styles.cardTitle}>grupomarquise.com.br</h5>
            <p className={styles.cardText}>
              Site que informa a respeito da ecofor, empresa responsável pela
              limpeza na cidade. Também disponibiliza meios para a comunicação
            </p>
            <a
              href="https://www.grupomarquise.com.br/negocio/ecofor/"
              className="btn btn-primary stretched-link"
            >
              Ir para o site
            </a>
          </div>
        </div>
      </div>

      <h2>
        OS JORNAIS DE SUA CIDADE TAMBÉM PODEM AJUDÁ-LO (A) A SE MANTER
        INFORMADO!
      </h2>
    </div>
  )
}
