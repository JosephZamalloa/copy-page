window.onscroll =function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
        document.getElementById("menu").style.backgroundColor="rgb(43, 42, 42)"
    } else{
        document.getElementById("menu").style.backgroundColor="transparent"
    }
}