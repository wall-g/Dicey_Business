let container = document.querySelector('#main');
let btn_new = document.querySelector('#btn-new');
let btn_roll = document.querySelector('#btn-roll')
let arr = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];
let dice = [];
class Die{
    constructor(){
        this.div = document.createElement('div');
        this.div.className = 'box';
        this.value;
        this.roll();
        this.div.innerHTML = this.value;
        dice.push(this.div);
        container.appendChild(this.div);
    }

    roll(){
        this.value = arr[randomVal(0, 6)];
    }

}

btn_new.addEventListener('click', () => {
    new Die();
    dice.forEach((die) => {
        die.addEventListener('click', () => {
            die.innerHTML = arr[randomVal(0,6)];
        })
    })
});

btn_roll.addEventListener('click', () => {
    dice.forEach((obj) => {
        obj.innerHTML = arr[randomVal(0,6)];
    });
});


function randomVal(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}