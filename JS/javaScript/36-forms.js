function validate() {
    let fName = document.forms['myForm']['fname'].value;

    if (fName === "") {
        alert("Name must be filled out")
        return false
    }

    if(fName.length < 2){
        alert("Name must be at least 2 char")
        return false;
    }

    if(fName.length > 20){
        alert("Name must be at most 20 char")
        return false;
    }
}