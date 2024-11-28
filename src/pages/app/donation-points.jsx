import { Card } from '../../components/card'
import PrefeituraLogo from '../../images/prefeitura-fortaleza.png'
import { redirectExternalLink } from '../../utils/redirect-external-link'
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

      <Card
        title="Prefeitura de Fortaleza"
        description="O site de Fortaleza disponibiliza diversas informações, incluindo também sobre o ambiente da cidade"
        imgSrc={PrefeituraLogo}
        className={styles.card}
        onClick={() =>
          redirectExternalLink(
            'https://catalogodeservicos.fortaleza.ce.gov.br/categoria/urbanismo-meio-ambiente/servico/122',
          )
        }
      />
    </div>
  )
}
