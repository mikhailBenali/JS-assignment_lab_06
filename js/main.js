document.getElementById("darkLight").addEventListener("click", lightDarkFunc);

let light = true;

function lightDarkFunc() {
    if (light) { // Dark mode
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff";
        document.getElementById("darkLight").innerText = "Light Mode";
        light = false;
    }
    else { // Light mode
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        document.getElementById("darkLight").innerText = "Dark Mode";
        light = true;
    }
}

//###########################################################################

if (document.getElementById("submitButton") != null) {
    document.getElementById("submitButton").addEventListener("click", userForm);

    function userForm() {

        let firstName = document.getElementById("first-name").value;
        let lastName = document.getElementById("last-name").value;
        let email = document.getElementById("email").value;
        let address = document.getElementById("address").value;
        let city = document.getElementById("city").value;
        let province = document.getElementById("province").value;
        let membership = document.querySelector('input[name="membership"]:checked').value;


        let outputString = `Full Name: ${firstName} ${lastName}
                        Email: ${email}
                        Address: ${address},${city}, ${province}
                        Membership: ${membership}`;


        document.getElementById("output").innerText = outputString;
    }
}

//###########################################################################
if (document.getElementById("calcButton") != null) {
    document.getElementById("calcButton").addEventListener("click", myExcelFunc);
    let result = 0;

    function myExcelFunc() {
        let numberStr = document.getElementById("input").value;

        if (numberStr == "") {
            alert("Please enter a number");
            return;
        }
        else {
            numberStr = numberStr.trim();
            let numberArr = numberStr.split(" ");
            let finalNumberArr = [];
            for (let i = 0; i < numberArr.length; i++) {
                numberArr[i] = numberArr[i].trim();
                if (isNaN(numberArr[i])) {
                    alert("Please enter a number");
                    return;
                }
                else {
                    finalNumberArr.push(parseInt(numberArr[i]));
                }
            }

            if (document.getElementById("autoSum").checked) {
                result = 0;
                for (let i = 0; i < finalNumberArr.length; i++) {
                    result += finalNumberArr[i];
                }
                document.getElementById("result").innerText = "The sum of these numbers is " + result;
            }
            else if (document.getElementById("average").checked) {
                result = 0;
                for (let i = 0; i < finalNumberArr.length; i++) {
                    result += finalNumberArr[i];
                }
                result = result / finalNumberArr.length;
                document.getElementById("result").innerText = "The average of these numbers is " + result;
            }
            else if (document.getElementById("max").checked) {
                result = 0;
                result = finalNumberArr[0];
                for (let i = 1; i < finalNumberArr.length; i++) {
                    if (finalNumberArr[i] > result) {
                        result = finalNumberArr[i];
                    }
                }
                document.getElementById("result").innerText = "The maximum of these numbers is " + result;
            }
            else {
                result = 0;
                result = finalNumberArr[0];
                for (let i = 1; i < finalNumberArr.length; i++) {
                    if (finalNumberArr[i] < result) {
                        result = finalNumberArr[i];
                    }
                }
                document.getElementById("result").innerText = "The minimum of these numbers is " + result;
            }
        }
    }
}