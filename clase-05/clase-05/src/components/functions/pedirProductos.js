import data from '../../data/data.json';

export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

