const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll (".nav-link").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    hamburger.classList.remove("active");
}))


document.getElementById("forms").addEventListener ("submit", function(event)
{
    event.preventDefault()
    let name=document.getElementById ("inputname")
    let email=document.getElementById("inputemail")
    let phone=document.getElementById("inputphone")
    let preferences=document.getElementById("inputpreferences")
    let checkbox=document.getElementById ("checkbox")
    let temp=0;
    if (name.value.length<5)
    {
       temp=0;
       alert("Name must be more than or equal to 5 characters.");
       return;     
    }
    else if (name.value>=5)
    {
        temp=1;
    }
    if (!email.value.endsWith("@gmail.com"))
    {
        temp=0;
        alert("The email must be gmail.")
        return;
     
    }
    else if (email.value.endsWith("@gmail.com"))
    {
        temp=1;
    }
    if (!phone.value.startsWith("+62"))
    {
        temp=0;
        alert("The phone number must start with +62.")
        return;
      
    }
    else if (phone.value.startsWith("+62"))
    {
        temp=1;
      
    }
    if (preferences.value=="")
    {
        temp=0;
        alert ("Please choose your ramen preference!")
        return;
        
    }
    else if (!preferences.value=="")
    {
      temp=1;
        
    }
   
    if (!checkbox.checked)
    {
        temp=0;
        alert("Must agree to receive the newsletter.")
        return;
    }
    else if (checkbox.checked)
    {
        temp=1;
    }
    if (temp==1)
    {
        document.getElementById("forms").submit();
    }
   
})

