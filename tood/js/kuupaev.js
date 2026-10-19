const now = new Date();

const paev = now.getDate(); // tagastab päeva
console.log("Tänane päev" + paev + "päev");

const kuu = now.getMonth() + 1; // Tagastab kuu 0-11
console.log("Kuu number on " + kuu);

const aasta = now.getFullYear(); // tagastab aasta
console.log("Aasta on: " + aasta);

const nadalapaev = now.getDay(); // 0-6, kus on 0 - puhapäev
console.log("Nadalapaeva number on: " + nadalapaev);

function tana() {
    let vastus = document.getElementById("vastus");
    vastus.innerHTML = "Täna on: " + paev + "." + kuu + "." + aasta;
}

const tund = now.getHours();
console.log("Tund: " + tund);

const minutid = now.getMinutes();
console.log("Minutid: " + minutid);

function kell() {
    let vastus = document.getElementById("vastus");
    let vastus2 = minutid < 10 ? "0" + minutid : minutid;

    vastus.innerHTML = "Praegune kellaaeg on: " + tund + ":" + vastus2;
}

// mitu päeva konsultatsiooni nädalani
const konsultatsioon = new Date(2026, 11, 2);
const vahe = konsultatsioon.getTime() - now.getTime();
const konspaev = vahe / (1000 * 60 * 60 * 24);

console.log("Konsultatsiooni nädalani " + konspaev.toFixed(0) + "päeva");

function paevaKonsultatsioon() {
    let vastus = document.getElementById("vastus");
    vastus.innerHTML = "Konsultatsiooni nädalani on " + konspaev.toFixed(0) + " päev";
}

function paevaSynnipaevani() {
    let tananeKuupaev = new Date();
    let synniAasta = tananeKuupaev.getFullYear();

    let synnipaev = new Date(synniAasta, 0, 7);

    if (tananeKuupaev > synnipaev) {
        synnipaev = new Date(synniAasta + 1, 0, 7);
    }

    let vaheSynnipaev = synnipaev.getTime() - tananeKuupaev.getTime();
    let synnipaevapaev = vaheSynnipaev / (1000 * 60 * 60 * 24);

    let vastus = document.getElementById("vastus");
    vastus.innerHTML = "Minu sünnipäevani on " + synnipaevapaev.toFixed(0) + " päev";
}