//checkbox valik
function checkboxValik(){
    let vastus1 = document.getElementById("vastus1");
    let js = document.getElementById("js");
    let python = document.getElementById("python");
    let java = document.getElementById("java");
    let csharp = document.getElementById("csharp");
    let php = document.getElementById("php");

    let valik = "";
    if(js.checked){
        valik += js.value + ', ';
    }
    if(python.checked){
        valik += python.value + ', ';
    }
    if(java.checked){
        valik += java.value + ', ';
    }
    if(csharp.checked){
        valik += csharp.value + ', ';
    }
    if(php.checked){
        valik += php.value + ', ';
    }

    vastus1.innerHTML = "Sinu valitud programmeerimiskeeled: " + valik;

    return valik;
}

function textareaValik(){
    let vastus2 = document.getElementById("vastus2");
    let arvamus = document.getElementById("arvamus");

    vastus2.innerHTML = "Sinu arvamus: " + arvamus.value;

    return arvamus.value;
}

//range
function numberValik(){
    let vastus3 = document.getElementById("vastus3");
    let tund = document.getElementById("tund");

    vastus3.innerHTML = "Tegeled programmeerimisega " + tund.value + " tundi nädalas.";

    return tund.value;
}

//radio valikud
function radioValik(){
    let vastus4 = document.getElementById("vastus4");
    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");
    let pilt = document.getElementById("pilt");

    let valik = "";
    if(jah.checked){
        valik = jah.value;
        vastus4.innerHTML = "Programmeerimine meeldib";
        pilt.src = "../images/smile.png";
    } else if(ei.checked){
        valik = ei.value;
        vastus4.innerHTML = "Programmeerimine ei meeldi";
        pilt.src = "../images/kurb.png";
    }

    return valik;
}

function textValik(){
    let vastus5 = document.getElementById("vastus5");
    let tooriistad = document.getElementById("tooriistad");

    vastus5.innerHTML = "Sinu nimetatud tööriistad: " + tooriistad.value;

    return tooriistad.value;
}

//select valik
function selectValik(){
    let vastus6 = document.getElementById("vastus6");
    let soovitudKeel = document.getElementById("soovitudKeel");

    if(soovitudKeel.selectedIndex !== 0){
        vastus6.innerHTML = "Sinu valik: " + soovitudKeel.value;
    } else {
        vastus6.innerHTML = "Sinu valik: ";
    }

    return soovitudKeel.value;
}

//kasutab teisi funktsioone
function naitaKoike(){
    let vastusKoik = document.getElementById("vastusKoik");

    let keeled = checkboxValik();
    let arvamus = textareaValik();
    let tund = numberValik();
    let meeldib = radioValik();
    let tooriistad = textValik();
    let soovitudKeel = selectValik();

    vastusKoik.innerHTML = "<b>Kõik vastused:</b><br>" +
        "Sinu valitud keeled: " + keeled + "<br>" +
        "Sinu arvamus: " + arvamus + "<br>" +
        "Tegeled tundi nädalas: " + tund + "<br>" +
        "Kas meeldib: " + meeldib + "<br>" +
        "Tööriistad: " + tooriistad + "<br>" +
        "Soovitud keel: " + soovitudKeel;
}

function puhasta(){
    vastus1.innerHTML = "Sinu valitud programmeerimiskeeled: ";
    vastus2.innerHTML = "Sinu arvamus: ";
    vastus3.innerHTML = "Tegeled programmeerimisega 0 tundi nädalas.";
    vastus4.innerHTML = "";
    vastus5.innerHTML = "Sinu nimetatud tööriistad: ";
    vastus6.innerHTML = "Sinu valik: ";
    vastusKoik.innerHTML = "";
}