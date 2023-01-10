interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

interface IProducts {
  products: IProduct[] | undefined
}

interface IProductsSliceInitState {
  products: IProduct[] | undefined
  selectedCategory: string
}

interface ICategories {
  categories: string[] | undefined
}
