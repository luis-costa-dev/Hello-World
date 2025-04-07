import { useState } from "react";

const HelloWorld = ()=> {

    let [name, setName] = useState('');
    let [message, setMessage]= useState('');

    const handleHelloWorld =() =>{
        setMessage(`Hello world, ${name}`)
    };

    function handleClear () {
        setMessage('');
        setName('');

        
    };

    const handleChangeInput = (event) =>{
        setName(event.target.value)

    }
    const handleKeyUp = (event) =>{
        console.log(event);
        if(event.key === 'Escape'){handleClear();
        }else if(event.key === 'Enter'){
            handleHelloWorld();
        }
    };



    return(

        <section>
        <h1>Hello World</h1>
        <input type="text" onChange={handleChangeInput} onKeyUp={handleKeyUp} value={name}/>
        <button onClick={handleHelloWorld}>Hello World</button>
        <button onClick={handleClear}>Limpar</button>
        {message && <p>{message}</p>}
        </section>
    )

}

//const HelloWorld = () => {

//}

export default HelloWorld;