import { ProductsApi } from '../api/ProductsApi.js'
import logger from '../logger.js'

const products = new ProductsApi();

//devuelve todos los productos de la coleccion
export async function obtenerProducts() {
    logger.info(`GET api/products`)
    try {
        return await products.getProducts()
    }
    catch (err) {
        logger.error(err);
        return err
    }
}

//dado un id devuelve los datos de ese producto
export async function obtenerUnProduct(product) {
    logger.info(`GET api/products/{id como filtro}`)
    try {
        return await products.getProduct(product.id)
    }
    catch (err) {
        logger.error(err);
        return err
    }
}

//Con los datos del body agrega un producto a la coleccion y devuelve el id creado 
export async function agregarProduct(product) {
    logger.info(`POST api/products`)
    try {
        return await products.addProduct(product.datos)
    }
    catch (err) {
        logger.error(err);
        return err
    }
}

//dado un id por parametro borra el mismo de la coleccion
export async function borrarProduct(product) {
    logger.info(`DELETE api/products`)
    try {
        return await products.deleteProduct(product.id)
    }
    catch (err) {
        logger.error(err);
        return err
    }
}
