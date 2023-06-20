function displayData(data) {
    result.value += data;
}

function allClear() {
    result.value = "";
}

function output() {
    result.value = eval(result.value);
}

// s="hello";
// //hello
// s.slice(0,-1) ==>hell
function backspace() {
    result.value = result.value.slice(0, -1);
}