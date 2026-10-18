function kohviKulu(){
    let vastus3=document.getElementById("vastus3");
    let valik3=document.getElementsByName("valik3");
    let tassid=document.getElementById("tassid");

    const kohv=1.50;
    const latte=2.50;
    const cappuccino=2.80;
    const nadalaid=52; //nädalaid aastas

    for(let i=0;i<valik3.length;i++){
        if(valik3[i].checked){
            if(valik3[i].value==="kohv"){
                vastus3.innerHTML="Tavaline kohv: "+tassid.value+" tassi nädalas. Aastas kulub "
                    +(tassid.value*kohv*nadalaid).toFixed(2)+ '€';
                vastus3.style.color="brown";
                vastusepilt3.src="https://tervisekool.ee/wp-content/uploads/2023/04/coffee.jpg";
            } else if(valik3[i].value==="latte"){
                vastus3.innerHTML="Latte: "+tassid.value+" tassi nädalas. Aastas kulub "
                    +(tassid.value*latte*nadalaid).toFixed(2)+ '€';
                vastus3.style.color="green";
                vastusepilt3.src="https://www.brighteyedbaker.com/wp-content/uploads/2024/07/Dulce-de-Leche-Latte-Recipe.jpg";
            } else if(valik3[i].value==="cappuccino"){
                vastus3.innerHTML="Cappuccino: "+tassid.value+" tassi nädalas. Aastas kulub "
                    +(tassid.value*cappuccino*nadalaid).toFixed(2)+ '€';
                vastus3.style.color="red";
                vastusepilt3.src="https://www.allrecipes.com/thmb/chsZz0jqIHWYz39ViZR-9k_BkkE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8624835-how-to-make-a-cappuccino-beauty-4x3-0301-13d55eaad60b42058f24369c292d4ccb.jpg";
            }
        }
    }
}