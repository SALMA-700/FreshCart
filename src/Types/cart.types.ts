export interface CartType{
    status:string
    numOfCartItems:number
    cartId:string
    data:cartTyping

}
export interface cartTyping {
  cartOwner: string;
  createdAt: string;
  products: CartProduct[];
  totalCartPrice: number;
  updatedAt: string;
  __v: number;
  _id: string;
}
export interface CartProduct {
  count: number;
  price: number;
  product: {
    brand: {
      _id: string;
      name: string;
      slug: string;
      image: string;
    };
  
   category: {
      _id: string;
      name: string;
      slug: string;
      image: string;
    };

    _id: string;
    id: string;
    imageCover: string;
    quantity: number;
    ratingsAverage: number;
    slug: string;
    title: string;

    subcategory: {
      _id: string;
      name: string;
      slug: string;
      category: string;
    };
  };
}