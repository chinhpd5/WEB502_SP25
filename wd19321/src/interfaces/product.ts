interface IProduct {
  id:string
  title: string
  price: number
  stock: number
  description: string
  category: string
  thumbnail: string
}

export default IProduct;

export type ProductInput = Omit<IProduct,'id'|'stock'>