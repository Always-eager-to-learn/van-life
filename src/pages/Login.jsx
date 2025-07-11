import { Link, useLocation } from 'react-router-dom'
import styles from './Login.module.css'

export default function Login(){
    // eslint-disable-next-line no-unused-vars
    function setAuthentication(formData){
        
    }

    const data = useLocation()
    const message = data.state !== null ? data.state.message : null

    return (
        <main>
            <section className={styles.form_design}>
                <section className={styles.information_section}>
                    <h1 className={`font-big ${styles.center}`}>Sign in to your Account</h1>
                    {message !== null ? 
                        <h2 className={`font-semi-big ${styles.center} red weight-500`}>{message}</h2> :
                        null
                    }
                </section>
                
                <form action={setAuthentication}>
                    <section className={styles.form_group}>
                        <label htmlFor="emailid" className='font-semi-big'>Email Address: </label>
                        <input type="email" name="email-id" id="emailid" required className='font-medium' autoFocus={true}/>    
                    </section>
                    
                    <section className={styles.form_group}>
                        <label htmlFor="passwordinfo" className='font-semi-big'>Password: </label>
                        <input type="password" name="password" id="passwordinfo" required={true} className='font-medium' minLength={3}/>
                    </section>

                    <button className={`font-medium ${styles.login_button}`}>Sign In</button>
                </form>
            </section>

            <p className={`font-medium ${styles.create_account} ${styles.center}`}>Don't have an account? <Link to='.' className='font-medium'>Create one now</Link></p>
        </main>
    )
}