{/* esse arquivo esta em outra pasta para ajudar na organizacao*/}

function Button(props) {
    {/*Posso escrever o return sem o parenteses porque eh uma linha so de codigo*/}

    return <button onClick={props.event}>{props.text}</button>
}

export default Button