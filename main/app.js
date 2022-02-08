// Selector
let inputs = document.querySelectorAll('.inputs');
let add_mark = document.getElementById('add_mark');

let bangla = document.getElementById('bangla');
let english = document.getElementById('english');
let math = document.getElementById('math');
let physics = document.getElementById('physics');
let chemistry = document.getElementById('chemistry');
let biology = document.getElementById('biology');

let total_mark = document.getElementById('total_mark');
let avg_mark = document.getElementById('avg_mark');
let grade_point = document.getElementById('grade_point');
let pass_failed_result = document.getElementById('pass_failed_result');


// Selected all input fields
for (let input of inputs) {
    input.addEventListener('input', function () {
        if (input.value > 100 || input.value < 0) {
            input.style.background = 'red';
            alert('Please enter valid number')
        }
    })
}


// Added Event
add_mark.addEventListener("click", function () {

    // Get Total Mark
    let total = parseInt(bangla.value) + parseInt(english.value) + parseInt(math.value) + parseInt(physics.value) + parseInt(chemistry.value) + parseInt(biology.value);
    total_mark.innerHTML = total;


    // Get Avg Mark
    avg_mark.innerHTML = (total_mark.innerHTML / 6).toFixed(2);


    // Get Pass or Failed
    for (let input of inputs) {
        if (input.value < 33) {
            grade_point.innerHTML = "F";
            pass_failed_result.innerHTML = "Failed";
            return
        }
        else {
            grade_point.innerHTML = "";
            pass_failed_result.innerHTML = "Passed"
        }
    }


    // Get Grade
    if (avg_mark.innerHTML >= 33 && avg_mark.innerHTML <= 39) {
        grade_point.innerHTML = "D"
    }
    else if (avg_mark.innerHTML >= 40 && avg_mark.innerHTML <= 49) {
        grade_point.innerHTML = "C"
    }
    else if (avg_mark.innerHTML >= 50 && avg_mark.innerHTML <= 59) {
        grade_point.innerHTML = "B"
    }
    else if (avg_mark.innerHTML >= 60 && avg_mark.innerHTML <= 69) {
        grade_point.innerHTML = "A-"
    }
    else if (avg_mark.innerHTML >= 70 && avg_mark.innerHTML <= 79) {
        grade_point.innerHTML = "A"
    }
    else if (avg_mark.innerHTML >= 80 && avg_mark.innerHTML <= 100) {
        grade_point.innerHTML = "A+"
    }

})