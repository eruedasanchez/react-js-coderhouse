import data from '../../data/data.json';

export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(data);}, 600)
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((elem) => elem.id === id);

        if(item){
            resolve(item)
        } else {
            reject({error: "No se encontro el producto"})
        }
    })
}



