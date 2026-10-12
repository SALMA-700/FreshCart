"use server"
    import { getMyToken } from "@/utilities/getMyuToken.utilities"
interface Shipping{
    details:string,
    phone:string,
    city:string,
    postalCode:string

}
export async function checkoutsession(cartid:string , url:string , values:Shipping) {
        const token =await getMyToken()
        if (!token) {
            throw new Error('Login First')
        }
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}?url=${url}`,{
            method:'POST',
            headers:{
                token,
                'Content-Type':'application/json'
            },
            body:JSON.stringify({shippingAddress:values})
            
        })
        const payload =await response.json()
        if (!response.ok) {
            throw new Error(payload.message || 'Could not start checkout')
        }
        return payload
     }

export async function createCashOrder(cartid:string, values:Shipping) {
    const token = await getMyToken()
    if (!token) {
        throw new Error('Login First')
    }

    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartid}`, {
        method: 'POST',
        headers: {
            token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ shippingAddress: values }),
    })
    const payload = await response.json()

    if (!response.ok) {
        throw new Error(payload.message || 'Could not place your order')
    }

    return payload
}
