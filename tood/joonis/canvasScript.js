function joon(){
    const canvas = document.getElementById("canvas");
    //joon - линия
    if(canvas.getContext){
        let tx = canvas.getContext("2d"); //2d tasand
        tx.beginPath();
        tx.strokeStyle="blue";
        tx.lineWidth = 3;
        tx.moveTo(50, 50); //alguspunkt
        tx.lineTo(200, 280); //lõpppunkt
        tx.stroke();
    }
}

function puhasta(){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext){
        let tx = canvas.getContext("2d"); //2d tasand
        tx.clearRect(0, 0, 400, 400);
    }
}

function kolmnurk(){
    const canvas = document.getElementById("canvas");
    //kolmnurk
    if(canvas.getContext){
        let tx = canvas.getContext("2d"); //2d tasand
        tx.beginPath();
        tx.fillStyle="blue";
        tx.strokeStyle="red";
        tx.lineWidth = 3;
        tx.moveTo(50, 50); //alguspunkt
        tx.lineTo(30, 350); //lõpppunkt
        tx.lineTo(200, 280);
        tx.lineTo(50, 50);
        tx.fill(); //taust
        tx.stroke();
    }
}

function ristkylik(){
    const canvas = document.getElementById("canvas");
    let l=document.getElementById("laius");
    let k=document.getElementById("kyrgus");
    if(canvas.getContext){
        let tx = canvas.getContext("2d");
        tx.fillStyle="red";
        tx.fillRect(100, 150, l.value, k.value);
    }
}

//ümberjoon - окружность
//ring - круг

function ring() {
    const canvas = document.getElementById("canvas");
    const r=document.getElementById("raadius");
    if(canvas.getContext){
        let tx = canvas.getContext("2d");
        //tx.beginPath();
        tx.strokeStyle="black";
        tx.fillStyle="yellow";
        tx.arc(100,100, r.value, 0, 2*Math.PI,true); //x,y -keskpunkt, R-raadius
        tx.fill();
        //tx.stroke()
    }
}

function pilt(){
    const canvas = document.getElementById("canvas");
    if(canvas.getContext){
        let tx = canvas.getContext("2d");
        const fail=new Image();
        fail.src="https://picsum.photos/200/300?random=1";
        fail.onload=()=>{
            tx.drawImage(fail, 50, 50, 100, 100);
        }
    }
}

//auto
function ratas1(){
    const canvas = document.getElementById("canvas");
    if(canvas.getContext){
        let tx = canvas.getContext("2d");
        tx.fillStyle="white";
        tx.beginPath();
        tx.strokeStyle="black";
        tx.arc(120, 260, 20, 0, 2*Math.PI, true);
        tx.stroke();
        tx.fill();
        tx.beginPath();
        tx.arc(120, 260, 4, 0, 2*Math.PI, true);
        tx.stroke();
        tx.fill();
    }
}

function ratas2(){
    const canvas = document.getElementById("canvas");
    if(canvas.getContext){
        let tx = canvas.getContext("2d");
        tx.fillStyle="white";
        tx.beginPath();
        tx.strokeStyle="black";
        tx.arc(260, 260, 20, 0, 2*Math.PI, true);
        tx.stroke();
        tx.fill();
        tx.beginPath();
        tx.arc(260, 260, 4, 0, 2*Math.PI, true);
        tx.stroke();
        tx.fill();
    }
}

function kere(){
    const canvas = document.getElementById("canvas");
    if(canvas.getContext){
        let tx = canvas.getContext("2d");
        tx.lineWidth = 2;
        tx.strokeStyle="black";
        tx.fillStyle="blue";

        tx.beginPath();
        tx.moveTo(80, 180);
        tx.lineTo(300, 180);
        tx.lineTo(300, 240);
        tx.lineTo(80, 240);
        tx.lineTo(80, 180);
        tx.stroke();
        tx.fill();

        tx.beginPath();
        tx.moveTo(130, 120);
        tx.lineTo(250, 120);
        tx.lineTo(250, 180);
        tx.lineTo(130, 180);
        tx.lineTo(130, 120);
        tx.stroke();
        tx.fill();
    }
}

function tuled(){
    const canvas = document.getElementById("canvas");
    if(canvas.getContext){
        let tx = canvas.getContext("2d");
        tx.lineWidth = 2;
        tx.strokeStyle="black";

        tx.beginPath();
        tx.moveTo(300, 195);
        tx.lineTo(360, 160);
        tx.stroke();

        tx.beginPath();
        tx.moveTo(300, 210);
        tx.lineTo(370, 210);
        tx.stroke();

        tx.beginPath();
        tx.moveTo(300, 225);
        tx.lineTo(360, 260);
        tx.stroke();
    }
}

function oma(){
    puhasta();
    kere();
    ratas1();
    ratas2();
    tuled();
}