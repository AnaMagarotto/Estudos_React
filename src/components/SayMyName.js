{/*Utilizando props, o nome que eu quero utilizar esta escrito no app.js */}
function SayMyName(props) {

    return (
        <div>
            <p> Fala ai {props.nome}, suave?</p>
        </div>
    )
}

export default SayMyName