let tulemus1 = "";

let pealkiri = "Kevade";
let autor = "Oskar Luts";
let aasta = 1912;

console.log(pealkiri + ", " + autor + ", " + aasta);
tulemus1 += "<p>" + pealkiri + ", " + autor + ", " + aasta + "</p>";

aasta = 1913;

console.log(pealkiri + ", " + autor + ", " + aasta);
tulemus1 += "<p>" + pealkiri + ", " + autor + ", " + aasta + "</p>";

document.getElementById("vastus1").innerHTML = tulemus1;

let tulemus2 = "";

let raamatud = ["Kevade", "Tõde ja õigus", "Rehepapp", "Ivan Orava"];
let autorid = ["Oskar Luts", "A. H. Tammsaare", "Andrus Kivirähk", "Andrus Kivirähk"];
let aastad = [1912, 1926, 2000, 2007];

for (let i = 0; i < raamatud.length; i++) {
    console.log("Pealkiri: " + raamatud[i] + ", Autor: " + autorid[i] + ", Aasta: " + aastad[i]);
    tulemus2 += "<p><b>Pealkiri:</b> " + raamatud[i] + "<br>" +
        "<b>Autor:</b> " + autorid[i] + "<br>" +
        "<b>Aasta:</b> " + aastad[i] + "</p><hr>";
}

raamatud.push("Harry Potter");
autorid.push("J. K. Rowling");
aastad.push(2001);

let kokku = raamatud.length;
console.log("Raamatuid kokku: " + kokku);
tulemus2 += "<p><b>Raamatuid kokku:</b> " + kokku + "</p>";

let uuedRaamatud = 0;
for (let i = 0; i < aastad.length; i++) {
    if (aastad[i] > 2000) {
        uuedRaamatud++;
    }
}
console.log("Pärast 2000. aastat: " + uuedRaamatud);
tulemus2 += "<p><b>Pärast 2000. aastat:</b> " + uuedRaamatud + "</p>";

let kivirahkArv = 0;
for (let i = 0; i < autorid.length; i++) {
    if (autorid[i] === "Andrus Kivirähk") {
        kivirahkArv++;
    }
}
console.log("Andrus Kivirähki raamatuid: " + kivirahkArv);
tulemus2 += "<p><b>Andrus Kivirähki raamatuid:</b> " + kivirahkArv + "</p>";

document.getElementById("vastus2").innerHTML = tulemus2;