import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.container}>
            {' '}
            <p>Made by Nobody for Somebody © {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer
