const days = +prompt("How many days in advance should you keep a temperature record?");
if (!isNaN(days) && days > 0) {
    let month = [];
    let positive = 0;
    let negative = 0;
    let average = 0;
    const max = 40;
    const min = -40;
    for (let i = 0; i < days; i++) {
        month[i] = Math.floor(Math.random() * (max - min + 1)) + min;
        average += month[i];
        if (month[i] < 0) {
            negative++;
        }
        if (month[i] >= 0) {
            positive++;
        }
        alert(month[i]);
    }
    document.getElementById("positive").innerHTML = "Number of days with positive temperature: " + positive;
    document.getElementById("negative").innerHTML = "Number of days with negative temperature: " + negative;
    average /= month.length;
    document.getElementById("average").innerHTML = "Average temperature: " + average;
}