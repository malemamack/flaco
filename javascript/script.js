const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

// if (bar) {
//     bar.addEventListener('click', () => {
//         nav.classList.add('active');
//     })
// }

function toggleMenu(){
    const bar = document.getElementById('bar');
    nav.classList.toggle('active');
}







// Function to Add Product to Cart and Store in LocalStorage
function addToCart(productName, productPrice) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item is already in the cart
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if it already exists
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart!`);
}






