

export default function Projects () {
    return(
    <section id="proyectos" class="proyectos-recientes seccion-clara d-flex flex-column">
      <h2 class="seccion-titulo texto-negro">Mis proyectos recientes</h2>
      <h3 class="seccion-descripcion">Estos son algunos proyectos que he creado recientemente...</h3>
            <div class="container text-center proyectos-contenedor">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="proyecto">
                        <img src="img/proyecto1.png" alt="Proyecto 1"/>
                        <div class="overlay">
                            <p>CRUD</p>
                            <div class="iconos-contenedor">
                            <a href="https://github.com/LordStoker/CRUD" target="_blank" rel="noopener noreferrer">
                                <i class="bi bi-github"></i>
                            </a> 
                            </div>
                        </div>
                       
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="proyecto">
                        <img src="img/proyecto2.png" alt="Proyecto 2"/>
                        <div class="overlay">
                            <p>Snake</p>
                            <div class="iconos-contenedor">
                            <a href="https://github.com/LordStoker/Snake-in-Java" target="_blank" rel="noopener noreferrer">
                                <i class="bi bi-github"></i>
                                </a>
                            </div>
                        </div>
                      
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="proyecto">
                        
                        <img src="img/proyecto3.png" alt="Proyecto 2"/>                        
                        <div class="overlay">
                            <p>Ahorcado</p>
                            <div class="iconos-contenedor">
                            <a href="https://github.com/LordStoker/Ahorcado" target="_blank" rel="noopener noreferrer">
                                <i class="bi bi-github"></i>
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



