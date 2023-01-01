// Function to show the current date in dayjs format.
function showDate() {
    var today = dayjs();
    $('#currentDate').text(today.format('MMM DD, YYYY'))
}
// Updates the current date every minute.
setInterval(showDate(), 60000)

// Function to store input values to local storage.
    // Array to hold events.
var events = []
function saveNinthHour() {
    var nineInput = document.getElementById('#event-input-nine');
    localStorage.setItem('nineInput', nineInput);
};
function saveTenthHour() {

};
function saveEleventhHour() {

};
function saveTwelfthHour() {

};
function saveFirstHour() {

};
function saveSecondHour() {

};
function saveThirdHour() {

};
function saveFourthHour() {

};
function saveFifthHour() {

};



function displayEvent() {

}