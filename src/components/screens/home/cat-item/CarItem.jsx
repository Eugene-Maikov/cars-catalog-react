import styles from '../Home.module.css'

// eslint-disable-next-line react/prop-types
function CarItem({car}) {
  return (
    <div className={styles.item}>
      <div
        className={styles.image}
        style={{
          // eslint-disable-next-line react/prop-types
          backgroundImage: `url(${car.image})`
        }}
      />
      <div className={styles.info}>
        {/* eslint-disable-next-line react/prop-types */}
        <h2>{car.name}</h2>
        <p>${new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'USD'
          }
          // eslint-disable-next-line react/prop-types
        ).format(car.price)}</p>
        <button>Read more</button>
      </div>
    </div>
  )
}

export default CarItem