
const Contacto = () => {

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(event)
    }

    return (
        <div className="container my-5">
            <h2>Contacto</h2>
            <hr></hr>

            <form onSubmit={handleSubmit}>
                <input 
                    type={'text'}
                    className='form-control my-2'
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto