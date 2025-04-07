//BANNER
let banners = document.querySelectorAll('.banner-area a');
let counters = document.querySelectorAll('.banner-counter-item');
let currentBanner = 0;
let bannerInterval;

//controla os contadores
counters.forEach((item, key)=>{
    item.addEventListener('click', ()=>{
        currentBanner = key;
        showBanner(key);
        restartBannerTimer();
    });
});

//restarta o banner timer
restartBannerTimer();

//função para exibir o banner
function showBanner(n){
    for(let banner of banners){
        banner.classList.remove('active');
    }
    for(let counter of counters){
        counter.classList.remove('active');
    }
    banners[n].classList.add('active');
    counters[n].classList.add('active');
}
//função para reiniciar o timer do banner
function restartBannerTimer(){
    clearInterval(bannerInterval);
    bannerInterval = setInterval(nextBanner, 2000);
}
//função para puxar o proximo banner
function nextBanner(){
    if(currentBanner+1 >=banners.length){
        currentBanner = 0;
    }else{
        currentBanner++;
    }
    showBanner(currentBanner);
}


