import styles from './button-feature.module.css'

export function ButtonFeature({ onClick, text }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn btn-light ${styles.button} `}
    >
      {text}
    </button>
  )
}
