import React from "react";
import styles from './style.module.scss'
import styled from "styled-components";
const Span = styled.span`
padding:10px;
font-weight: 700;
font-size:12px;
`
function HomePage() {
    return (
        <div className={styles["back"]}>

            <div className={styles['text-block1']}>
                <h1 className={styles["main-title"]}>Home</h1>
                <span className={styles["block-1-title"]}>
                    The main page, which unfortunately has nothing on it yet.
                </span>
                <span className={styles["block-2-subtitle"]}> We look forward to changes soon...</span>
            </div>

            <div className={styles['text-block2']}>
                <img src="https://i.pinimg.com/236x/bf/3d/fb/bf3dfb305f46677bba2dab70b74fbb49.jpg" alt="art" className={styles["art-style"]} />
                <span className={styles["block-2-title"]}>
                    That's enough homework
                </span>
                <span className={styles["block-2-subtitle"]}>
                    Don't need to bother your head...
                </span>
                <Span>
                    Just lie down next to me and rest for at least 5 minutes.</Span>
            </div>
            <footer className={styles["footer"]}>
                <span className={styles["footer-text"]}>Все права защищены ©</span>
            </footer>
        </div>
    )
}
export default HomePage;