let container = document.querySelector('#main');
let btn_new = document.querySelector('#btn-new');
let arr = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];
class Die{
    constructor(){
        this.div = document.createElement('div');
        this.div.className = 'box';
        this.value;
        this.roll();
        this.div.innerHTML = this.value;
        container.appendChild(this.div);
    }

    roll(){
        this.value = arr[randomVal(0, 5)];
    }

}

btn_new.addEventListener('click', () => {
    new Die();
});

function randomVal(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}