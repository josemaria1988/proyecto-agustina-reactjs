import Item from "./item";
import '../scss/ItemList.scss'


const ItemList = ( {productos = []} ) => {

    return (
        <div className="container my-5">
            <h2>¡Comprá lo mejor para tu mascota, desde tu casa cualquier día!</h2>
            <hr/>
            <div className="cards">{  productos.map((prod) => <Item className="Marcas" producto={prod} key={prod.id}/>)}</div>
        </div>
    )
}

export default ItemList

