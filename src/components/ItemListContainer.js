
import ItemList from "./ItemList";
import '../scss/ItemListContainer.scss';
import Loader from "./Loader"
import { useProductos } from "../hooks/useProductos"

const ItemListContainer = () => {
    const { productos, loading} = useProductos()

    return (
        <div>
            {
                loading 
                ? <Loader/>
                : <ItemList productos={productos}/>
            }

        </div>   

    )
}

export default ItemListContainer