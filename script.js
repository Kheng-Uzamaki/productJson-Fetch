fetch("products.json")
.then(res => res.json())
.then((product)=>{
    let output = document.querySelector(".product");

    let out = "";

    for(let p of product){
        out +=`
        <div class="products">
        <img src="${p.image}" alt="${p.image}"/> 
        <p class="title">${p.title}</p>
        <p class="description">${p.description}</p>
        <p class="price">
            <span>$${p.price} </span>
        </p>
        
        <p class="cart"> Add to Cart</p>
        </div>
        
        `;
    }
    output.innerHTML=out;
})