var form = document.forms.myForm,
	fname = document.getElementById("fname"),
		fname__err = document.getElementById("fname__err"),
	lname = document.getElementById("lname"),
 	prog = document.getElementById("prog"),
 	lang = document.getElementById("lang__hidden");
 	lang__err = document.getElementById("lang__err");


form.addEventListener("onsubmit",function(e){
	e.preventDefault();

});

fname.addEventListener("keyup",function(){
	if(this.value.length <= 3){
		fname__err.hidden = false;
		fname__err.innerHTML = "Name Shoud be longer then 3 chars";
	}else{

		fname__err.hidden = true;
	}
});
lname.addEventListener("keyup",function(){
	if(this.value.length <= 3){
		lname__err.hidden = false;
		lname__err.innerHTML = "Last name Shoud be<br /> longer then 3 chars";
	}else{

		lname__err.hidden = true;
	}
});

prog.addEventListener("change",function(){
	 if(this.value === "y"){
	 	lang.hidden = false;
	 	var lang__select  =  document.getElementById("lang");
	 	console.log(lang__select.value);
	 	lang__select.addEventListener("change",function(){
	 		if(this.value === "select"){
	 			lang__err.innerHTM = "You should choose programming language";
	 		}else{

	 		}
	 	});
	}else{
		lang.hidden = true;
	}
	console.log(this.value);
});