// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');

$(document).ready(function(){
    $('.menu-lista-contato').click(function(){
        ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
    })

    $('.menu-lista-download').click(function(){
        ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
    })

    $('.card-montadoras').click(function(){
        var label = this.querySelector(".card-title").innerText;
        //dynamically gets card title
        ga('send', 'event', 'analise', 'ver_mais', label);
    })

    $('.contato input[type!="checkbox"]').on('blur', function(){
        //checks if field has been filled before sending hit
        if(this.value != ''){
            ga('send', 'event', 'contato', this.id, 'preencheu');
        }
    })

    $('.contato input[type="checkbox"]').click(function(){
        //only sends hit if checkbox is being checked
        if(this.checked){
            ga('send', 'event', 'contato', this.id, 'preencheu');
        }
    })

    $('.contato').on('submit', function(){
        ga('send', 'event', 'contato', 'enviado', 'enviado');
    })
})