import React from "react";
import styled from "styled-components";
import styles from '../../App.module.scss';
const A_link = styled.a`
font-weight: bold;
color: blue;
`
function ErrorPage() {
    return (
        <div className={styles['error-page-bg']}>
            <div className={styles["error-page-text"]}>
                <span>Page not found go to</span>
                <A_link href="/"> Home</A_link>
            </div>

        </div>
    )
}
export default ErrorPage;