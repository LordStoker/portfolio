

export default function Projects () {
    return(
    <section id="proyectos" className="proyectos-recientes seccion-clara d-flex flex-column">
      <h2 className="seccion-titulo texto-negro">Mis proyectos recientes</h2>
      <h3 className="seccion-descripcion">Estos son algunos proyectos que he creado recientemente...</h3>
            <div className="container text-center proyectos-contenedor">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="proyecto">
                        <img src="img/proyecto1.png" alt="Proyecto 1"/>
                        <div className="overlay">
                            <p>CRUD</p>
                            <div className="iconos-contenedor">
                            <a href="https://github.com/LordStoker/CRUD" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github"></i>
                            </a> 
                            </div>
                        </div>
                       
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="proyecto">
                        <img src="img/proyecto2.png" alt="Proyecto 2"/>
                        <div className="overlay">
                            <p>Snake</p>
                            <div className="iconos-contenedor">
                            <a href="https://github.com/LordStoker/Snake-in-Java" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github"></i>
                                </a>
                            </div>
                        </div>
                      
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="proyecto">
                        
                        <img src="img/proyecto3.png" alt="Proyecto 2"/>                        
                        <div className="overlay">
                            <p>Ahorcado</p>
                            <div className="iconos-contenedor">
                            <a href="https://github.com/LordStoker/Ahorcado" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github"></i>
                            </a>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



