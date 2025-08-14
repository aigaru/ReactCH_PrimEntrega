import "./Header.css"
import NavBar from "../navbar/Navbar"
import CartWitget from "../../common/cartwidget/CartWidget"
import LoginButton from "../../common/loginButton/LoginBtn"


import IMGLogo from "../../../assets/image/FBLogo.jpg"

export default function Header() {
  return (
    <header className="menu-container">
        <div className="logo-container">
        <img 
          src={IMGLogo}
          alt="Logo de la tienda - diseño moderno con tipografía en negrita y colores azules" 
          className="logo"
        />
        </div>
        <NavBar />
        <CartWitget />
        <LoginButton />
    </header>
  )
}
