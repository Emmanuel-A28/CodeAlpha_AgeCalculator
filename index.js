/* 
bDay => birthdate (same as months and years)
dAge => day of the age (mAge for month and yAge  
        for year)        
        Age Calculator 
 */

const output =document.getElementById("display-result"); /* Declaring a variable to store the output*/

const calculate =document.getElementById("calc-btn"); /* Declaring a variable to store the button action*/
calculate.addEventListener("click", function(e) {
    e.preventDefault;
    /* declare a variable to store the date of birth. Alert a message if the field is submitted empty*/
    const input =document.getElementById("birthdate").value;
    if (!input) {
        alert("⚠️ Input your birthdate!");
        return;
    }
    /* declare a variable and store the array form of the DOB being splited by - */
    const part = input.split("-");
        const birthdate = new Date(part[0], part[1]-1, part[2]);
    
    /* get the present date'*/
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    
    /* from the array, derive the date*/
    let bDay = birthdate.getDate();
    let bMonth = birthdate.getMonth();
    let bYear = birthdate.getFullYear();
    
    /* get the last day of the previous month*/
    const prevMonth = new Date(year, month, 0).getDate();
    
    /* calculator*/
    let dAge = day - bDay;
    if(dAge < 0) { /* logic behind the calculation: if day < 0 add the numbers of the days in the last month to the day and subtract the month by 1.*/
        day += prevMonth;
        month -= 1;
        dAge = day - bDay
    }
    
    let mAge = month - bMonth;
    if(mAge < 0) { /* if month < 0 add 12 to the month and subtract 1 from the year*/
        month += 12;
        year -= 1;
        mAge = month - bMonth;
    }
    
   
   let yAge = year - bYear;
   if (yAge < 0) {
       alert("⚠️ Birthdate can't be from the future!");
       return;
   }
   /* detect if today is the user's birthday*/
   if (bDay === day &&  bMonth === month && yAge > 0) {
       alert(`🎉 Happy Birthday to you! Today is your birthday. You are ${yAge} years old.`)

   }
   
   /* reject input if the field is empty. */
  if (yAge === 0 && mAge === 0 &&  dAge===0) {
      alert("⚠️ You input today's date.");
      return;
  }

 
    output.innerText =`You are ${yAge} year(s) old.`; /* displays result briefly*/
    const buttons =  document.getElementById("buttons");
    buttons.style.display = "flex"; /* get the reset and show more button and make them visible after the calculation*/
    
    const seeMore = document.getElementById("see-more-btn"); /* see more button */
    seeMore.addEventListener("click", () =>{
    /* add even listener*/
            document.getElementById("display-result").innerText = `You are ${yAge} years, ${mAge} month(s)and ${dAge} day(s) old.`; /* display result in detsul*/      
    });
    
       /* reset button*/
    const resetBtn =     document.getElementById("reset-btn");
    resetBtn.addEventListener("click", () => {
    document.getElementById("birthdate").value = "";    document.getElementById("display-result").innerHTML=""; /* empty the rest*/
    
    const buttons =  document.getElementById("buttons");
    buttons.style.display = "none"; /* make the see-more and reset button disappear*/
})


});
