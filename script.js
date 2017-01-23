var form = document.forms.myForm,
    fname = form.mail,
    mail = form.mail,
    login = form.sbmt,
    mail__err = form.mail__err,
	pass = form.pass;
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



    if(this.valueMail.length <= 3){
    	mail__err.innerHTML = "E";
    }
});