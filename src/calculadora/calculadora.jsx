import { useState } from "react";

const Calculadora = ()=> {
        let [numero1, setNumero1] = useState();
        let [numero2, setNumero2] = useState();

    const resultadoAd = () =>{
        resultado = numero1 + numero2
    };
    const resultadoSub = () =>{
        resultado = numero1 - numero2
    };
    const resultadoDiv = () =>{
        resultado = numero1 / numero2
    };
    const resultadoMul = () =>{
        resultado = numero1 * numero2
    };

    const handleChangeInput = (event) =>{
        setNumero1(event.target.value)

    }
    const handleChangeInput2 = (event) =>{
        setNumero2(event.target.value)

    }

    return(
     <section>
     <input type="number" onChange={handleChangeInput} value={numero1}/>
     <input type="number" onChange={handleChangeInput2}  value={numero2}/>
     <button onClick={resultadoAd}>+</button>
     <button onClick={resultadoSub}>-</button>
     <button onClick={resultadoMul}>*</button>
     <button onClick={resultadoDiv}>/</button>




    </section>
)
}


export default Calculadora;