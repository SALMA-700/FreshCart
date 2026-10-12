"use server"

import { getMyToken } from "@/utilities/getMyuToken.utilities"



 export async function getLoggedUserCart (){
    const token =await getMyToken()
    if (!token) {
        throw new Error('Login First')
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`,{
        method:'GET',
        headers:{
            token,
            'Content-Type':'application/json'
        }
        
    })
    const payload =await response.json()
    if (!response.ok) {
        throw new Error(payload.message || 'Could not load your cart')
    }
    return payload
 }