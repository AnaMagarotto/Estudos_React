import Frase from './Frase';

function HelloWorld() {

    return (
        <div>
             <Frase />
            <h1> Meu primeiro componente </h1>
            {/*Consigo utilizar o mesmo componenete varias vezes se for preciso */}
             <Frase />
        </div>
    )
}

export default HelloWorld