function date(){
				var a = document.getElementById("login");
	{a.value="processing";setTimeout(function(){a.value="login"},1000)}
}
function validate(){
	var a = document.getElementById("username");
	var b = document.getElementById("password");
	var c = document.getElementById("login");
	var d = document.getElementById("noti").style;
		var e = document.getElementById("xnoti").style;
			var f= document.getElementById("cnoti").style;
	if(a.value=="user"&& b.value=="pass")
{d.display="block";setTimeout(function(){location.href="side hustle.html"},1500);}
else if(a.value!=="user"){e.display="block";setTimeout(function(){e.display="none"},1000);}
else{f.display="block";setTimeout(function(){f.display="none"},1000);}
}
function switch1(){
	var a = document.getElementById("eye");
	var b = document.getElementById("password");
	if(a.className=="fa fa-eye-slash")
	  {a.className="fa fa-eye";}
else{a.className="fa fa-eye-slash"};
 if(b.type=="password")
   {b.type="text";}
else{b.type="password"}
}
function shrink(){
	document.getElementById("so").style.fontSize="0px";
}
function myClick(){setTimeout(function(){
	document.getElementById("hide").style.display="block"
},1000)}
