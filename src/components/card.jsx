export function Card({
  title,
  description,
  imgSrc,
  className,
  onClick,
  buttonText = 'Ir para o site',
}) {
  return (
    <div className={`card ${className}`} style={{ width: '18rem' }}>
      <img src={imgSrc} className="card-img-top" alt="Marquise Ambiental" />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">{description}</p>

        <button onClick={onClick} className="btn btn-primary stretched-link">
          {buttonText}
        </button>
      </div>
    </div>
  )
}
