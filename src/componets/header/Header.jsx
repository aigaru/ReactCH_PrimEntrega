import "./Header.css"
import NavBar from "../navbar/Navbar"
import CartWitget from "../cartwidget/CartWidget"
import CustomButton from "../custombuttom/CustomButton"

export default function Header() {
  return (
    <header className="menu-container">
        <div className="logo-container">
        <img 
          src="src/assets/image/FBLogo.jpg" 
          alt="Logo de la tienda - diseño moderno con tipografía en negrita y colores azules" 
          className="logo"
        />
        </div>
        <NavBar />
        <CartWitget />
    </header>
  )
}
