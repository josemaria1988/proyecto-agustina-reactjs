import {  useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../src/context/CartContext";
import Counter from "./Counter";
import Select from "./Select";
import '../scss/ItemDetail.scss';


const ItemDetail = ({item}) => {

    const { cart, addToCart, isInCart } = useCartContext()
    console.log(cart)


    const [cantidad, setCantidad] = useState(1)
    const [opcion,setopcion] = useState(item.opcion[0])

    
    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.price,
            nombre: item.name,
            opcion,
            cantidad,
        }
        
        addToCart(itemToCart)
    }

    return (

        <div className="container my-5">
            <h3>{item.name}</h3>
            <img className="foto" src={item.img} alt="Foto de la marca"/>
            <h4>{item.price}</h4>
            <p>{item.descripcion}</p>
            <p>{item.category}</p>
            <hr/>
            <Select options= {item.opcion} onSelect={setopcion}/>
            <hr/>


            {isInCart(item.id) && <p>Item ya agregado</p>}
            {
                isInCart(item.id)
                ?   <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
                :   <Counter 
                        max={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            }



        </div>
    )
}

export default ItemDetail


