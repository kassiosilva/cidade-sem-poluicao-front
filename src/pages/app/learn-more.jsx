import { Card } from '../../components/card'
import { redirectExternalLink } from '../../utils/redirect-external-link'
import styles from './learn-more.module.css'

export function LearnMore() {
  return (
    <div className={styles.main}>
      <h1>
        ABAIXO DISPONIBILIZAMOS ALGUNS LINKS DE SITES QUE PODERÃO SER MUITO
        ÚTEIS PARA O SEU APRENDIZADO A RESPEITO DO LIXO
      </h1>

      <div className={styles.cardS}>
        <Card
          title="Gemas ufpa"
          description="Com o objetivo de promover a conscientização coletiva a respeito do assunto, o site gemas.ufpa.br teve a iniciativa de produzir um conteúdo de excelente didática para essa finalidade."
          onClick={() =>
            redirectExternalLink(
              'https://gemas.ufpa.br/produ%C3%A7%C3%B5es/cartilhas',
            )
          }
        />

        <Card
          title="Prohome"
          description="O site da prohome imoveis, além de fornecer uma cartilha, disponibiliza um e-book para download."
          onClick={() =>
            redirectExternalLink(
              'https://www.prohomeimoveis.com.br/prohome-ambiental/cartilha-reciclagem-de-lixo/',
            )
          }
        />

        <Card
          title="Canal urbanismo e meio ambiente"
          description="O site do canal urbanismo e meio ambiente disponibiliza diversos
              folhetos e cartilhas muito uteis para a educação social."
          onClick={() =>
            redirectExternalLink(
              'https://urbanismoemeioambiente.fortaleza.ce.gov.br/infocidade/14-educacao-ambiental',
            )
          }
        />
      </div>

      <div className={styles.cardI}>
        <Card
          title="Scribd"
          description="Scribd é uma plataforma de compartilhamento de documentos digitais
              sobre diversos assuntos."
          onClick={() =>
            redirectExternalLink(
              'https://pt.scribd.com/doc/82793944/Cartilha-do-Lixo',
            )
          }
        />

        <Card
          title="gov.br"
          description="Veja mais algumas informações sobre serviços de gestão do lixo."
          onClick={() =>
            redirectExternalLink(
              'https://www.gov.br/pt-br/conteudos-externos/meio-ambiente-e-clima/gestao-do-lixo/servicos-gestao-do-lixo',
            )
          }
        />

        <Card
          title="unimed.coop.br"
          description="Quer aprender mais? Acesse a cartilha disponibilizada pela Unimed."
          onClick={() =>
            redirectExternalLink(
              'https://www.unimed.coop.br/portalunimed/cartilhas/voce-separa-o-lixo-corretamente/cartilha/voce-separa-o-lixo-corretamente.html',
            )
          }
        />
      </div>
    </div>
  )
}
