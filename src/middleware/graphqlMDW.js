import { buildSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'
import { obtenerProducts, obtenerUnProduct, agregarProduct, borrarProduct } from '../controller/ProductsControllerGraphql.js'

const schema = buildSchema(`
  input ProductInput {
    nombre: String
    descripcion: String
    precio: Int
    stock: Int
    categoria: String
  }

  type Product
  {
    id: ID!
    nombre: String
    descripcion: String
    precio: Int
    stock: Int
    categoria: String
    fechaHora: String
  }
  type Query {
    obtenerUnProduct(id: ID!): Product
    obtenerProducts:[Product]
  }
  type Mutation {
    agregarProduct(datos: ProductInput!): Product
    borrarProduct(id: ID!): Product
  }
`)

export const graphqlMiddleware = graphqlHTTP({
  schema: schema,
  rootValue:
  {
    obtenerProducts,
    obtenerUnProduct,
    borrarProduct,
    agregarProduct,
  },
  graphiql: true,
})
