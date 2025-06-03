const pathName = window.location.pathname;
const pageName = pathName.split('/').pop();

if(pageName === 'index.html'){
    document.querySelector('.home').classList.add('active')
}
if(pageName === 'history.html'){
    document.querySelector('.history').classList.add('active')
}

// ---------- number make function 
function getNumber(id){
    const tag = document.getElementById(id);
    const text = tag.innerText;
    const number = parseFloat(text);
    return number;
}


document.getElementById("Show_popup").addEventListener("click", function(event){
    event.preventDefault();

    const noakhaliInputElement = document.getElementById("donation_input_noakhali");
    const noakhaliInput = noakhaliInputElement.value;
    const noakhaliInputNumber = parseFloat(noakhaliInput);

    noakhaliInputElement.value = "";
    if(!isNaN(noakhaliInputNumber)){
        console.log(noakhaliInputNumber);
        document.getElementById("Popup").click();
        
    }else{
        alert('please enter a valid number')
    }
   
})