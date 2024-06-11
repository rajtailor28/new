console.log('Here we are :)');

// let header = document.getElementById('header');

let header = document.querySelector('h1');

// header.classList.add('red');
header.classList.remove('blue');
header.classList.toggle('red');
header.innerHTML = '';

if (header.innerHTML === 'Liam') {
    alert('Liam was here');
}


console.log(header);

// let sections = document.querySelectorAll('.week6');
// console.log('Below are our class week6 elements');
// console.log(sections[2].innerHTML);


let myButton = document.querySelector('#myButton');
console.log(myButton);

let count = 0;

myButton.addEventListener('click', myClickEvent)

function myClickEvent() {
    let resultsDiv = document.querySelector('#results');
    let counter = document.querySelector('#counter');
    count++;
    counter.innerHTML = count;
    resultsDiv.innerHTML = 'The button has been clicked!';
    console.log(resultsDiv);
}

