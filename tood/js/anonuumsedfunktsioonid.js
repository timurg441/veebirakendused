function klassikalineNimi() {
    console.log("Minu nimi on Timur");
}
klassikalineNimi();

const noolNimi = () => console.log("Minu nimi on Timur");
noolNimi();

function kuupaevEesti(kuupaevStr) {
    let kuud = ["", "jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
    let osad = kuupaevStr.split(".");
    console.log("Kuupäev: " + osad[0] + ". " + kuud[Number(osad[1])]);
}
kuupaevEesti("19.07.25");

function arvutaKeskmine(a, b, c, d) {
    let koguarv = 4;
    let summa = a + b + c + d;
    let keskmine = summa / koguarv;
    console.log("Koguarv: " + koguarv + ", Keskmine: " + keskmine);
}
arvutaKeskmine(10, 20, 30, 40);

const salajaneSonum = (sonum) => {
    return sonum.replace(/[aeiouõäöü]/g, "*");
};
console.log(salajaneSonum("Tere"));

const leiaUnikaalsedNimed = (nimed) => {
    let tulemus = [];
    for (let i = 0; i < nimed.length; i++) {
        if (!tulemus.includes(nimed[i])) {
            tulemus.push(nimed[i]);
        }
    }
    return tulemus;
};

let algneMassiiv = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];
console.log(leiaUnikaalsedNimed(algneMassiiv));