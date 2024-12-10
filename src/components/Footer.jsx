


export default function Footer () {
    return(
        <footer className="seccion-oscura d-flex flex-column align-items-center justify-content-center">
            <p className="footer-texto text-center">
            Aprendo y creo todos los días.<br />
            Creemos un proyecto juntos.
            </p>
            <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
            <a href="https://github.com/LordStoker" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
            </a>
            <a
                href="https://www.linkedin.com/in/tom%C3%A1s-p%C3%A9rez-colomar-21475b115/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="bi bi-linkedin"></i>
            </a>
            <a href="mailto:email@hotmail.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-envelope"></i>
            </a>
            </div>
            <div className="derechos-de-autor">Creado por Tomás Pérez Colomar (2024) &#169;</div>
        </footer>
    )
}
  



