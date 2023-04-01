'use strict';

function calcAverage(one, two, three) {
    const avg = (one+two+three)/3;
    return avg;
}

function checkWinner(avgDolhins, avgKoalas) {
    if(avgDolhins > avgKoalas) console.log(`Dolhins win ${avgDolhins} vs ${avgKoalas}`);
    else if(avgKoalas > avgDolhins) console.log(`Koalas win ${avgKoalas} vs ${avgDolhins}`);
}

const dolhins = calcAverage(44, 23, 71);
const koalas = calcAverage(85, 54, 41);

checkWinner(dolhins, koalas);