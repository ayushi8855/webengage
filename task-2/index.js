

async function getitem() {
    try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users`)
        let data = await res.json()
        console.log(data)
        display(data)
    } catch (err) {
        console.log(err)
    }
}
getitem()
function display(data) {

    data.map((e) => {
        var card = document.createElement("div")
        card.setAttribute("id", "car")
        var name = document.createElement("p")
        name.textContent = e.name
        var username = document.createElement('p')
        username.textContent = e.username
        var email = document.createElement("p")
        email.textContent = e.email
        var odd = document.createElement("p")
        odd.textContent = "I am Odd"
        var catch_phase = document.createElement("p")
        catch_phase.textContent = e.company.catchPhrase
        catch_phase.setAttribute("id" ,"catch")
        var city = document.createElement("p")
        city.textContent = "City-" + e.address.city
        city.textContent = `The Zipcode and Geo of cityname ${e.address.city} is: ${e.address.zipcode} and
       ${e.address.geo.lat} , ${e.address.geo.lng}`

        if (e.id % 2 !== 0 &&e.email.includes(".biz")) {
            card.append(odd,name, email)
        }
        else if(e.id %2 !==0){
         card.append(odd)
        }
        else if (e.email.includes(".biz")) {
            card.append( name, email)
        }
        else if (e.address.city == "Aliyaview" || e.address.city == "Howemouth" || e.address.city == "Gwenborough") {
            card.append(name, username, email, city)
        }
        else {
            card.append(name, username, email,)
        }
        card.append(catch_phase)

        document.getElementById("container").append(card)
    })

}
