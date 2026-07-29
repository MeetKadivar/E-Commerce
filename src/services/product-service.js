export async function getProducts(){
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
        throw new Error("User not found");
    }
    const data = await response.json();
    return data;
}