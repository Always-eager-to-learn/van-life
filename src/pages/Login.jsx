import { useNavigate, useLocation, Form } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './Login.module.css'
import { loginUser } from '../api'
import { setAuthenticationStatus } from '../auth'

export async function action(objData){
    const formData = await objData.request.formData()
    console.log(formData.get("email-id"))
    return null
}

export default function Login(){
    function setAuthentication(formData){
        const userEmail = formData.get('email-id')
        const userPassword = formData.get('password')
        setStatus("submitting")
        setError(null)
        loginUser({userEmail, userPassword})
            .then((data) => {
                setAuthenticationStatus()
                setUserData(data.user.name)
            })
            .catch((errorData) => setError(errorData))
            .finally(() => setStatus("idle"))
    }

    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    const [userData, setUserData] = useState(null)
    const navigate = useNavigate() // Since useNavigate has to be at the topmost level of the component
    const data = useLocation()
    const message = data.state !== null && (userData === null || error === null) ? data.state.message : null

   useEffect(() => {
    let timerId = null
    if(userData !== null){
        timerId = setTimeout(() => {
            navigate('/host')
        }, 1999)
    }

    return () => {
        if(timerId !== null){
            clearTimeout(timerId)
        }
    }
   }, [userData])

    return (
        <main>
            <section className={styles.form_design}>
                <section className={styles.information_section}>
                    <h1 className={`font-big ${styles.center}`}>Sign in to your Account</h1>
                    {message !== null ? 
                        <h2 className={`font-semi-big ${styles.center} red weight-500`}>{message}</h2> :
                        null
                    }
                    {error !== null ?
                        <h2 className={`font-semi-big red ${styles.center}`}>{error.message}</h2> :
                        null
                    }
                    {userData !== null ?
                        <section>
                            <h2 className={`font-semi-big ${styles.center} violet`}>Welcome, {userData} to project VanLife. 😀</h2>
                            <h2 className={`font-semi-big ${styles.center} violet`}>We hope you have a good time.</h2>
                        </section> :
                        null
                    }
                </section>
                
                <Form method='POST'>
                    <section className={styles.form_group}>
                        <label htmlFor="emailid" className='font-semi-big'>Email Address: </label>
                        <input type="email" name="email-id" id="emailid" required className='font-medium' autoFocus={true}/>    
                    </section>
                    
                    <section className={styles.form_group}>
                        <label htmlFor="passwordinfo" className='font-semi-big'>Password: </label>
                        <input type="password" name="password" id="passwordinfo" required={true} className='font-medium' minLength={3}/>
                    </section>

                    <button className={`font-medium ${styles.login_button} outline-set`} disabled={status !== 'idle' ? true : false}>
                        {status === "idle" ? `Log In` : `Logging In...`}
                    </button>
                </Form>
            </section>
        </main>
    )
}