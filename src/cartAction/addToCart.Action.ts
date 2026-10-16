"use server"
import { getMyToken } from "@/utilities/getMyuToken.utilities"



 export async function addProductToCart (id :string){
    const token =await getMyToken()
    if (!token) {
        throw new Error('Login First')
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`,{
        method:'POST',
        headers:{
            token,
            'Content-Type':'application/json'
        },
        body:JSON.stringify({productId:id})
        
    })
    const payload =await response.json()
    return payload
 }