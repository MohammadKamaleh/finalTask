document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("userForm");
  let cardContainer = document.getElementById("cardContainer");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = form.fname.value;
    let lastName = form.lname.value;
    let email = form.email.value;
    let phone = form.mob.value;
    let dateOfBirth = form.dob.value;
    let gender = form.gender.value;
    let address = form.address.value;

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
  clearBtn.addEventListener("click", function () {
    form.reset();
  });

  function isValidDate(dateString) {
    
    return true; 
  }
});
