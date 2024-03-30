let form = document.getElementById("userForm");
let cardContainer = document.getElementById("cardContainer");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let firstName = event.target.fname.value;
  let lastName = event.target.lname.value;
  let email = event.target.email.value;
  let phone = event.target.mob.value;
  let dateOfBirth = event.target.dob.value;
  let gender = event.target.gender.value;
  let address = event.target.address.value;

  if (!firstName || !lastName || !email || !phone || !dateOfBirth || !gender || !address) {
    alert("Please fill in all required fields.");
    return; 
  }

  if (!isValidDate(dateOfBirth)) {
    alert("Please enter a valid date of birth.");
    return; 
  }


  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${firstName} ${lastName}</h5>
      <p class="card-text">Email: ${email}</p>
      <p class="card-text">Phone: ${phone}</p>
      <p class="card-text">Date of Birth: ${dateOfBirth}</p>
      <p class="card-text">Gender: ${gender}</p>
      <p class="card-text">Address: ${address}</p>
    </div>
  `;


  cardContainer.appendChild(card);

  form.reset();
});

let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
  form.reset();
});

