const paymentStatus = true;
const marks = 90;

function enroll() {
    console.log('Course enrollment is in progress...')
    const promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            if(paymentStatus) {
                resolve();
            } else {
                reject('Payment Failed.!!!');
            }
        }, 1500);
    });
    return promise;
}

function progress() {
    console.log('Course on progress..');
    const promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            if(marks >= 80) resolve();
            else reject('You haven\'t pass the test.');
        }, 2000);
    });
    return promise;
}

function getCertificate() {
    console.log('Preparing your certificate...');
    const promise = new Promise(function(resolve) {
        setTimeout(() => {
            resolve('Congrat\'s! You got the certificate.');
        }, 1000);
    });
    return promise;
}

async function course() {
    try {
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message);
    } catch(err) {
        console.log(err);
    }
}

// course();

let input = 'I Love Bangladesh';
let output = '';

let inputArr = input.split(' ');

inputArr.forEach(element => {
    let hold = element.split("").reverse().join("");
    hold = hold.toLowerCase();
    output += hold[0].toUpperCase() + hold.slice(1);
    output += " ";
});

console.log(output);

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString(input));

// I Love Bangladesh