export async function getProducts(){
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
}

export async function getProductDetail(id){
    const response = await fetch("https://fakestoreapi.com/products/"+id);
    if (!response.ok) {
        throw new Error("Failed to fetch product detail");
    }
    const data = await response.json();
    return data;
} 