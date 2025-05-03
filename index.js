class signupForm{


constructor(){

  this.Users = [];
 this.form = document.getElementById('signupForm');
 this.name = document.getElementById('name');
 this.password = document.getElementById('password');
this.submit = document.getElementById('submit');
const userList = document.getElementById('userList');

  this.name.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    userList.innerHTML += `<li>${inputValue}</li>`;
    console.log("Name input value:", inputValue);

  
  });

  this.password.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    userList.innerHTML += `<li>${inputValue}</li>`;
  
    console.log("Password input value:", inputValue);
  }
  );

  this.form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Form submitted");
  });
  this.submit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Submit button clicked");
  }
  );

  this.submit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Submit button clicked");
  }
  );
 
  this.submit.addEventLisetener('click', (event) =>{

   event.preventDefault();

   this.Users.push({
      name: this.name.value, 
      password: this.password.value,
   });

   console.log("User array:", this.Users);
   userList.innerHTML = `<li>name: ${this.name.value}, Password: ${this.password.value}</li>`;
     
  })
}



}


const form = new signupForm();
// const form = new signupForm();

console.log(form);