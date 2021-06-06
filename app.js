let container = document.querySelector('#main');
let btn_new = document.querySelector('#btn-new');
let btn_roll = document.querySelector('#btn-roll');
let btn_sum = document.querySelector('#btn-sum');


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
        this.div.addEventListener('click', () => {
            let idx = dice.indexOf(this.div);
            dice[idx].innerHTML = arr[randomVal(0, 6)];

        })
        this.div.addEventListener('dblclick', () => {
            let idx = dice.indexOf(this.div);
            dice.splice(idx, 1);
            this.div.remove();

        })
    }

    roll(){
        this.value = arr[randomVal(0, 6)];
    }

}

btn_new.addEventListener('click', () => {
    new Die();
   
});

btn_roll.addEventListener('click', () => {
    dice.forEach((obj) => {
        obj.innerHTML = arr[randomVal(0,6)];
    });
});

btn_sum.addEventListener('click', () => {
    let sum = 0;
    dice.forEach((obj) => {
        let num = obj.innerHTML;
        let idx = arr.indexOf(num);
        sum += idx+1;
    })
    alert(sum);
})



function randomVal(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}