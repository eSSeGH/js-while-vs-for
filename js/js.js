

const numArray = []

while (numArray.length < 10) {

    let num = prompt("scegli un numero maggiore di 0")

    if (isNaN(num) || num <= 0) {
        continue
    } else {

        let resto = num % 2

        if (resto === 1) {
            numArray.push(num)
        } else {
            continue
        }
    }

}

console.log(numArray)

for (i = 0; i <10; i++) {
    console.log(numArray[i])
}