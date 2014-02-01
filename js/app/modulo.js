function abrirTela(url,objeto){
    
    $(objeto).load(url);
    
}

var popupStatus = 0; // set value
	 
function carregaPopup(popup,popupDetras) {
    
    if(popupStatus == 0) {
        
        //$(popup).fadeIn(0500);
        $(popupDetras).css("opacity", "0.7"); 
        $(popupDetras).fadeIn(0500);
        popupStatus = 1; 
        
    }
    
}

function fecharPopup(fundoPopup,conteudoPopup){
    
    if(popupStatus == 1){
        $(fundoPopup).fadeOut("normal");
        //$(conteudoPopup).fadeOut("normal");
        popupStatus = 0;
    }
    
}

function voltaPopup(fundoPopup,fundoPopup2){
    if(popupStatus == 1){
          console.log("voltaPopup == 1");
        $(fundoPopup).fadeOut("normal");
        $(fundoPopup2).css("opacity", "0.7"); 
        $(fundoPopup2).fadeIn(0500);
        popupStatus = 2;
    }
    else{
        console.log("voltaPopup == 2");
        $(fundoPopup2).fadeOut("normal");
        $(fundoPopup).css("opacity", "0.7"); 
        $(fundoPopup).fadeIn(0500);
        popupStatus = 1;
        
    }
   
    
}

function mostraPopup3(popup2,popup3){
     if(popupStatus == 2){
        $(popup2).fadeOut("normal");
        $(popup3).css("opacity", "0.7"); 
        $(popup3).fadeIn(0500);
        popupStatus = 3;
    }
    else if(popupStatus == 3){
        $(popup3).fadeOut("normal");
        $(popup2).css("opacity", "0.7"); 
        $(popup2).fadeIn(0500);
        popupStatus = 2;
    }
}



abrirTela("telaInicial.html","#tela");


