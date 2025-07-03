import "./Navbar.css";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container">
            <a class="navbar-brand" href="#">
              <div class="logo"></div>
            </a>
      
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
      
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./page/portafolio.html">Portafolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./page/p_realizados.html">Proyectos Realizados</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./page/contacto.html">Contacto</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./page/hobbie.html">Hobbie</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  )
}
