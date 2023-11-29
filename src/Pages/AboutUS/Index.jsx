import React from "react";
import styles from '../../App.module.scss'
function AboutUs() {
    return(
        <div className={styles['background']}>
            <div className={styles['text']}>
                <h1 className={styles['us-title-1']}>Random Company Name Generator</h1>
                <span className={styles['us-subtitle-1']}>Your job is terrible unless you work for one of these top companies. 
                     Pick a random company and apply to work there. 
                     Benefits are probably good. Hopefully you get some stock options. 
                        Really though, its still going to be a terrible job and you're probably not qualified.
                 </span>
                 <span className={styles['us-body-1']}>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex pariatur dolore quia necessitatibus quo voluptas.
                </span>
                <h3 className={styles['us-title-2']}>Our programms</h3>
                <span className={styles['us-subtitle-2']} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat corrupti veritatis autem soluta beatae officiis? Similique modi iusto quaerat quis?
                </span>
                <span className={styles['us-body-2']}>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex pariatur dolore quia necessitatibus quo voluptas.
                </span>
                <h2 className={styles['us-title-3']}>Service</h2>
                <span className={styles['us-subtitle-3']}>
                     Lorem ipsum dolor sit amet.
                </span>
                <span className={styles['us-body-3']}>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex pariatur dolore quia necessitatibus quo voluptas.
                </span>
                
            </div>
        </div>
    )
}
export default AboutUs