
"use server"

import { getMyToken } from "@/utilities/getMyuToken.utilities"

export async function deleteFromWishList(id:string) {
    const token = await getMyToken()
    if (!token) {
        throw new Error('Login Again')
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
        method:'DELETE',
        headers:{
            token,
            'Content-Type':'application/json'
        },
        
    })
    const payload = await response.json()
    return payload;
}