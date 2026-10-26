let tulemus1 = "";

let raamat = {
    pealkiri: "Kevade",
    autor: "Oskar Luts",
    aasta: 1912,

    info() {
        return this.pealkiri + ", " + this.autor + ", " + this.aasta;
    }
};

console.log(raamat.info());
tulemus1 += "<p>" + raamat.info() + "</p>";

raamat.aasta = 1913;
console.log(raamat.info());
tulemus1 += "<p>" + raamat.info() + "</p>";

document.getElementById("vastus1").innerHTML = tulemus1;

let tulemus2 = "";

let raamatud = [
    { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
    { pealkiri: "Tõde ja õigus", autor: "A. H. Tammsaare", aasta: 1926 },
    { pealkiri: "Rehepapp", autor: "Andrus Kivirähk", aasta: 2000 },
    { pealkiri: "Ivan Orava", autor: "Andrus Kivirähk", aasta: 2007 }
];

raamatud.forEach(raamat => {
    console.log("Pealkiri: " + raamat.pealkiri + ", Autor: " + raamat.autor + ", Aasta: " + raamat.aasta);
    tulemus2 += "<p><b>Pealkiri:</b> " + raamat.pealkiri + "<br>" +
        "<b>Autor:</b> " + raamat.autor + "<br>" +
        "<b>Aasta:</b> " + raamat.aasta + "</p><hr>";
});

raamatud.push({ pealkiri: "Harry Potter", autor: "J. K. Rowling", aasta: 2001 });

let kokku = raamatud.length;
console.log("Raamatuid kokku: " + kokku);
tulemus2 += "<p><b>Raamatuid kokku:</b> " + kokku + "</p>";

let uuedRaamatud = raamatud.filter(raamat => raamat.aasta > 2000);
console.log("Pärast 2000. aastat raamatuid: " + uuedRaamatud.length);
tulemus2 += "<p><b>Pärast 2000. aastat raamatuid:</b> " + uuedRaamatud.length + "</p>";

let kivirahkRaamatud = raamatud.filter(raamat => raamat.autor === "Andrus Kivirähk");
console.log("Andrus Kivirähki raamatuid: " + kivirahkRaamatud.length);
tulemus2 += "<p><b>Andrus Kivirähki raamatuid:</b> " + kivirahkRaamatud.length + "</p>";

document.getElementById("vastus2").innerHTML = tulemus2;
