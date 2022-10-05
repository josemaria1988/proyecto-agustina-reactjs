import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { useForm } from "../hooks/useForm"
import "../scss/LoginScreen.scss"




const LoginScreen = () => {

    const {login, user} = useContext(LoginContext)
    const { values, handleInputChange } = useForm({
        email: '',
        pass: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        login(values)
    }

    return (
        <div style={{backgroundColor: 'bisque'}}>
            
            <form onSubmit={handleSubmit} className="container py-5">
                <div className="container my-5">
                <h2>Inicio de sesión</h2>
                <hr></hr>
                </div>
                <div> 
                <h3 className="palabras">Email:</h3>
                </div>
                <input 
                    name= "email"
                    type={'email'}
                    className='form-control my-2'
                    value={values.email}
                    onChange={handleInputChange}
                />
                <div>
                <h3 className="palabras">Contraseña:</h3>
                </div>
                <input 
                    name="pass"
                    type={'password'}
                    className='form-control my-2'
                    value={values.pass}
                    onChange={handleInputChange}
                />
                {user.error && <small>{user.error}</small>}

                <button className="btn btn-primary" type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default LoginScreen