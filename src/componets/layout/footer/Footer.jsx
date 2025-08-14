import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-text-section">
            <p className="footer-description">
              ¡Gracias por visitar mi Web! Aquí encontrarás una muestra de mis proyectos más destacados, 
              donde combino creatividad y tecnología para ofrecer soluciones innovadoras. 
              Si estás buscando un desarrollador apasionado y comprometido, no dudes en contactarme. 
              <span className="highlight">¡Hagamos realidad tus ideas!</span>
            </p>
          </div>
          
          <div className="social-section">
            <div className="containerSocialMedia">
              <a 
                href="https://www.facebook.com" 
                className="social-link facebook"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visitar Facebook"
              >
                <div className="socialFb social-icon">
                  <span className="social-tooltip">Facebook</span>
                </div>
              </a>
              
              <a 
                href="https://www.instagram.com" 
                className="social-link instagram"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visitar Instagram"
              >
                <div className="socialIg social-icon">
                  <span className="social-tooltip">Instagram</span>
                </div>
              </a>
              
              <a 
                href="https://www.youtube.com" 
                className="social-link youtube"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visitar YouTube"
              >
                <div className="socialYt social-icon">
                  <span className="social-tooltip">YouTube</span>
                </div>
              </a>
              
              <a 
                href="https://www.github.com" 
                className="social-link github"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visitar GitHub"
              >
                <div className="socialGh social-icon">
                  <span className="social-tooltip">GitHub</span>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com" 
                className="social-link linkedin"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visitar LinkedIn"
              >
                <div className="socialLn social-icon">
                  <span className="social-tooltip">LinkedIn</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
