import { useState } from "react"

function SeuNome({setNome}) {

    {/*Normalmente iriamos escrever a frase abaixo nesse tipo de situacao, mas como queremos que os  valores subam para o componente pai e sejam usados em outros componentes filhos, para isso vamos no App Js

    const [nome, setNome] = useState()*/}

    return(
        <div>
            <p>Digite seu nome:</p>
            <input type="text" placeholder="Qual eh o seu nome?"
            onChange={(e) => setNome(e.target.value)} />
            {/*Nessa parte acima, eu crio um evento (e) em que vou ter uma mudanca (onChange) e essa mudanca sera gerada pelo setNome, no qual eu coloquei um target.value, que ira imprimir caracter por caracter que eu digitar*/}
        </div>
    )
}

export default SeuNome