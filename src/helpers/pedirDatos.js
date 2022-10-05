import { stock } from '../data/productos'

export const pedirDatos = () => {
    return new Promise (( resolve, reject ) => {
        setTimeout (() => {
            resolve(stock)
        },3000)
    }) 
}


