const AP_SERVER="http://localhost"

export const getProducts=()=>{
    fetch(`${API_SERVER}/products`).then(res=>res.json())
}

export const getProductById=(id)=>{
    fetch(`${API_SERVER}/products/${id}`).then(res=>res.json())
}

export const currency=new Intl.NumberFormat("en-US",{
    style:"currency",
    currency:"USD"
})