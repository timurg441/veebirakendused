let tulemus1 = "";

let raamat = {
    pealkiri: "Kevade",
    autor: "Oskar Luts",
    aasta: 1912,

    kirjeldus() {
        return `${this.pealkiri}, ${this.autor}, ${this.aasta}`;
    },

    muudaAastat(uusAasta) {
        this.aasta = uusAasta;
    }
};

console.log(raamat.kirjeldus());
tulemus1 += `<p>${raamat.kirjeldus()}</p>`;

raamat.muudaAastat(1913);

console.log(raamat.kirjeldus());
tulemus1 += `<p>${raamat.kirjeldus()}</p>`;

document.getElementById("vastus1").innerHTML = tulemus1;


let tulemus2 = "";

let raamatukogu = {
    raamatud: [
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Tõde ja õigus", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Rehepapp", autor: "Andrus Kivirähk", aasta: 2000 },
        { pealkiri: "Ivan Orava", autor: "Andrus Kivirähk", aasta: 2007 }
    ],

    kuvaKoik() {
        this.raamatud.forEach((r) => {
            console.log(`Pealkiri: ${r.pealkiri}, Autor: ${r.autor}, Aasta: ${r.aasta}`);
            tulemus2 += `<p><b>Pealkiri:</b> ${r.pealkiri}<br><b>Autor:</b> ${r.autor}<br><b>Aasta:</b> ${r.aasta}</p><hr>`;
        });
    },

    lisaRaamat(uus) {
        this.raamatud.push(uus);
    },

    koguarv() {
        return this.raamatud.length;
    },

    parast2000() {
        return this.raamatud.filter(r => r.aasta > 2000).length;
    },

    leiaAutor(autorNimi) {
        return this.raamatud.filter(r => r.autor === autorNimi);
    }
};

raamatukogu.kuvaKoik();

raamatukogu.lisaRaamat({ pealkiri: "Harry Potter", autor: "J. K. Rowling", aasta: 2001 });

console.log("Raamatuid kokku: " + raamatukogu.koguarv());
tulemus2 += `<p><b>Raamatuid kokku:</b> ${raamatukogu.koguarv()}</p>`;

console.log("Pärast 2000. aastat: " + raamatukogu.parast2000());
tulemus2 += `<p><b>Pärast 2000. aastat:</b> ${raamatukogu.parast2000()}</p>`;

let kivirahk = raamatukogu.leiaAutor("Andrus Kivirähk");
console.log(kivirahk);
tulemus2 += `<p><b>Andrus Kivirähki raamatuid:</b> ${kivirahk.length}</p>`;

document.getElementById("vastus2").innerHTML = tulemus2;