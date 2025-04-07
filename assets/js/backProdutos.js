//CRIA OS VETORES PARA ARMAZENAR OS DADOS DO BACKEND
var idsProds=[];
var descProds=[];
var precoProds=[];
var tamanhoProds=[];
var fotoProds=[];
var categoriaProds=[];
//informa ao navegador para chamar a função
//ao carregar a pagina
window.onload=()=>{
    pesquisaProdutos();
}
//cria a funcao pesquisaProdutos()
//essa funcao requisita e carrega os resultados
function pesquisaProdutos(){
    limpa_vetores();
    //faz a requisicao ao backend
    fetch('http://localhost/devstore/produtos.php')
    //transforma a resposta do servidor
    .then(response=>response.json())
    //manipula os dados e monta a resposta na tela
    .then(data=>{
        //captura as 2 listas de produt
        const divProds = 
        document.getElementById('products-area');
        const divSeen = 
        document.getElementById('products-seen');
        //exclui o conteudo atual
        divProds.replaceChildren();
        divSeen.replaceChildren();
        //estrutura para alimentar os vetores
        for(var i=0;i<data.length;i++){
            //push adiciona um item no final
            //de cada vetor
            idsProds.push(data[i].idProd);
            descProds.push(data[i].descProd);
            precoProds.push(data[i].precoProd);
            categoriaProds.push(data[i].categoriaProd);
            tamanhoProds.push(data[i].tamanhoProd);
            fotoProds.push(data[i].fotoProd);
        }
        //estrutura para montar os cards na tela
        for(var j=1;j<idsProds.length;j=j+4){
            var id = idsProds[j];
            var desc = descProds[j];
            var tamanho = tamanhoProds[j];
            var preco = precoProds[j];
            var foto = fotoProds[j];
            var categoria = categoriaProds[j];
            //cria uma div para o produto
            var cardProd = 
            document.createElement('div');
            cardProd.setAttribute('class',
                'product-item');
            cardProd.innerHTML = 
            '<a href="./product.html?idProd='+id+'">'+
            '<div class="product-photo">'+
            '<img src="./assets/images/products/'+foto+
            '"/>'+
            '</div>'+
            '<div class="product-name">'+desc+'</div>'+
            '<div class="product-price">R$'+preco+'</div>'+
            '<div class="product-info">Pague via Pix</div>'+
            '</a><div class="product-fav">'+
            '<img src="./assets/images/ui/heart-3-line.png"/>'+
            '</div></div>';
            divProds.appendChild(cardProd);
            
        }
        //segundo for
        for(var j=0;j<idsProds.length;j=j+4){
            var id = idsProds[j];
            var desc = descProds[j];
            var tamanho = tamanhoProds[j];
            var preco = precoProds[j];
            var foto = fotoProds[j];
            var categoria = categoriaProds[j];
            //cria uma div para o produto
            var cardProd = 
            document.createElement('div');
            cardProd.setAttribute('class',
                'product-item');
            cardProd.innerHTML = 
            '<a href="./product.html?idProd='+id+'">'+
            '<div class="product-photo">'+
            '<img src="./assets/images/products/'+foto+
            '"/>'+
            '</div>'+
            '<div class="product-name">'+desc+'</div>'+
            '<div class="product-price">R$'+preco+'</div>'+
            '<div class="product-info">Pague via Pix</div>'+
            '</a><div class="product-fav">'+
            '<img src="./assets/images/ui/heart-3-line.png"/>'+
            '</div></div>';
            divSeen.appendChild(cardProd);
            
        }
    })
    .catch(error=>{
        alert("Erro: "+error);
    });

}
function limpa_vetores(){
    idsProds=[];
    descProds=[];
    precoProds = [];
    categoriaProds = [];
    fotoProds = [];
    tamanhoProds = [];
}
