const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('#todo');
const container2 = document.querySelector('#doing');
const container3 = document.querySelector('#done');

class item{
    constructor(itemName){
        this.createDiv(itemName)
    }
    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        itemBox.classList.add('empty');

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');
        
        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');

        let itemBoxempty = document.createElement('div');
        itemBoxempty.classList.add('empty');
        itemBoxempty.innerHTML="lol";

        let itemBoxempty2 = document.createElement('div');
        itemBoxempty2.classList.add('empty');
        itemBoxempty2.innerHTML="lol";

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);
        
        container2.appendChild(itemBoxempty);
        container3.appendChild(itemBoxempty2);

        editButton.addEventListener('click',()=> this.edit(input));
        removeButton.addEventListener('click',()=> this.remove(itemBox));

    }
    edit(input){
        input.disabled =!input.disabled;
    }
    remove(item){
        container.removeChild(item);
    }
}

function check(){
    if (input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e)=>{
    if(e.which == 13){
        check();
    }
})