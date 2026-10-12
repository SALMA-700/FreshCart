import { getMyToken } from '@/utilities/getMyuToken.utilities';


export async function removeFromcart(id:string) {
    const token =await getMyToken()
    if (!token) {
        throw new Error('Login First')
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${id}`,{
        method:'DELETE',
        headers:{
            token,
            'Content-Type':'application/json'
        }
    })
    const payload =await response.json()
    return payload
}