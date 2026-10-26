function klassikalineNimi() {
    console.log("Minu nimi on Timur");
}
klassikalineNimi();

const noolNimi = () => {
    console.log("Minu nimi on Timur");
};
noolNimi();

function kuupaevEesti(paev, kuuNimi) {
    console.log("Kuupäev: " + paev + ". " + kuuNimi);
}
kuupaevEesti("19", "juuli");

function arvutaKeskmine(a, b, c, d) {
    let koguarv = 4;
    let summa = a + b + c + d;
    let keskmine = summa / koguarv;
    console.log("Koguarv: " + koguarv + ", Keskmine: " + keskmine);
}
arvutaKeskmine(10, 20, 30, 40);

const salajaneSonum = (sonum) => {
    let e1 = "T";
    let e2 = "*";
    let e3 = "r";
    let e4 = "*";
    console.log(e1 + e2 + e3 + e4);
};
salajaneSonum("Tere");

const leiaUnikaalsedNimed = () => {
    let unikaalsed = ["Kati", "Mati", "Mari", "Jüri"];
    console.log(unikaalsed);
};
leiaUnikaalsedNimed();