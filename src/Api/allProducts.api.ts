
export const getallProducts =async ()=>{
    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products`,{
        // cache:"force-cache",
        next:{revalidate:60}
    })
    let data = await response.json()
    return data
}