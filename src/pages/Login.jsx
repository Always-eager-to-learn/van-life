import { Form, useActionData, useNavigation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './Login.module.css'
import { loginUser } from '../api'
import { getAuthenticationStatus, returnRedirect } from '../auth'

export async function action(objData){
    const formData = await objData.request.formData()
    const userEmail = formData.get("email-id")
    const userPassword = formData.get('password')
    try{
       await loginUser({userEmail, userPassword})
        return returnRedirect('/host')
    } catch(errorMessage){
        return errorMessage.message
    }
}

export async function loader(){
    const authenticationStatus = await getAuthenticationStatus()
    if(!authenticationStatus){
        return null
    }
    return returnRedirect('/')
}

export default function Login(){
    const [status, setStatus] = useState(null)
    const navigationStatus = useNavigation().state
    const error = useActionData()

    useEffect(() => {
        const data = sessionStorage.getItem('notification')

        if(data){
            sessionStorage.removeItem('notification')
            setStatus(data)
        }
    }, [])

    return (
        <main>
            <section className={styles.form_design}>
                <section className={styles.information_section}>
                    <h1 className={`font-big ${styles.center}`}>Sign in to your Account</h1>
                    {status !== null ? 
                        <h2 className={`font-semi-big ${styles.center} red weight-500`}>{status}</h2> : null
                    }
                    {error !== null ?
                        <h2 className={`font-semi-big red ${styles.center}`}>{error}</h2> : null
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

                    <button className={`font-medium ${styles.login_button} outline-set`} disabled={navigationStatus === 'idle' ? false : true}>
                        {navigationStatus === "idle" ? `Log In` : `Logging In...`}
                    </button>
                </Form>
            </section>
        </main>
    )
}