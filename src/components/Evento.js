import Button from "./evento/Button"

function Evento() {

    function meuEvento () {
        console.log('Opa, fui ativado!')
        {/*Aparece no console do inspecionar*/}
    }

    function segundoEvento() {
        console.log('Ativando o segundo evento')
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            {/*A linha abaixo eh uma maneira de passar eventos para o props (propriedades)*/}
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
            {/*A linha abaixo faz com que o botao funcione,  afuncao onclick vai ativar o evento assim que clicarmos no botao, o evento esta armazenado no meuEvento*/}
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento