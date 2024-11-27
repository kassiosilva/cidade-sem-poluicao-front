import GarrafasImg from '../../images/garrafas.png'
import PapelHigienicoImg from '../../images/papel-higienico.png'
import ReciclagemImg from '../../images/reciclagem.png'
import RestoDeAlimentosImg from '../../images/resto-de-alimentos.png'
import styles from './environmental-awareness.module.css'

export function EnvironmentalAwareness() {
  return (
    <div className={`${styles.main} vh-100`}>
      <header className={styles.header}>
        <h1>
          CONTRIBUA PARA UMA
          <br />
          FORTALEZA MAIS LIMPA!!!
        </h1>
      </header>

      <div className={styles.cardsContainer}>
        <div className="card" style={{ width: '18rem' }}>
          <img src={GarrafasImg} className="card-img-top" alt="Garrafas" />
          <div className="card-body">
            <p className={styles.cardText1}>
              Lixo reciclável: garrafas plásticas, papeis, metal, embalagens,
              vidro
            </p>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img
            src={RestoDeAlimentosImg}
            className="card-img-top"
            alt="Resto de alimentos"
          />
          <div className="card-body">
            <p className={styles.cardText2}>
              Lixo orgânico: resíduos de origem vegetal ou animal. Ex: restos de
              alimentos
            </p>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img
            src={PapelHigienicoImg}
            className="card-img-top"
            alt="Papel higiênico"
          />

          <div className="card-body">
            <p className={styles.cardText3}>
              Lixo comum: celofane, carbono, dejetos, papel alumínio, papel
              higiênico, etc
            </p>
          </div>
        </div>
      </div>

      <img
        src={ReciclagemImg}
        alt="Reciclagem"
        className={styles.imagemBaixa}
      />

      <p className={styles.textoDireitaImagem}>
        SE DESEJA ADQUIRIR CARTILHAS EDUCATIVAS, CLIQUE AQUI
      </p>
    </div>
  )
}
