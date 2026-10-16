

"use server"

export const getAllCategory= async()=> {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`)
        const data = response.json()
        return data

}