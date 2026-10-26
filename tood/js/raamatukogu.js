// Tyhi muutuja tulemuse salvestamiseks
let tulemus1 = "";

// Objekt raamatu andmetega ja meetodiga
let raamat = {
    pealkiri: "Kevade",
    autor: "Oskar Luts",
    aasta: 1912,

    // Meetod, mis tagastab raamatu info (kasutab this võtmesõna)
    info() {
        return this.pealkiri + ", " + this.autor + ", " + this.aasta;
    }
};

// Väljastame raamatu info konsooli ja lisame tulemusse
console.log(raamat.info());
tulemus1 += "<p>" + raamat.info() + "</p>";

// Muudame raamatu aastat
raamat.aasta = 1913;
console.log(raamat.info());
tulemus1 += "<p>" + raamat.info() + "</p>";

// Kuvame tulemuse veebilehel
document.getElementById("vastus1").innerHTML = tulemus1;


// Teine osa objektide massiiv ja meetodid
let tulemus2 = "";

// Objektide massiiv raamatutega
let raamatud = [
    { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
    { pealkiri: "Tõde ja õigus", autor: "A. H. Tammsaare", aasta: 1926 },
    { pealkiri: "Rehepapp", autor: "Andrus Kivirähk", aasta: 2000 },
    { pealkiri: "Ivan Orava", autor: "Andrus Kivirähk", aasta: 2007 }
];

// Läbime massiivi forEach tsükliga ja kuvame raamatud
raamatud.forEach(raamat => {
    console.log("Pealkiri: " + raamat.pealkiri + ", Autor: " + raamat.autor + ", Aasta: " + raamat.aasta);
    tulemus2 += "<p><b>Pealkiri:</b> " + raamat.pealkiri + "<br>" +
        "<b>Autor:</b> " + raamat.autor + "<br>" +
        "<b>Aasta:</b> " + raamat.aasta + "</p><hr>";
});

// Lisame uue raamatu massiivi lõppu meetodiga push()
raamatud.push({ pealkiri: "Harry Potter", autor: "J. K. Rowling", aasta: 2001 });

// Loeme raamatute koguarvu
let kokku = raamatud.length;
console.log("Raamatuid kokku: " + kokku);
tulemus2 += "<p><b>Raamatuid kokku:</b> " + kokku + "</p>";

// Filtreerime raamatud, mis on uuemad kui aasta 2000 (filter())
let uuedRaamatud = raamatud.filter(raamat => raamat.aasta > 2000);
console.log("Pärast 2000. aastat raamatuid: " + uuedRaamatud.length);
tulemus2 += "<p><b>Pärast 2000. aastat raamatuid:</b> " + uuedRaamatud.length + "</p>";

// Filtreerime raamatud konkreetse autori järgi (filter())
let kivirahkRaamatud = raamatud.filter(raamat => raamat.autor === "Andrus Kivirähk");
console.log("Andrus Kivirähki raamatuid: " + kivirahkRaamatud.length);
tulemus2 += "<p><b>Andrus Kivirähki raamatuid:</b> " + kivirahkRaamatud.length + "</p>";

// Kuvame teise osa tulemuse veebilehel
document.getElementById("vastus2").innerHTML = tulemus2;
