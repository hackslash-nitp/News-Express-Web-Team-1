import React from 'react';
// import './Card.css';
import styles from '../styles/card.module.css';


function Card({title,imageUrl,body}) {
  return (
  <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
          <img src={imageUrl} alt='' />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
            <h3 className={styles.h3}>{title}</h3>
        </div>
        <div className={styles.cardBody}>
            <p className={styles.p}>{body}</p>
        </div>
      </div>
      
      <div className={styles.btn}>
          <button className={styles.button}>
              <a className={styles.a}>
                  View more
              </a>
          </button>
      </div>
  </div>
  )
}

export default Card;
