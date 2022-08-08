
function randInt(upperLimit) {
    return Math.floor(Math.random() * upperLimit);
}
let requestURL = `https://date.nager.at/api/v2/publicholidays/2020/US`;
function displayHoliday(data){
    console.log(data);
    let allHolidays = (data);
    console.log(allHolidays);
    let holidayHead = allHolidays[randInt(allHolidays.length)];
    console.log(holidayHead);
    
    let holidayHeader = document.querySelector("p");
    holidayHeader.innerHTML = holidayHead.name;
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(displayHoliday)

    .catch(function (error) {
        console.log("Error during fetch:", error);
    });

