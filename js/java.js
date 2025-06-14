// btn click event
function clickHomeBtn(){
  const homeBtn = document.getElementById("home-btn");
  const historyBtn = document.getElementById("history-btn");
  const historyContainer = document.getElementById("card-contaier");
  const postContainer = document.getElementById("post_history");
  homeBtn.classList.add("active");
  historyBtn.classList.remove("active");
  historyContainer.classList.remove("remove_display");
  postContainer.classList.add("remove_display");
}

function clickHistoryBtn(){
  const homeBtn = document.getElementById("home-btn");
  const historyBtn = document.getElementById("history-btn");
  const historyContainer = document.getElementById("card-contaier");
  const postContainer = document.getElementById("post_history");
  homeBtn.classList.remove("active");
  historyBtn.classList.add("active");
  historyContainer.classList.add("remove_display");
  postContainer.classList.remove("remove_display");
  
}



// ---------- number make function
function getNumber(id) {
  const tag = document.getElementById(id);
  const text = tag.innerText;
  const number = parseFloat(text);
  return number;
}

document
  .getElementById("Show_popup")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const noakhaliInputElement = document.getElementById(
      "donation_input_noakhali"
    );
    const noakhaliInput = noakhaliInputElement.value;
    const noakhaliInputNumber = parseFloat(noakhaliInput);
    // * noakhali amount
    const noakhaliAmount = document.getElementById("noakhali_amount");
    const noakhaliCurrentAmount = getNumber("noakhali_amount");
    // * our amount
    const ourAmount = document.getElementById("our_amount");
    const ourCurrentAmount = getNumber("our_amount");
    // * history 
    const historyContainer = document.getElementById("post_history");

    noakhaliInputElement.value = "";
    if (!isNaN(noakhaliInputNumber)) {
      console.log(noakhaliInputNumber);

      if (noakhaliInputNumber > ourCurrentAmount) {
        alert("We don't need this much donation.");
        return;
      }
      if (noakhaliInputNumber <= 0) {
        alert("Please enter a positive amount.");
        return;
      }
      // * noakhali amount
      noakhaliAmount.innerText = noakhaliInputNumber + noakhaliCurrentAmount;
      // * our amount
      ourAmount.innerText = ourCurrentAmount - noakhaliInputNumber;


      // date 
      const cureentDate = new Date;
      // creat div tag for histoey container
      const div = document.createElement("div");
      div.innerHTML =`
      <div class="p-5 border border-[#e7e7e7] rounded-xl m-3">
      <h4 class="font-bold ">${noakhaliInputNumber} Taka is Donated for Flood Relief in Feni,Bangladesh</h4>
      <p class="text-[#585858]">Date : ${cureentDate}</P>
      </div>
      `
      historyContainer.appendChild(div)

      document.getElementById("Popup").click();

    } else {
      alert("please enter a valid number");
    }
  });
