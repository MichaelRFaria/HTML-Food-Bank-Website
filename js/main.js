document.addEventListener('DOMContentLoaded', highlightOpeningTime());

function highlightOpeningTime() {
    const timeNow = new Date();

    const today = timeNow.getDay();
    //console.log(timeNow.getDay());

    const currHour = timeNow.getHours();
    //console.log(timeNow.getHours());
    
    switch (today) {
        case 1,2,3,4,5:
            if (currHour >= 10 && currHour < 20) {
                const todaysOpenTime = document.getElementById("weekday");
                todaysOpenTime.className="not_striked_through";
            } else {
                const message = document.getElementById("opening_message");
                message.textContent = "Closed for today! Next open tomorrow"
            }
            break;
        case 6:
            if (currHour >= 10 && currHour < 18) {
                const todaysOpenTime = document.getElementById("saturday");
                todaysOpenTime.className="not_striked_through";
                //console.log("test");
            } else {
                const message = document.getElementById("opening_message");
                message.textContent = "Closed for today! Next open on Monday"
            }
            break;
        case 0:
            const message = document.getElementById("opening_message");
            message.textContent = "Closed for today! Next open on Monday"
    }

    //console.log(document.getElementById("saturday").className);
}