function Saudacao({nome}) {

    {/*Funcao abaixo para fazer uma saudacao a algum nome escolhido*/}
    function gerarSaudacao(algumNome) {
        return `Ola! ${algumNome}, tudo bem?`
    }

    return <> {/*So vai executar a frase abaixo, se contemplar a condicao, que no caso eh ter um nome {escrito no input*/}
    {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
}

export default Saudacao