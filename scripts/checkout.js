function validateForm() {
    var x = document.forms["myForm"]["fname", "lname", "email", "street", "zip", "city"].value;
    if (x == "") {
        alert("All required fields must be filled out");
        return false;
    }
}