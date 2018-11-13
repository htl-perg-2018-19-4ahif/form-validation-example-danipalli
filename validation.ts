$(document).ready(function(){
    $("#firstNameMandatory").hide();
    $("#lastNameMandatory").hide();
    $("#emailMandatory").hide();
    $("#otherMediaChannel").hide();
    $("#submit").hide();

    let firstName = false;
    let lastName = false;
    let eMail = true;

    $("#firstName").change(function(){
        if($("#firstName").val() !== ""){
            $("#firstNameMandatory").hide();
            firstName = true;
        }else{
            $("#firstNameMandatory").show();
            firstName = false;
        }
        checkSubmit();
    });
    $("#lastName").change(function(){
        if($("#lastName").val() !== ""){
            $("#lastNameMandatory").hide();
            lastName = true;
        }else{
            $("#lastNameMandatory").show();
            lastName = false;
        }
        checkSubmit();
    });
    $("#email").change(function(){
        if($("#email").val() === "" && $("#newsletter").is(":checked")){
            $("#emailMandatory").show();
            eMail = false;
        }else{
            $("#emailMandatory").hide();
            eMail = true;
        }
        checkSubmit();
    });
    $("#newsletter").change(function(){
        if($("#email").val() === "" && $("#newsletter").is(":checked")){
            $("#emailMandatory").show();
            eMail = false;
        }else{
            $("#emailMandatory").hide();
            eMail = true;
        }
        checkSubmit();
    });
    $("#mediaChannelSelect").change(function(){
        if($("#mediaChannelSelect").val() !== "Other"){
            $("#otherMediaChannel").hide();
        }else{
            $("#otherMediaChannel").show();
        }
    });

    function checkSubmit(){
        if(firstName && lastName && eMail){
            $("#submit").show();
        }else{
            $("#submit").hide();
        }
    }
});

