const pathName = window.location.pathname;
const pageName = pathName.split('/').pop();

if(pageName === 'index.html'){
    document.querySelector('.home').classList.add('active')
}
if(pageName === 'history.html'){
    document.querySelector('.history').classList.add('active')
}

//  number make function 
// function getNumber(id){
//     const value = document.getElementById(id);
//     console.log(value)
//     const number = parseFloat(value);
//     return number;
// }









document.getElementById('Show_popup').addEventListener('click', function(event){
    event.preventDefault();
    // get the donation input
    const Input = document.getElementById('donation_input').value;  
    const inputvalue = parseFloat(Input);
    localStorage.setItem('donation',inputvalue);
    
    if(!isNaN(inputvalue)){
        
            localStorage.getItem('donation');
            const p = document.createElement('p');
            p.innerText = `Add: ${inputvalue}`
            console.log(p)
            // histore post 
            const container = document.getElementById('History_container');
            container.appendChild(p);

        // show popup
        document.getElementById('Popup').classList.remove('hidden');
    }else{
        alert('please enter a valid number')
    }

})

document.getElementById('hidden_popup').addEventListener('click', function(){
    document.getElementById('Popup').classList.add('hidden');
})

 