document.querySelector('.center').style.height = `${window.innerHeight}px`;
document.querySelector('.center').overflowY="scroll"

var rowDiv=document.querySelector(".row")
async function getData() {
    var response = await fetch('https://reqres.in/api/users?page=2');
    var fetechedData = await response.json();
    return fetechedData.data;
}

getData().then(data => {
    console.log(data.length)
    for (var item of data) {
        var outerDiv = document.createElement('div');
        outerDiv.classList.add("col-md-4","text-center");
        outerDiv.setAttribute("id","my_div")

        var cardDiv = document.createElement('div');
        cardDiv.classList.add("card","pt-4","px-3","rounded-4");

        var img = document.createElement("img");
        img.classList.add("card-img-top","imgStyle");
        img.setAttribute("src", item.avatar);

        var cardBodyDiv = document.createElement("div");
        cardBodyDiv.classList.add("card-body");

        var name = document.createElement("h6");
        name.classList.add("card-title");
        var nameText = document.createTextNode(`${item.first_name} ${item.last_name}`);
        name.appendChild(nameText);

        var email = document.createElement("p");
        email.classList.add("card-text");
        var emailText = document.createTextNode(item.email);
        email.appendChild(emailText);

        cardBodyDiv.append(name, email);
        cardDiv.append(img,cardBodyDiv);
        outerDiv.appendChild(cardDiv);
        rowDiv.appendChild(outerDiv);
    }
})

// <div class="col-sm-4">
// <div class="card" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     </div>
//   </div>
// </div>