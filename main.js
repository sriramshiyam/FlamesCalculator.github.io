function flames(n1, n2) {

    let nam1 = [...n1.toLowerCase().trim()];
    let nam2 = [...n2.toLowerCase().trim()];
    nam1 = nam1.filter(x => x !== ' ');
    nam2 = nam2.filter(x => x !== ' ');

    let flames = ["Friendship", "Love", "Affection", "Marriage", "Enemy", "Siblings"];

    let value = nam1.length + nam2.length;
    console.log(value);

    for (let letter of nam1) {
        if (nam2.includes(letter)) {
            nam1.splice(nam1.indexOf(letter), 1, 1);
            nam2.splice(nam2.indexOf(letter), 1, 1);
        }
    }

    value = nam1.filter(x => typeof x === 'string').length + nam2.filter(x => typeof x === 'string').length;

    console.log(value);

    if (value < 5) {
        return 'invalid';
    }

    let count = value;

    let canCheck = true;

    while (canCheck) {
        for (let letter of flames) {
            if (letter === 1) {
                continue;
            }
            value -= 1;
            if (value === 0) {
                flames.splice(flames.indexOf(letter), 1, 1);
                value = count;
            }

            function oneCount(arr, item) {
                return arr.filter(x => x === item).length;
            }

            let one = oneCount(flames, 1);

            if (one === 5) {
                flames = flames.filter(x => typeof x === 'string');
                canCheck = false;
            }
        }
    }

    return flames[0];
}

let result = document.getElementById('result');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');

let name1 = document.getElementById('name1');
let name2 = document.getElementById('name2');
let relationship = document.getElementById('relationship');

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
result.style.top = `${windowHeight}px`;

button1.addEventListener('click', () => {
    if (name1.value.length > 0 & name2.value.length > 0) {
        relationship.innerHTML = flames(name1.value, name2.value);
        result.style.transition = 'top 0.4s ease-in-out';
        result.style.top = '0';
    } else {
        alert('Please enter the name');
    }
});

button2.addEventListener('click', () => {
    name1.value = '';
    name2.value = '';
});

button3.addEventListener('click', () => {
    result.style.top = `${windowHeight}px`;
});


