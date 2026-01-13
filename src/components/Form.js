import { useState } from "react"

function Form () {

    {/*A letra e no cadastrarUsuario significa evento, relacionado ao evento da submissao*/}
    function cadastrarUsuario(e) {
        {/*para a execucao do formulario e vai direto para o console log*/}
        e.preventDefault()
        console.log(`Usuario ${name} foi cadastrado com a senha: ${password}`)
    }

    {/*name ira resgatar o nome do atributo e o setName vai ser o que eu vou alterar*/}
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    
    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                {/*Quando o forms for enviado, ele vai disparar um evento*/}
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type= "text" id="name" name="name" placeholder="Digite o seu nome" 
                    onChange={(e) => setName(e.target.value)}/>
                    {/*Faz com que a cada letra que eu digite dentro do campo, modifique o valor no state e apareca no console do inspecionar */}
                </div>
                 <div>
                    <label htmlFor="password">Senha:</label>
                    <input type= "password" id="password" name="password" placeholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>

    )
}

export default Form

{/*value={name} dentro do input do name, com essa parte eu ja preenchia automaticamente o campo com a informacaon entre parenteses no const name do useState*/}