import "./loginBtn.css";
import CustomButton from "../custombuttom/CustomButton"
import { GrLogin } from "react-icons/gr";

export default function loginBtn() {
  return (
    <div style={{ padding: '20px', display: 'flex', gap: '10px' }}>
      <CustomButton fullWidth>Iniciar Sesion < GrLogin  /></CustomButton>
    </div>
  )
}