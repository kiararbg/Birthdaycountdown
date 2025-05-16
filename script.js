// create function name as calculateDays()

function calculateDays(){
    // get birthday date from the input

    let birthdayInput = document.getElementById('birthdayInput').value;
    let birthdayDate = new Date(birthdayInput + 'T12:00:00');

    // get todays date
    let today = new Date();

    // set the birthdate to this year
    birthdayDate.setFullYear(today.getFullYear())

    // if birthday has passed this year then add 1 year
    if(today > birthdayDate){
    birthdayDate.setFullYear(today.getFullYear() + 1);
    // console.log(birthdayDate.setFullYear(today.getFullYear() + 1));
    // console.log(birthdayDate)
    }

    // calculate the difference in dates
    let diffTime = birthdayDate - today
    console.log(diffTime);

    // convert time stamp into days
    let diffDays = Math.ceil(diffTime /( 1000 * 60 * 60 * 24));
    console.log("Days Left for Birthday" + " " + diffDays);

    // display result 
    let resultDiv = document.getElementById('result')
    resultDiv.innerHTML = `Your Birthday is in ${diffDays} days !`
}
