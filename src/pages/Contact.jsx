

export default function Contact() {
    return(
<section id="contacto" className="contacto seccion-oscura">
      <div className="container">
        <div className="container text-center rectangulo d-flex justify-content-evenly">
          <div className="row">
            <div className="col-12 col-md-4 seccion-titulo">
              ¡Escríbeme por aquí!
            </div>
            <div className="col-12 col-md-4 descripcion">
              Si lo que quieres es una página web, olvídate de mí. Si lo que quieres es que cumpla tus sueños, soy tu hombre.
            </div>
            <div className="col-12 col-md-4">
                <form action="">
                    <input type="text" placeholder="Nombre" />
                    <input type="email" placeholder="Correo" />
                    <button type="submit">  
                    Enviar
                    <i className="bi bi-envelope-check-fill"></i>
                    </button>
                </form>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}




