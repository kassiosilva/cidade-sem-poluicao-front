import { useNavigate } from 'react-router'

import { ButtonFeature } from '../../components/button-feature'
import styles from './home.module.css'

export function Home() {
  const navigate = useNavigate()

  return (
    <main className={`${styles.main} vh-100`}>
      <header className={styles.header}>
        <h1>
          SEJA BEM VINDO (A) AO
          <br />
          PROJETO CIDADE SEM POLUIÇÃO!
        </h1>
      </header>

      <div className={styles.buttonContainer1}>
        <ButtonFeature
          text={'FAÇA AQUI SUAS \n DOAÇÕES'}
          onClick={() => navigate('/donations')}
        />

        <ButtonFeature
          text="ACOMPANHE AQUI OS DIAS DE COLETA DE LIXO"
          onClick={() => navigate('/wast-collection-info')}
        />
      </div>

      <div className={styles.buttonContainer2}>
        <ButtonFeature
          text={'CONSCIÊNCIA \n AMBIENTAL'}
          onClick={() => navigate('/environmental-awareness')}
        />

        <ButtonFeature
          text="FALE CONOSCO"
          onClick={() => navigate('/contact-us')}
        />
      </div>
    </main>
  )
}
