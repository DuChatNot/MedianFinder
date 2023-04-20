const n1 = [1,2,3,1,4,6,43,2,5,6,3,6,1,2,3,4,6,98,6,54,3,2,12,3];
const n2 = [6,7,8,3,6,1,3,4,6,6,5,12,3,6,42,11,37];

function medianFinder (a,b){
    const res = a.concat(b)
    //const arr = res.sort();
    const arrSorted = res.sort((x,y) => x - y); //Trully sorted
    const halfway = arrSorted.length/2

    if(halfway-Math.floor(halfway) === 0){ //Halfway = float
        const medianA = arrSorted[halfway]+arrSorted[halfway-1]
        const resultA = medianA/2 
        console.log(`The mid point of [${arrSorted}] it's: ${resultA}`)
    } else {// Halfway != float
        const medianB = Math.floor(halfway)
        const resultB = arrSorted[medianB]
        console.log(`The mid point of [${arrSorted}] it's: ${resultB}`);
    }
}

medianFinder(n1,n2);

//Testing Area:

/* //concat 
const a = [1,2,3];
const b = [4,5,6];

const c = a.concat(b);
console.log(c)
*/

//float
/*
const a = 4.52
a - Math.floor(a) === 0 ? console.log('No decimal') : console.log('Decimal')
*/