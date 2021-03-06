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
        input.classList.add('portlet-header');
        input.classList.add('ui-sortable-handle');
        input.classList.add('ui-widget-header');
        input.classList.add('ui-corner-all');
        input.type = "text";

           


        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        itemBox.draggable = true;

           

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');
        
        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');

     
        
        container.appendChild(itemBox);
        
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);
      
        editButton.addEventListener('click',()=> this.edit(input));
        removeButton.addEventListener('click',()=> this.remove(itemBox));

    }
    edit(input){
        input.disabled =!input.disabled;
    }
    remove(item){
        container.removeChild(item);
        container2.removeChild(item);
        container3.removeChild(item);
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

$( function() {
    $( ".column" ).sortable({
    connectWith: ".column",
    handle: ".portlet-header",
    cancel: ".portlet-toggle",
    placeholder: "portlet-placeholder ui-corner-all"
    });

    $( ".portlet" )
    .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
    .find( ".portlet-header" )
        .addClass( "ui-widget-header ui-corner-all" )
        .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

    $( ".portlet-toggle" ).on( "click", function() {
    var icon = $( this );
    icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
    icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
    });
} );


// portlet ui-widget ui-widget-content ui-helper-clearfix ui-corner-all