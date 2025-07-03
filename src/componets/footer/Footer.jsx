import "./Footer.css"
export default function Footer() {
  return (
    <footer>
        <p>
            ¡Gracias por visitar mi Web! Aquí encontrarás una muestra de mis proyectos más destacados, donde combino creatividad y tecnología para ofrecer soluciones innovadoras. 
            Si estás buscando un desarrollador apasionado y comprometido, no dudes en contactarme. ¡Hagamos realidad tus ideas!
        </p>
        <div className="containerSocialMedia">
            <a href="https://www.facebook.com"><div className="socialFb"></div></a>
            <a href="https://www.instagram.com"><div className="socialIg"></div></a>
            <a href="https://www.youtube.com"><div className="socialYt"></div></a>
            <a href="https://www.github.com"><div className="socialGh"></div></a>
            <a href="https://www.linkedin.com"><div className="socialLn"></div></a>
        </div>
    </footer> 
  )
}
