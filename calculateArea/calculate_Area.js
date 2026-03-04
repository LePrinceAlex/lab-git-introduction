let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function groceryTracker() {
    let amount_1 = parseFloat(document.getElementById('grocery1').value);
    let amount_2 = parseFloat(document.getElementById('grocery2').value);
    let amount_3 = parseFloat(document.getElementById('grocery3').value);

    let total = amount_1 + amount_2 + amount_3;
    document.getElementById('resultGrocery').innerText = `The total amount is: ${total}`;
}