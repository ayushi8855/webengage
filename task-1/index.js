var btn = document.querySelector("form").addEventListener("submit",submit)

function submit(event){
    event.preventDefault()
    var email= document.getElementById('email').value
    var mobile=document.getElementById('mobile').value
    var country=document.getElementById("country").value
    var obj={
        email_1:email,
        number:mobile,
        country_code:country
    }
    var mydata= JSON.stringify(obj)
   localStorage.setItem("data", mydata);
   window.location="thank.html"
  
}
