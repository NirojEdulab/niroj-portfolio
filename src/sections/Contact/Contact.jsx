import React from 'react'
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form action="">
            <div className='formGroup'>
                <label htmlFor="name" hidden>Name</label>
                <input type="text" name="name" id="name" placeholder='Name' required />
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden>Name</label>
                <input type="email" name="email" id="email" placeholder='Email' required />
            </div>
            <div className='formGroup'>
                <label htmlFor="message" hidden>Name</label>
                <textarea name="message" id="message" placeholder='Message' required></textarea>
            </div>
            <input className='btn hover' type="submit" value="Submit" />
        </form>
    </section>
  )
}

export default Contact
