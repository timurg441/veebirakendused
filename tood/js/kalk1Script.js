function teisendamne(){
    let vastus=document.getElementById("vastus");
    let valik=document.getElementsByName("valik"); //mitu elementi ühe nimega
    let arv=document.getElementById("arv");

    const toll=39.97;
    const meeter=0.0254;

    //tsükli
    for(let i=0;i<valik.length;i++){
        if(valik[i].checked){
            if(valik[i].value==="meeter"){
                vastus.innerHTML=arv.value +' meetri = '+
                    (arv.value*toll).toFixed(1) +' tolli';
                vastus.style.color="red";
                vastusepilt.src="https://www.taskutark.ee/wp-content/uploads/2015/08/10408600_1.jpg";
            } else if(valik[i].value==="tolli"){
                vastus.innerHTML= arv.value +' meetri = '+
                    arv.value*meeter+'meetri';
                vastus.style.color="green";
                vastusepilt.src="https://upload.wikimedia.org/wikipedia/commons/3/39/Inch_tape.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original"
            }
            else {
                vastus.innerHTML= "Vali ühiku - kas meeter või toll"
            }
        }
    }
}