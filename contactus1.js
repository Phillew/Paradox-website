function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["Contactus1.html"].elements.length; 
        loopCounter++) {
        if (document.forms["Contactus1.html"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["Contactus1.html"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function resetForm() {
    clearErrors();
    document.forms["Contactus1.html"]["name"].value = "";
    document.forms["Contactus1.html"]["email"].value = "";
	document.forms["Contactus1.html"]["phone"].value = "";
	document.forms["Contactus1.html"]["contact"].value = "";
	document.forms["Contactus1.html"]["info"].value = "";
	document.forms["Contactus1.html"]["choice01"].value = "";
	document.forms["Contactus1.html"]["choice02"].value = "";
	document.forms["Contactus1.html"]["bestDays"].value = "";
	document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["Contactus1.html"]["name"].focus();
}


function validateItems() {
    clearErrors();
    var name = document.forms["Contactus1.html"]["name"].value;
    var email = document.forms["Contactus1.html"]["email"].value;
	var phone = document.forms["Contactus1.html"]["phone"].value;
	var contact = document.forms["Contactus1.html"]["contact"].value;
	var info = document.forms["Contactus1.html"]["info"].value;
	var choice01 = document.forms["Contactus1.html"]["choice01"].value;
	var choice02 = document.forms["Contactus1.html"]["choice02"].value;
	var bestDays = document.forms["Contactus1.html"]["bestDays"].value;
		
    if (name == "" || isNaN(name)) {
        alert("valid name.");
        document.forms["Contactus1.html"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["Contactus1.html"]["name"].focus();
        return false;
    }
   if (email == "" || isNaN(email)) {
       alert("email must be filled in with a email.");
       document.forms["Contactus1.html"]["email"]
          .parentElement.className = "form-group has-error"
       document.forms["Contactus1.html"]["email"].focus();
       return false;
   }   
	if (phone == "" || isNaN(phone)) {
       alert("phone must be filled in with a number.");
       document.forms["Contactus1.html"]["phone"]
          .parentElement.className = "form-group has-error"
       document.forms["Contactus1.html"]["phone"].focus();
       return false;   
	}  
	 if (contact == "" || isNaN(contact)) {
       alert("select an option");
       document.forms["Contactus1.html"]["contact"]
          .parentElement.className = "form-group has-error"
       document.forms["Contactus1.html"]["contact"].focus();
       return false;  
	 }   
	if (info == "" || isNaN(info)) {
       alert("info must be filled in with a text");
       document.forms["Contactus1.html"]["info"]
          .parentElement.className = "form-group has-error"
       document.forms["Contactus1.html"]["info"].focus();
       return false;   
	   
	}   
	if (choice01 == "" || isNaN(choice01)) {
       alert("check a box");
       document.forms["Contactus1.html"]["choice01"]
          .parentElement.className = "form-group has-error"
       document.forms["Contactus1.html"]["choice01"].focus();
       return false; 
	}   
	if (choice02 == "" || isNaN(choice02)) {
       alert("check a box");
       document.forms["Contactus1.html"]["choice02"]
          .parentElement.className = "form-group has-error"
       document.forms["Contactus1.html"]["choice02"].focus();
       return false;
	}
	if (bestDays == "" || isNaN(bestDays)) {
       alert("check a box");
       document.forms["Contactus1.html"]["bestDays"]
          .parentElement.className = "form-group has-error"
       document.forms["Contactus1.html"]["bestDays"].focus();
       return false;
	   
   }
   
}