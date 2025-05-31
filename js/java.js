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





// noakhali
document.getElementById('Show_popup').addEventListener('click', function(event){
    event.preventDefault();
    // get the donation input
    const Input = document.getElementById('donation_input').value;  
    const inputvalue = parseFloat(Input);

    
    if(!isNaN(inputvalue)){

            // noakhali donation Amount 
            const noakhaliAmount = document.getElementById('noakhali_amount')
            const noakhaliAmountNumber = getNumber('noakhali_amount');
            // console.log(noakhaliAmountNumber)

            // ourAmount 
            const ourAmount = document.getElementById('our_amount');
            const ourAmountNumber = getNumber('our_amount');

            if (inputvalue > ourAmountNumber) {
                alert("we don't need huge amount")
                return;
            }

            

            // date and time
            const d = new Date();

            const div = document.createElement('div');
            div.innerHTML = `
            <div class="border border-[rgba(17,17,17,0.2)] p-5 rounded-xl mb-4"> 
            <p class="font-semibold mb-2"> ${inputvalue} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
            <p class="text-[rgba(17,17,17,0.7)]"> ${d}</p>
             </div>`
            
            // ----------histore post             
            const container = document.getElementById('post_container');
            container.appendChild(div);

            
            // new noakhali amount 
        const noakhaliNewAmount = noakhaliAmountNumber + inputvalue;
        noakhaliAmount.innerText = noakhaliNewAmount;

        const ourNewAmount = ourAmountNumber - inputvalue;
        ourAmount.innerText = ourNewAmount;

        // show popup
        document.getElementById('Popup').classList.remove('hidden');
        this.disabled = true;

    }else{
        alert('please enter a valid number')
    }

})
//  close popup
document.getElementById('hidden_popup').addEventListener('click', function(){
    document.getElementById('Popup').classList.add('hidden');
    document.getElementById("Show_popup").disabled = false;
})

// feni
document.getElementById('feni_popup').addEventListener('click', function(event){
    event.preventDefault();
    // get the donation input
    const Input = document.getElementById('feni_input').value;  
    const inputvalue = parseFloat(Input);
    console.log(inputvalue)

    
    if(!isNaN(inputvalue)){

            // feni donation Amount 
            const noakhaliAmount = document.getElementById('feni_amount')
            const noakhaliAmountNumber = getNumber('feni_amount');

            // ourAmount 
            const ourAmount = document.getElementById('our_amount');
            const ourAmountNumber = getNumber('our_amount');

            if (inputvalue > ourAmountNumber) {
                alert("we don't need huge amount")
                return;
            }

            

            // date and time
            const d = new Date();

            const div = document.createElement('div');
            div.innerHTML = `
            <div class="border border-[rgba(17,17,17,0.2)] p-5 rounded-xl mb-4"> 
            <p class="font-semibold mb-2"> ${inputvalue} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
            <p class="text-[rgba(17,17,17,0.7)]"> ${d}</p>
             </div>`
            
            // ----------histore post             
            const container = document.getElementById('post_container');
            container.appendChild(div);

            
            // new feni amount 
        const noakhaliNewAmount = noakhaliAmountNumber + inputvalue;
        noakhaliAmount.innerText = noakhaliNewAmount;

        const ourNewAmount = ourAmountNumber - inputvalue;
        ourAmount.innerText = ourNewAmount;

        // show popup
        document.getElementById('Popup').classList.remove('hidden');
        this.disabled = true;

    }else{
        alert('please enter a valid number')
    }
})

document.getElementById('hidden_popup').addEventListener('click', function(){
    document.getElementById('Popup').classList.add('hidden');
    document.getElementById("feni_popup").disabled = false;
}) 


// quota 
document.getElementById('quota_popup').addEventListener('click', function(event){
    event.preventDefault();
    // get the donation input
    const Input = document.getElementById('quota_input').value;  
    const inputvalue = parseFloat(Input);
    console.log(inputvalue)

    
    if(!isNaN(inputvalue)){

            // quota donation Amount 
            const noakhaliAmount = document.getElementById('quota_amount')
            const noakhaliAmountNumber = getNumber('quota_amount');

            // ourAmount 
            const ourAmount = document.getElementById('our_amount');
            const ourAmountNumber = getNumber('our_amount');

            if (inputvalue > ourAmountNumber) {
                alert("we don't need huge amount")
                return;
            }

            

            // date and time
            const d = new Date();

            const div = document.createElement('div');
            div.innerHTML = `
            <div class="border border-[rgba(17,17,17,0.2)] p-5 rounded-xl mb-4"> 
            <p class="font-semibold mb-2"> ${inputvalue} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
            <p class="text-[rgba(17,17,17,0.7)]"> ${d}</p>
             </div>`
            
            // ----------histore post             
            const container = document.getElementById('post_container');
            container.appendChild(div);

            
            // new feni amount 
        const noakhaliNewAmount = noakhaliAmountNumber + inputvalue;
        noakhaliAmount.innerText = noakhaliNewAmount;

        const ourNewAmount = ourAmountNumber - inputvalue;
        ourAmount.innerText = ourNewAmount;

        // show popup
        document.getElementById('Popup').classList.remove('hidden');
        this.disabled = true;

    }else{
        alert('please enter a valid number')
    }
})
document.getElementById('hidden_popup').addEventListener('click', function(){
    document.getElementById('Popup').classList.add('hidden');
    document.getElementById("quota_popup").disabled = false;
}) 