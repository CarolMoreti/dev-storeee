//procura pelo parametro na barra do navegador
const queryString = window.location.search;
//parametros de url
const urlParams = new URLSearchParams(queryString);
//pegar o id do produto na barra de endereços
var id = urlParams.get('idProd');