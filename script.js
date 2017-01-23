var form = document.forms.myForm,
    fname = form.fname,
    mail = form.mail,
    login = form.sbmt,
    fname__err = form.fname__err,
    pass__err = form.pass__err,
    log_nav = document.querySelector(".login"),
    reg_nav = document.querySelector(".reg"),

    form2 = document.forms.myForm2;

log_nav.addEventListener("click",function(){
    form.style.display = "block";
});
reg_nav.addEventListener("click",function(){
    form2.style.display = "block";
    form.style.display = "none";
});

fname.addEventListener("keyup",function(){
    this.value = fname.value.trim();
    if(this.value.length <= 3){
        fname__err.innerHTML= "errr";
    }
});