import {useState} from "react";


export const CountCart = () => {

    const [counterCart, setCounterCart] = useState(0);

    const counterAddCart = () => {
        setCounterCart(counterCart + 1);
    }
    return (
        <div>
            <h2>{counterCart}</h2>
            <button onClick={counterAddCart}>Sumar Contador</button>
        </div>
    );
}
