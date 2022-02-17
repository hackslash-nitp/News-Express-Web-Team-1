import React from 'react';
import styles from '../styles/DateTime.module.css';

const curDate = new Date().toLocaleDateString();
const curTime = new Date().toLocaleTimeString();


function DateTime(){
    return(
        <div className={styles.DateTime}>
            <p className={styles.date}>{curDate}</p>
            <p className={styles.time}>{curTime}</p>
        </div>
    )
}

export default DateTime;