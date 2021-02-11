import * as React from 'react';

import logo from './assets/react-icon.png';

import styles from './style.module.css';

export default function Example() {
    return (
        <div className={styles.root}>
            <h1>Hi there!</h1>
            <img width="240px" src={logo} alt="logo" />
        </div>
    );
}
