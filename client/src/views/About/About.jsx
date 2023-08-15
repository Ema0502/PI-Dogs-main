import style from "./About.module.css";

const About = () => {
  return (
      <div className={style["body-bg"]}>
        <div className={style["box"]}>
          <h2>Encantado de conocerte, en esta seccion de la pagina, te contaré un poco acerca del equipo</h2>
          <p>El equipo ha estado trabajando para que cada usuario pueda llevarse una gran experiencia, si tienes alguna sugerencia o quieres ponerte en contacto con el equipo,
            te dejo este correo como medio de contacto:
            ema050296@gmail.com 
            Saludos departe del staff～</p>
        </div>
      </div>
  )
}

export default About;