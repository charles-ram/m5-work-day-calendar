// Function to show the current date in dayjs format.
function showDate() {
    var today = dayjs();
    $('#currentDate').text(today.format('MMM DD, YYYY'))
}
// Updates the current date every minute.
setInterval(showDate(), 60000)


// Variables for saving the input value to localstorage.
// Array to hold events.
var events = [
    "nine",
    "ten",
    "eleven",
    "twelve",
    "one",
    "two",
    "three",
    "four",
    "five"
]
// Functions to save input.
function saveNinthHour() {
    var nineInput = document.getElementById('event-input-nine').value.trim();
    localStorage.setItem("nine", nineInput);
};
function saveTenthHour() {
    var tenInput = document.getElementById('event-input-ten').value.trim();
    localStorage.setItem("ten", tenInput)
};
function saveEleventhHour() {
    var elevenInput = document.getElementById('event-input-eleven').value.trim();
    localStorage.setItem("eleven", elevenInput);
};
function saveTwelfthHour() {
    var twelveInput = document.getElementById('event-input-twelve').value.trim();
    localStorage.setItem("twelve", twelveInput);
};
function saveFirstHour() {
    var oneInput = document.getElementById('event-input-one').value.trim();
    localStorage.setItem("one", oneInput);
};
function saveSecondHour() {
    var twoInput = document.getElementById('event-input-two').value.trim();
    localStorage.setItem("two", twoInput);
};
function saveThirdHour() {
    var threeInput = document.getElementById('event-input-three').value.trim();
    localStorage.setItem("three", threeInput);
};
function saveFourthHour() {
    var fourInput = document.getElementById('event-input-four').value.trim();
    localStorage.setItem("four", fourInput);
};
function saveFifthHour() {
    var fiveInput = document.getElementById('event-input-five').value.trim();
    localStorage.setItem("five", fiveInput);
};
// Function to display saved events.
function displayEvent() {
    document.getElementById('event-input-nine').value = localStorage.getItem("nine");
    document.getElementById('event-input-ten').value = localStorage.getItem("ten");
    document.getElementById('event-input-eleven').value = localStorage.getItem("eleven");
    document.getElementById('event-input-twelve').value = localStorage.getItem("twelve");
    document.getElementById('event-input-one').value = localStorage.getItem("one");
    document.getElementById('event-input-two').value = localStorage.getItem("two");
    document.getElementById('event-input-three').value = localStorage.getItem("three");
    document.getElementById('event-input-four').value = localStorage.getItem("four");
    document.getElementById('event-input-five').value = localStorage.getItem("five");
};
// Initial function call to display events on page load.
displayEvent();

// Function to change the background color of the timeblocks based on current time.
// Past time blocks are color #EDEDED, current time blocks are color #B7FFBF, and upcoming time blocks are color #77C3EC.
function changeBackgroundColor() {
    var now = new Date();
    var hours = now.getHours();
    console.log(hours);
    if (hours < 9) {
        document.getElementById("row-0").style.backgroundColor = "#77C3EC"
        document.getElementById("row-1").style.backgroundColor = "#77C3EC"
        document.getElementById("row-2").style.backgroundColor = "#77C3EC"
        document.getElementById("row-3").style.backgroundColor = "#77C3EC"
        document.getElementById("row-4").style.backgroundColor = "#77C3EC"
        document.getElementById("row-5").style.backgroundColor = "#77C3EC"
        document.getElementById("row-6").style.backgroundColor = "#77C3EC"
        document.getElementById("row-7").style.backgroundColor = "#77C3EC"
        document.getElementById("row-8").style.backgroundColor = "#77C3EC"
    } else if (hours === 9) {
        document.getElementById("row-0").style.backgroundColor = "#B7FFBF"
        document.getElementById("row-1").style.backgroundColor = "#77C3EC"
        document.getElementById("row-2").style.backgroundColor = "#77C3EC"
        document.getElementById("row-3").style.backgroundColor = "#77C3EC"
        document.getElementById("row-4").style.backgroundColor = "#77C3EC"
        document.getElementById("row-5").style.backgroundColor = "#77C3EC"
        document.getElementById("row-6").style.backgroundColor = "#77C3EC"
        document.getElementById("row-7").style.backgroundColor = "#77C3EC"
        document.getElementById("row-8").style.backgroundColor = "#77C3EC"
    } else if (hours === 10) {
        document.getElementById("row-0").style.backgroundColor = "#EDEDED"
        document.getElementById("row-1").style.backgroundColor = "#B7FFBF"
        document.getElementById("row-2").style.backgroundColor = "#77C3EC"
        document.getElementById("row-3").style.backgroundColor = "#77C3EC"
        document.getElementById("row-4").style.backgroundColor = "#77C3EC"
        document.getElementById("row-5").style.backgroundColor = "#77C3EC"
        document.getElementById("row-6").style.backgroundColor = "#77C3EC"
        document.getElementById("row-7").style.backgroundColor = "#77C3EC"
        document.getElementById("row-8").style.backgroundColor = "#77C3EC"
    } else if (hours === 11) {
        document.getElementById("row-0").style.backgroundColor = "#EDEDED"
        document.getElementById("row-1").style.backgroundColor = "#EDEDED"
        document.getElementById("row-2").style.backgroundColor = "#B7FFBF"
        document.getElementById("row-3").style.backgroundColor = "#77C3EC"
        document.getElementById("row-4").style.backgroundColor = "#77C3EC"
        document.getElementById("row-5").style.backgroundColor = "#77C3EC"
        document.getElementById("row-6").style.backgroundColor = "#77C3EC"
        document.getElementById("row-7").style.backgroundColor = "#77C3EC"
        document.getElementById("row-8").style.backgroundColor = "#77C3EC"
    } else if (hours === 12) {
        document.getElementById("row-0").style.backgroundColor = "#EDEDED"
        document.getElementById("row-1").style.backgroundColor = "#EDEDED"
        document.getElementById("row-2").style.backgroundColor = "#EDEDED"
        document.getElementById("row-3").style.backgroundColor = "#B7FFBF"
        document.getElementById("row-4").style.backgroundColor = "#77C3EC"
        document.getElementById("row-5").style.backgroundColor = "#77C3EC"
        document.getElementById("row-6").style.backgroundColor = "#77C3EC"
        document.getElementById("row-7").style.backgroundColor = "#77C3EC"
        document.getElementById("row-8").style.backgroundColor = "#77C3EC"
    } else if (hours === 13) {
        document.getElementById("row-0").style.backgroundColor = "#EDEDED"
        document.getElementById("row-1").style.backgroundColor = "#EDEDED"
        document.getElementById("row-2").style.backgroundColor = "#EDEDED"
        document.getElementById("row-3").style.backgroundColor = "#EDEDED"
        document.getElementById("row-4").style.backgroundColor = "#B7FFBF"
        document.getElementById("row-5").style.backgroundColor = "#77C3EC"
        document.getElementById("row-6").style.backgroundColor = "#77C3EC"
        document.getElementById("row-7").style.backgroundColor = "#77C3EC"
        document.getElementById("row-8").style.backgroundColor = "#77C3EC"
    } else if (hours === 14) {
        document.getElementById("row-0").style.backgroundColor = "#EDEDED"
        document.getElementById("row-1").style.backgroundColor = "#EDEDED"
        document.getElementById("row-2").style.backgroundColor = "#EDEDED"
        document.getElementById("row-3").style.backgroundColor = "#EDEDED"
        document.getElementById("row-4").style.backgroundColor = "#EDEDED"
        document.getElementById("row-5").style.backgroundColor = "#B7FFBF"
        document.getElementById("row-6").style.backgroundColor = "#77C3EC"
        document.getElementById("row-7").style.backgroundColor = "#77C3EC"
        document.getElementById("row-8").style.backgroundColor = "#77C3EC"
    } else if (hours === 15) {
        document.getElementById("row-0").style.backgroundColor = "#EDEDED"
        document.getElementById("row-1").style.backgroundColor = "#EDEDED"
        document.getElementById("row-2").style.backgroundColor = "#EDEDED"
        document.getElementById("row-3").style.backgroundColor = "#EDEDED"
        document.getElementById("row-4").style.backgroundColor = "#EDEDED"
        document.getElementById("row-5").style.backgroundColor = "#EDEDED"
        document.getElementById("row-6").style.backgroundColor = "#B7FFBF"
        document.getElementById("row-7").style.backgroundColor = "#77C3EC"
        document.getElementById("row-8").style.backgroundColor = "#77C3EC"
    } else if (hours === 16) {
        document.getElementById("row-0").style.backgroundColor = "#EDEDED"
        document.getElementById("row-1").style.backgroundColor = "#EDEDED"
        document.getElementById("row-2").style.backgroundColor = "#EDEDED"
        document.getElementById("row-3").style.backgroundColor = "#EDEDED"
        document.getElementById("row-4").style.backgroundColor = "#EDEDED"
        document.getElementById("row-5").style.backgroundColor = "#EDEDED"
        document.getElementById("row-6").style.backgroundColor = "#EDEDED"
        document.getElementById("row-7").style.backgroundColor = "#B7FFBF"
        document.getElementById("row-8").style.backgroundColor = "#77C3EC"
    } else if (hours === 17) {
        document.getElementById("row-0").style.backgroundColor = "#EDEDED"
        document.getElementById("row-1").style.backgroundColor = "#EDEDED"
        document.getElementById("row-2").style.backgroundColor = "#EDEDED"
        document.getElementById("row-3").style.backgroundColor = "#EDEDED"
        document.getElementById("row-4").style.backgroundColor = "#EDEDED"
        document.getElementById("row-5").style.backgroundColor = "#EDEDED"
        document.getElementById("row-6").style.backgroundColor = "#EDEDED"
        document.getElementById("row-7").style.backgroundColor = "#EDEDED"
        document.getElementById("row-8").style.backgroundColor = "#B7FFBF"
    } else if (hours > 17) {
        document.getElementById("row-0").style.backgroundColor = "#EDEDED"
        document.getElementById("row-1").style.backgroundColor = "#EDEDED"
        document.getElementById("row-2").style.backgroundColor = "#EDEDED"
        document.getElementById("row-3").style.backgroundColor = "#EDEDED"
        document.getElementById("row-4").style.backgroundColor = "#EDEDED"
        document.getElementById("row-5").style.backgroundColor = "#EDEDED"
        document.getElementById("row-6").style.backgroundColor = "#EDEDED"
        document.getElementById("row-7").style.backgroundColor = "#EDEDED"
        document.getElementById("row-8").style.backgroundColor = "#EDEDED"
    }
}
// Checks the current time and updates the background color every minute.
setInterval(changeBackgroundColor(), 60000);

// I really need to figure out how to use array systems. I am writing so much code that I feel I could simplify.