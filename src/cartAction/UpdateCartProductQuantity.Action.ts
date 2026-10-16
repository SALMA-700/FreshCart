"use server"

import { getMyToken } from "@/utilities/getMyuToken.utilities"



export async function updateCart(id:string, count:number ) {
    
     const token =await getMyToken()
        if (!token) {
            throw new Error('Login First')
        }
        const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${id}`,{
            method:'PUT',
            headers:{
                token,
                'Content-Type':'application/json'
            },
            body:JSON.stringify({count:count})
        })
        const payload =await response.json()
        return payload
}