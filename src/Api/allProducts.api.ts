"use server"

export const getallProducts =async ()=>{
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products`,{
        next:{revalidate:60}
    })
    const data = await response.json()
    return data
}