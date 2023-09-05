let nameInput = document.getElementById("name");
let updateButton1 = document.getElementById("update1");
let name2Element = document.getElementById("name2");

let surnameInput = document.getElementById("surname");

let surname2Element = document.getElementById("surname2");

let adressInput = document.getElementById("adress");

let adress2Element = document.getElementById("adress2");

let emailInput = document.getElementById("email");

let email2Element = document.getElementById("email2");

let birthdateInput = document.getElementById("birthdate");

let birthdate2Element = document.getElementById("birthdate2");

let phoneNumberInput = document.getElementById("phoneNumber");

let phoneNumber2Element = document.getElementById("phoneNumber2");

let districtInput = document.getElementById("district");

let district2Element = document.getElementById("district2");
let provinceInput = document.getElementById("province");

let province2Element = document.getElementById("province2");

let aboutMeInput = document.getElementById("aboutMe");

let about2Element = document.getElementById("about2");


updateButton1.addEventListener("click", function () {
  let newName = nameInput.value;
  let newSurname = surnameInput.value;
  let newAdress = adressInput.value;
  let newEmail = emailInput.value;

  let newphoneNumber = phoneNumberInput.value;
  let newDistrict = districtInput.value;
  let newProvince = provinceInput.value;
  let newAboutMe = aboutMeInput.value;

  name2Element.innerHTML = newName;
  surname2Element.innerHTML = newSurname;
  adress2Element.innerHTML = newAdress + newDistrict + newProvince;
  email2Element.innerHTML = newEmail;
  
  phoneNumber2Element.innerHTML = newphoneNumber;
  about2Element.innerHTML = newAboutMe;
});


  deleteProjectButton.addEventListener("click", function () {
      
      const projectDivs = document.querySelectorAll(".item");

  
      if (projectDivs.length > 0) {

          const lastProjectDiv = projectDivs[projectDivs.length - 1];
          lastProjectDiv.remove();
      }
  });



    const infoDivs = document.querySelectorAll('.info');
    const h1Elements = document.querySelectorAll('.info h1');


    infoDivs.forEach(div => {
        const elementsToHide = Array.from(div.children).filter(child => child.tagName !== 'H1');
        elementsToHide.forEach(element => {
            element.style.display = 'none';
        });
    });


    h1Elements.forEach(h1 => {
        h1.addEventListener('click', () => {
            const parentDiv = h1.parentElement;
            const elementsToToggle = Array.from(parentDiv.children).filter(child => child !== h1);
            elementsToToggle.forEach(element => {
                if (element.style.display === 'none') {
                    element.style.display = 'block';
                } else {
                    element.style.display = 'none';
                }
            });
        });
    });

const fileInput = document.querySelector('input[type="file"]');
const avatarImage = document.getElementById("pp");

fileInput.addEventListener("change", function () {
    const selectedFile = fileInput.files[0]; 

    
    if (selectedFile && selectedFile.type.startsWith("image/")) {
        const reader = new FileReader();

        
        reader.onload = function (e) {
            const imageUrl = e.target.result;
            avatarImage.src = imageUrl; 
        };

       
        reader.readAsDataURL(selectedFile);
    } else {
        alert("Lütfen geçerli bir resim dosyası seçin.");
    }
});


    function toggleHalfDiv() {
        let halfDiv = document.querySelector('.half');
        if (halfDiv.style.display === 'block' || halfDiv.style.display === '') {
            halfDiv.style.display = 'none';
        } else {
            halfDiv.style.display = 'block';
        }
    }

