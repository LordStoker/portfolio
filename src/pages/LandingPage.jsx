

// import heroImage from "public/img/hero-inferior.svg";

export default function Home () {
    return(
        <>
    <section className="hero align-items-stretch">
        <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
            <h1>Hola, soy Tomás Pérez Colomar</h1>
            <h2>Desarrollador de Aplicaciones Web y Programador</h2>
        </div>
        <div className="hero-inferior">
            <img
                className="hero-inferior-imagen img-fluid"
                src="img/hero-inferior.svg"
                alt="Monitor, laptop y logos de HTML, CSS, JavaScript y React."
            />
        </div>
    </section>
    <section className="sobre-mi seccion-oscura">
        <div className="contenedor">
            <h2 className="seccion-titulo">Conóceme</h2>
            <p className="seccion-texto">
            Tras trabajar como teleoperador durante 7 años y estar hasta las cejas de atender a personas con el coeficiente intelectual de un macaco en celo y con nula materia gris en sus cráneos, decidí aventurarme en el sector tecnológico. Algo que me llamó siempre y por fin tomé la decisión de dar el salto y meterme de lleno. Por ahora no considero que haya sido una mala decisión, pero han habido momentos y momentos...
            </p>
        </div>
    </section>  
        </>      

    );
}


