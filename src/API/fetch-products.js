const allProducts = () => {
    return fetch('https://burger-43f0c-default-rtdb.europe-west1.firebasedatabase.app/products.json').then(response => response.json());
}
export default allProducts;