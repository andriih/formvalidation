var form = document.forms.myForm,
    mail = form.mail,
    login = form.sbmt,
    mail__err = document.getElementById("mail__err"),
	pass = form.pass,
    pass__err = form.pass__err,
    log_nav = document.querySelector(".login"),
    reg_nav = document.querySelector(".reg"),

    form2 = document.forms.myForm2;


log_nav.addEventListener("click",function(){
    form.style.display = "block";
    form2.style.display = "none";
});
reg_nav.addEventListener("click",function(){
    form2.style.display = "block";
    form.style.display = "none";
});

form.addEventListener("submit",function(e){
   e.preventDefault();

    this.valueMail = mail.value.trim();
    this.valuePass = pass.value.trim();
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!re.test(this.valueMail)){
    	mail__err.innerHTML = "Incorrect email format";

	}else{
        mail__err.innerHTML = "";
    }

	if(this.valuePass.length<=7){

	}

});