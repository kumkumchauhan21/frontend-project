// console.log(hello)
const loadAPI = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => getProducts(data))

  // console.log("hello")
}
const displayProduct = (product) => {
   return (`
   <div class="product">
    <img src="${product.image}" alt="">
    <h2>${product.title}</h2>
    <h2>${product.category}</h2>
    <h2>${product.price}</h2>
</div>
   `)
     
}
const getProducts = (products) => {
  //     console.log(products)

  const displayUI = products.map((product) => displayProduct(product)) //what should i display

//   console.log(displayUI)
const container = document.getElementById('products')  // where should i display
container.innerHTML = displayUI.join("")  // connecting this both thing
}

loadAPI()
