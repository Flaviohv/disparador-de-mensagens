function mandaZap (elemento){
    let texto = elemento.firstElementChild.innerText;
    console.log(texto);
    let numero = prompt ("Para qual numero você deseja enviar essa mensagem?");
    let zaplink = `https://api.whatsapp.com/send?phone=55${numero}&text=${texto}`
    
    if (numero) {
       window.open(zaplink)
        
    }
    else{
    document.getElementById("demo").innerHTML=x;
    }
}



