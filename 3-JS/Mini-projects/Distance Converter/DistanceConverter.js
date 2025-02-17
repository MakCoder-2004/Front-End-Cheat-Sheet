function convertDistance() {
    let number = parseFloat(document.getElementById("number").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = 0;

    if (from === to) {
        alert("From and To units should not be the same");
        return;
    }

    if (from === "miles" && to === "ft") {
        result = number * 5280;
    } else if (from === "kilometers" && to === "ft") {
        result = number * 3281;
    } else if (from === "miles" && to === "kilometers") {
        result = (number * 5280) / 3281;
    } else if (from === "kilometers" && to === "miles") {
        result = (number * 3281) / 5280;
    } else if (from === "ft" && to === "miles") {
        result = number / 5280;
    } else if (from === "ft" && to === "kilometers") {
        result = number / 3281;
    }

    alert(`${number} ${from} is equal to ${Math.round(result)} ${to}`);
}