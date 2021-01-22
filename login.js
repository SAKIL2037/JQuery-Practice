$("#loginbtn").click(function(){
    var pass1 = $('#pass1').val();
    var pass2 = $('#pass2').val();

    if(pass1 != "" && pass2 != ""){
        if(pass1 === pass2){
            alert("Successfully Login")
        }
        else{
            alert("Password Mismatch");
        }

    }
    else{
        alert("Please Enter Password");
    }
    console.log(pass1,pass2);

})