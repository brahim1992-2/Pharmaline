const products = Array.from({length: 20}, (_, i) => ({
    name: `منتج تجميلي ${i + 1}`,
    price: `${10 + i} ر.س`,
    image: "https://via.placeholder.com/200x200?text=منتج"
}));

const productList = document.getElementById("product-list");

products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>السعر: ${product.price}</p>
        <button>أضف إلى السلة</button>
    `;
    productList.appendChild(div);
});
