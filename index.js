

const rollDice = () => {
    
    let numDice = parseInt(document.getElementsByTagName("input")[0].value, 10);
    let diceResult = document.getElementById("diceResult");
    let diceImages = document.getElementById("diceImages");
    let values = [];
    let allDice = [];


    for(let i = 0; i< numDice; i++) {
       let value = Math.floor(Math.random() * 6 + 1);
       values.push(value);
       allDice.push(`<img src="images/${value}.svg" alt="Dice num ${value}"/>`);
    }
    
    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = allDice.join(' ');
}