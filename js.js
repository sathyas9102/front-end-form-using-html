//Form 1
   var uname = document.forms["myform"] ["uname"].value;
   var upswd = document.forms["myform"] ["upswd"].value;

   if(uname==null || uname==""){
       document.getElementById("errorBox").innerHTML="enter the user name";
       returnfalse;
   }
   if(upswd==null || upswd==""){
       document.getElementById("erroeBox").innerHTML="enter the passwotrd";
       returnfalse;
   }

   if( uname!=''  && upswd!= '')
   {
       alert("Login successfully");
   }

   //Form 2

   function vfun1(){
       var uname1 = document.forms["myform2"] ["uname1"].value;
       var email1 = document.forms["myform2"] ["email1"].value;
       var upswd1 = document.forms["myform2"] ["upswd1"].value;
       var upswd2 = document.forms["myform2"] ["upswd2"].value;

       if(uname1==null || uname1==""){
           document.getElementById("errorBox").innerHTML="enter the username";
           returnfalse;
       }

       if(email1==null || email1==""){
           document.getElementById("erroeBox").innerHTML="enter the email";
           returnfalse;
       }

       if(upswd1==null || upswd1==""){
           document.getElementById("errorBox").innerHTML="enter the password";
           returnfalse;
       }

       if(upswd2==null || upswd2==""){
           document.getElementById("errorBox").innerHTML="enter the password";
           returnfalse;
       }

       if(upswd1!=upswd2)
    {
        document.getElementById("errorBOX").innerHTML="password dont match";
        returnfalse;
    }

    if(uname1!='' && upswd1!='' && upswd2!='' && email1!='' && upswd1==upswd2)
        alert("Register successfull");

        
       }
