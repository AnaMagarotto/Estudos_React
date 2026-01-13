import Item from './Item';

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Melu" ano_lancamento={2020}/>
                <Item marca="Ruby" ano_lancamento={2022}/>
            </ul>
        </>
    )

}

export default List