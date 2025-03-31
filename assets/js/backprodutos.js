var idsProds =[]
var descProds =[]
var precoProds =[]
var tamanhoProds =[]
var fotoProds =[]
var categoriaProds =[]

window.onload=()=>{
     pesquisaProdutos();

}
function pesquisaProdutos(){
    limpavetores();
    fetch('http://localhost/dev-storeee-main/produtos.php')
    .then(response=>response.json())
    .then(data=>{
        const divProds = document.getElementById('products-area')
        const divSeen = document.getElementById('products-seen')
        divProds.replaceChildren()
        divSeen.replaceChildren()
        
        for(var i=0;i<data.length; i++){
            idsProds.push(data[i].idProd)
            descProds.push(data[i].descProd)
            precoProds.push(data[i].precoProd)
            categoriaProds.push(data[i].categoriaProd)
            tamanhoProds.push(data[i].tamanhoProd)
            fotoProds.push(data[i].fotoProd)
        }
        for(var j=1;j<idsProds.length;j=j+4){
            var id =idsProds[j]
            var desc = descProds[j]
            var tamanho =tamanhoProds[j]
            var preco =precoProds[j]
            var foto =fotoProds[j]
            var categoria=categoriaProds[j]

            var cardProd =document.createElement('div')
            cardProd.setAttribute('class', 'product-item')
            cardProd.innerHTML = 
            '<a href="./product.html?'+id+'">'+
            '<div class="product-photo">'+'<img src="./assets/images/products/'+foto+'"/>'+
            '</div>'+'<div class="product-name">'+desc+'</div>'+
            '<div class="product-price">R$'+preco+'</div>'+
            '<div class="product-info">Pague via Pix</div>'+
            '</a><div class="product-fav">'+
            '<img src="./assets/images/ui/heart-3-line.png"/>'+'</div></div>';
            divProds.appendChild(cardProd)
        }
        for(var j=0;j<idsProds.length;j=j+4){
            var id =idsProds[j]
            var desc = descProds[j]
            var tamanho =tamanhoProds[j]
            var preco =precoProds[j]
            var foto =fotoProds[j]
            var categoria=categoriaProds[j]

            var cardProd =document.createElement('div')
            cardProd.setAttribute('class', 'product-item')
            cardProd.innerHTML = 
            '<a href="./product.html?'+id+'">'+
            '<div class="product-photo">'+'<img src="./assets/images/products/'+foto+'"/>'+
            '</div>'+'<div class="product-name">'+desc+'</div>'+
            '<div class="product-price">R$'+preco+'</div>'+
            '<div class="product-info">Pague via Pix</div>'+
            '</a><div class="product-fav">'+
            '<img src="./assets/images/ui/heart-3-line.png"/>'+'</div></div>';
            divSeen.appendChild(cardProd)
        }
    })
    .catch(error=>{
        alert("Erro: "+error);
    });
}
function limpavetores(){
    idsProds=[];
    descProds=[];
    precoProds=[];
    categoriaProds=[];
    fotoProds=[];
    tamanhoProds=[];
}