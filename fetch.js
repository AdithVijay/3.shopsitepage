let datass =""
fetch("https://fakestoreapi.com/products").then((response=>{
    return response.json()
})).then((value)=>{
    console.log(value);
    value.map((x)=>{
        datass += `<div id="card">
        <h1 id="title">${x.title}</h1>
        <img src=${x.image} id="images" alt="">
        <p id=${x.description}>description</p>
        <p id="category">${x.cstegory}</p>
        <p id="price">${x.price}</p>
    </div>`
    })
   
    document.getElementById("cards").innerHTML=datass
})
