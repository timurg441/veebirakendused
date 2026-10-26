// siia paneme alguses tyhja teksti html-i jaoks
let tulemus1 = "";

// raamatu objekt omaduste ja meetodiga
let raamat = {
    pealkiri: "Kevade",
    autor: "Oskar Luts",
    aasta: 1912,

    // meetod mis võtab selle sama objekti andmed (this)
    info() {
        return this.pealkiri + ", " + this.autor + ", " + this.aasta;
    }
};

// trükime konsooli ja lisame muutujasse
console.log(raamat.info());
tulemus1 += "<p>" + raamat.info() + "</p>";

// muudame aastat otse
raamat.aasta = 1913;
console.log(raamat.info());
tulemus1 += "<p>" + raamat.info() + "</p>";

// saadame esimese osa lehele
document.getElementById("vastus1").innerHTML = tulemus1;


// teine osa: objektide massiiv
let tulemus2 = "";

// raamatute nimekiri objektidena
let raamatud = [
    { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
    { pealkiri: "Tõde ja õigus", autor: "A. H. Tammsaare", aasta: 1926 },
    { pealkiri: "Rehepapp", autor: "Andrus Kivirähk", aasta: 2000 },
    { pealkiri: "Ivan Orava", autor: "Andrus Kivirähk", aasta: 2007 }
];

// käime kõik raamatud forEach-iga läbi
raamatud.forEach(raamat => {
    console.log("Pealkiri: " + raamat.pealkiri + ", Autor: " + raamat.autor + ", Aasta: " + raamat.aasta);
    tulemus2 += "<p><b>Pealkiri:</b> " + raamat.pealkiri + "<br>" +
        "<b>Autor:</b> " + raamat.autor + "<br>" +
        "<b>Aasta:</b> " + raamat.aasta + "</p><hr>";
});

// lisame ühe uue raamatu lõppu push-iga
raamatud.push({ pealkiri: "Harry Potter", autor: "J. K. Rowling", aasta: 2001 });

// vaatame mitu raamatut kokku on (length)
let kokku = raamatud.length;
console.log("Raamatuid kokku: " + kokku);
tulemus2 += "<p><b>Raamatuid kokku:</b> " + kokku + "</p>";

// filtreerime need mis on uuemad kui 2000
let uuedRaamatud = raamatud.filter(raamat => raamat.aasta > 2000);
console.log("Pärast 2000. aastat raamatuid: " + uuedRaamatud.length);
tulemus2 += "<p><b>Pärast 2000. aastat raamatuid:</b> " + uuedRaamatud.length + "</p>";

// otsime ainult kivirähki raamatud
let kivirahkRaamatud = raamatud.filter(raamat => raamat.autor === "Andrus Kivirähk");
console.log("Andrus Kivirähki raamatuid: " + kivirahkRaamatud.length);
tulemus2 += "<p><b>Andrus Kivirähki raamatuid:</b> " + kivirahkRaamatud.length + "</p>";

// saadame kőik teise osa andmed lehele
document.getElementById("vastus2").innerHTML = tulemus2;
