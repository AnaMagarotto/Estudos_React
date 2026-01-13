function OutraLista({ itens }) {

{/*Vou criar um loop com a funcao map, que vai percorrer a minha lista array de itens e alem de percorrer a lista, ela tambem vai imprimir os valores dos itens */}

    return (
        <>
            <h3>Lista de coisas boas:</h3>
            {/*sintaxe abaixo da funcao map, percorrendo os itens da lista*/}
            {/*quando realizamos um map, nso precisamos que cada um dos itens da lista tenha seu proprio id, sua identificacao unica, porem vamso realizar essa solucao de outra forma, para identificar os itens, vamos utilizar um index, indice do elemento*/}
            {/*Outra coisa que vamos fazer, eh imprimir um feedback para o usuario quando nossa lista nao tiver nenhum item, precisamos criar uma condicional if e else mas iremos utilizar outros nomes, como itens.length maior que zero, imprime o codigo normal ate agora e o else sera o :, dois pontos, e ele vai ter uma frase falando que nao ha itens na lista*/}
            {itens.length > 0 ? (
                itens.map((item, index) => <p key={index}>{item}</p>)
             ) : (
                <p>Nao ha itens na Lista!</p>
            )}
        </>
    )
}

export default OutraLista 