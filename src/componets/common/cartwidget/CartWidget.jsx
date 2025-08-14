import "./CartWidget.css";
import CustomButton from "../custombuttom/CustomButton"
import { FaShoppingCart } from "react-icons/fa";


export default function CartWidget() {
  return (
    <div style={{ padding: '20px', display: 'flex', gap: '10px' }}>
      <CustomButton fullWidth>Carrito <FaShoppingCart /></CustomButton>
    </div>
  )
}
