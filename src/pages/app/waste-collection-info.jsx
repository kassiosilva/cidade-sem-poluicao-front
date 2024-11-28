import { Card } from '../../components/card'
import EcoforLogo from '../../images/ecofor.png'
import FortalezaAmbientalLogo from '../../images/fortaleza-ambiental.png'
import MarquiseLogo from '../../images/marquise-ambiental.png'
import PrefeituraLogo from '../../images/prefeitura-fortaleza.png'
import { redirectExternalLink } from '../../utils/redirect-external-link'
import styles from './waste-collection-info.module.css'

export function WasteCollectionInfo() {
  return (
    <div className={styles.main}>
      <h1>
        ABAIXO DISPONIBILIZAMOS ALGUNS SITES PARA VOCÊ SE MANTER INFORMADO A
        RESPEITO DO CALENDÁRIO DE COLETA DE LIXO EM NOSSA CIDADE OU EM CIDADES
        VIZINHAS:
      </h1>

      <div className={styles.cardsS}>
        <Card
          imgSrc={MarquiseLogo}
          title="Marquise Ambiental"
          description="Nesse site você pode encontrar informações sobre a coleta de lixo em algumas cidades vizinhas a Fortaleza"
          onClick={() =>
            redirectExternalLink('https://www.marquiseambiental.com.br/')
          }
        />

        <Card
          imgSrc={PrefeituraLogo}
          title="Prefeitura de Fortaleza"
          description="O site de Fortaleza disponibiliza diversas informações, incluindo também sobre o ambiente da cidade"
          onClick={() =>
            redirectExternalLink('https://www.fortaleza.ce.gov.br/')
          }
        />
      </div>

      <div className={styles.cardsI}>
        <Card
          imgSrc={FortalezaAmbientalLogo}
          title="Fortaleza Ambiental"
          description="O site Fortaleza ambiental disponibiliza algumas informações de coleta de resíduos"
          onClick={() =>
            redirectExternalLink('https://fortalezaambiental.com.br/')
          }
        />

        <Card
          imgSrc={EcoforLogo}
          title="Grupo Marquise"
          description="Site que informa a respeito da ecofor, empresa responsável pela limpeza na cidade. Também disponibiliza meios para a comunicação"
          onClick={() =>
            redirectExternalLink(
              'https://www.grupomarquise.com.br/negocio/ecofor/',
            )
          }
        />
      </div>

      <h2>
        OS JORNAIS DE SUA CIDADE TAMBÉM PODEM AJUDÁ-LO (A) A SE MANTER
        INFORMADO!
      </h2>
    </div>
  )
}
