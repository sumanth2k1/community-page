// i = 5
// outer_for =  1st, 2nd, 3rd
// p = 2,3,4


// inner_for = 1st
// a = 2,3



let prime = (i) => {
    for (let p = 2; p < i; p++) {
        for (let a = 2; a < p; a++) {
            if (p % a != 0) {
                console.log(p)
            }
        }
    }
}

prime(5)
