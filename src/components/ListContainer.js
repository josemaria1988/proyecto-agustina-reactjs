import ItemCount from "./ItemCount.js";

const ListContainer = ( {greeting } ) => {
    return (
        <div>
            <h1>Hello</h1>
            <p>{greeting}</p>
            <ItemCount stock={5}></ItemCount>
        </div>
    );

    }





export default ListContainer;