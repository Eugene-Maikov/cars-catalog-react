import styles from '../Home.module.css'
import {Link} from "react-router-dom";

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
        <Link className='btn' to={`/car/${car.id}`}>
          Read more
        </Link>
      </div>
    </div>
  )
}

export default CarItem