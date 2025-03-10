function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var phno = document.getElementById("phno").value;
    var address = document.getElementById("address").value;
    if (!/^[A-Za-z]+$/.test(fname) || fname.length < 4) {
        alert("First Name should contain only alphabets and be at least 4 characters long.");
        return false;
    }
    if (!/^[A-Za-z]+$/.test(lname) || lname.length < 1) {
        alert("Last Name should contain only alphabets and be at least 1 character long.");
        return false;
    }
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (dob === "") {
        alert("Please enter your Date of Birth.");
        return false;
    }
    if (age.length !== 2 || isNaN(age)) {
        alert("Age must be a two-digit number.");
        return false;
    }
    if (!gender) {
        alert("Please select a gender.");
        return false;
    }
    if (!/^\d{10}$/.test(phno)) {
        alert("Phone Number must contain exactly 10 digits.");
        return false;
    }
    if (address === "") {
        alert("Address should not be empty.");
        return false;
    }
    displayData(fname, lname, email, dob, age, gender.value, phno, address);
    return false;
}
function displayData(fname, lname, email, dob, age, gender, phno, address) {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("resultTable").style.display = "table";
    var resultTable = document.getElementById("resultTable").getElementsByTagName('tbody')[0];
    var data = [
        ["First Name", fname],
        ["Last Name", lname],
        ["Email", email],
        ["Date of Birth", dob],
        ["Age", age],
        ["Gender", gender],
        ["Phone Number", phno],
        ["Address", address]
    ];
    data.forEach(function(row) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(row[0]));
        tr.appendChild(td1);
        var td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(row[1]));
        tr.appendChild(td2);
        resultTable.appendChild(tr);
    });
}