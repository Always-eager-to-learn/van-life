import { Link } from 'react-router-dom'
import styles from './Login.module.css'

export default function Login(){
    // eslint-disable-next-line no-unused-vars
    function setAuthentication(formData){
        
    }

    return (
        <main>
            <h1 className={`font-big ${styles.center}`}>Sign in to your Account</h1>
            <form action={setAuthentication}>
                <label htmlFor="emailid" className='font-semi-big'>Email Address: </label>
                <input type="email" name="email-id" id="emailid" required className='font-medium' autoFocus={true}/>

                <label htmlFor="passwordinfo" className='font-semi-big'>Password: </label>
                <input type="password" name="password" id="passwordinfo" required={true} className='font-medium' minLength={3}/>

                <button className={`font-medium ${styles.login_button}`}>Sign In</button>
            </form>

            <p className={`font-medium ${styles.create_account} ${styles.center}`}>Don't have an account? <Link to='.' className='font-medium'>Create one now</Link></p>
        </main>
    )
}