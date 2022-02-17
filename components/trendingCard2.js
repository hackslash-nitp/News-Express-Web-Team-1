import React from 'react';
// import './Card.css';
import styles from '../styles/trendingCard2.module.css';

function TrendingCard2({title,imageUrl,body}) {
    return (
    <div className={styles.cardContainer}>
        {/* <div className={styles.imageContainer}> */}
        <img className={styles.imageContainer} src={imageUrl} alt='' />
         <div className={styles.cardContent}>
         
          <div className={styles.cardTitle}>
              
              <h3 className={styles.h3}>{title}</h3>
          </div>
          <div className={styles.cardBody}>
              <p className={styles.p}>{body}</p>
          </div>
          <div className={styles.btn}>
            <button className={styles.button}>
                <a className={styles.a}>
                    View more
                </a>
            </button>
        </div>
        </div>
        
        
        {/* </div> */}
        
    </div>
    )
  }
  
  export default TrendingCard2;