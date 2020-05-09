function validateForm(){
    let inputs = document.forms["signin"][email-field].value;
    if(inputs == null || inputs == ""){
        document.getElementById("alert-email").style.display = "block";
        return false;
    }
}