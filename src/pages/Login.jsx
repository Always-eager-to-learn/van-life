import { Link } from 'react-router-dom'
import styles from './Login.module.css'

export default function Login(){
    function setAuthentication(formData){
        console.log(formData.get('email-id'))
    }

    return (
        <main>
            <h1 className={`font-big ${styles.center}`}>Sign in to your Account</h1>
            <form action={setAuthentication}>
                <label htmlFor="emailid" className='font-medium'>Email Address: </label>
                <input type="email" name="email-id" id="emailid" required className='font-medium' autoFocus={true}/>

                <label htmlFor="passwordinfo" className='font-medium'>Password: </label>
                <input type="password" name="password" id="passwordinfo" required={true} className='font-medium'/>

                <button className={`font-medium ${styles.login_button}`}>Sign In</button>
            </form>

            <p className={`font-medium ${styles.create_account} ${styles.center}`}>Don't have an account? <Link to='.' className='font-medium'>Create one now</Link></p>
        </main>
    )
}