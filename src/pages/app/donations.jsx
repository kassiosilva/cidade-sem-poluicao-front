import { useNavigate } from 'react-router'

import { ButtonFeature } from '../../components/button-feature'
import styles from './donations.module.css'

export function Donations() {
  const navigate = useNavigate()

  return (
    <div className={`${styles.main} vh-100`}>
      <header className={styles.header}>
        <h1>FAÇA AQUI SUAS DOAÇÕES</h1>
      </header>

      <div className={styles.buttonContainer1}>
        <ButtonFeature
          text={'CADASTRO DE \n DOADOR'}
          onClick={() => navigate('/register-donor')}
        />

        <ButtonFeature
          text={'PONTOS DE \n DOAÇÕES'}
          onClick={() => navigate('/donation-points')}
        />
      </div>

      <div className={styles.buttonContainer2}>
        <ButtonFeature text="MENU ANTERIOR" onClick={() => navigate(-1)} />
      </div>
    </div>
  )
}
