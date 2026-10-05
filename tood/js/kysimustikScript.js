function nimiLugemineKastist(){
    let vastus1=document.getElementById("vastus1");
    let nimi=document.getElementById("nimi");

    vastus1.innerHTML="Sisestatud nimi on: "+nimi.value;
    vastus1.style.backgroundColor="lightgreen";

    return nimi.value;
}//radio valikud
function radioValik(){
    let vastus2=document.getElementById("vastus2");
    let spotify=document.getElementById("spotify");
    let raadio=document.getElementById("raadio");
    let vinyl=document.getElementById("vinüülplaat");
    let pilt=document.getElementById("pilt");

    let valik="";
    if(spotify.checked){
        valik=spotify.value;
        pilt.src="../images/smile.png";
    } else if(raadio.checked){
        valik=raadio.value;
    } else if(vinyl.checked){
        valik=vinyl.value;
    } else{
        valik="palun tee oma valik";
    }

    //vastus
    vastus2.innerHTML="Valik: " + valik;

    return valik;
}

//checkbox valik
function checkboxValik(){
    let vastus3=document.getElementById("vastus3");
    let system=document.getElementById("systemofdown");
    let metall=document.getElementById("metallica");
    let rolling=document.getElementById("rollingstones");

    let valik2="";
    if(system.checked){
        valik2+=system.value +', <br>';
    }
    if(metall.checked){
        valik2+=metall.value +', <br>';
    }
    if(rolling.checked){
        valik2+=rolling.value +', <br>';
    }
    if(valik2==""){
        valik2="Tee oma valik!"
    }

    vastus3.innerHTML="Sinu lemmikud on : " + valik2;
    vastus3.style.backgroundColor="lightgreen";

    return valik2;
}
//range
function rangeValik(){
    let vastus4=document.getElementById("vastus4");
    let tund=document.getElementById("tund");

    vastus4.innerHTML="Sa kuuled muusikat : " + tund.value + " tundi";

    return tund.value;
}

//select valik
function selectValik(){
    let vastus5=document.getElementById("vastus5");
    let stiil=document.getElementById("stiil");
    //0--1.rida loetelus
    if(stiil.selectedIndex!==0){
        vastus5.innerHTML="Sa valisid "+stiil.value;
    } else{
        vastus5.innerHTML="palun tee oma valik";
    }

    return stiil.value;
}

//kasutab teisi funktsioone
function naitaKoike(){
    let vastusKoik=document.getElementById("vastusKoik");
    let nimi=nimiLugemineKastist();
    let valik=radioValik();
    let valik2=checkboxValik();
    let tund=rangeValik();
    let stiil=selectValik();

    vastusKoik.innerHTML="Sinu nimi on: " +nimi+'<br>'+
        'Sinu lemmikud on : ' + valik2 + '<br>'+
        'Sa kasutad '+valik +'<br>' +
        'Sa kuuled '+tund+' tundi<br>'+
        'Sa valisid '+stiil;
}
function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastusKoik.innerHTML="";
}