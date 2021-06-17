function dt_txt(){
    var data=new Date();
    var meses=new Array("Janeiro", "Fevereiro", "Março", "Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
    var dsem=new Array("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado");

    document.write(dsem[data.getDay()] + ", " + data.getDate() + " de " + meses[data.getMonth()] + " de " + data.getFullYear());
    }

    //início do slide de fotos
    function iniciarslide (){
    
        min = 1;
        fi = min;
        max = 5;
        carregarfoto("img1.png");
    }

    function carregarfoto (foto){
        document.getElementById("moldura").style.backgroundImage="URL("+foto+")";
    }

    function prox (){
        fi++;
        if(fi>max)
        {fi=min;}

        carregarfoto("img"+fi+".png");
    }

    function ant (){
        fi--;
        if(fi<min){fi=min;}
        carregarfoto("img"+fi+".png");
    }
    //fim do slide de fotos