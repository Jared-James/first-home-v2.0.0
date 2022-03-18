import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.container}>
            {' '}
            <p>Made by no one for someone {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer
