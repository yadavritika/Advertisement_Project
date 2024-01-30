function validateform(){
    let name=document.forms["applicationform"]["fullname"].value;
    let email=document.forms["applicationform"]["emailid"].value;
    let number=document.forms["applicationform"]["contactnumber"].value;
    let location=document.forms["applicationform"]["location"].value;
    if(name==""){
        alert("Name must be filled");
        return false;
    }
    if(email==""){
        alert("Email Id must be filled");
        return false;
    }
    if(number==""){
        alert("Number must be filled");
        return false;
    }
    else if(number>10 || number<10){
        alert("Number must be of 10 digits");
        return false;
    }
    if(location==""){
        alert("Location must be filled");
        return false;
    }
}