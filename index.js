class signupForm {


  constructor() {

    this.Users = [];
    this.form = document.getElementById('signupForm');
    this.name = document.getElementById('name');
    this.password = document.getElementById('password');
    this.submit = document.getElementById('submit');
    const userList = document.getElementById('userList');

    this.name.addEventListener('input', (event) => {

      event.preventDefault(event);
      let nameValue = event.target.value; // get the value of the name input


    });


    this.password.addEventListener('input', (event) => {

      let passwordValue = event.target.value; // get the value of the password input

    });
  

    this.submit.addEventListener('click', (event) => {
      event.preventDefault(event);
      let nameValue = this.name.value; // get the value of the name input
      let passwordValue = this.password.value; // get the value of the password input

      if (nameValue && passwordValue) {
        this.Users.push({ name: nameValue, password: passwordValue })
        this.name.value = '';
        this.password.value = '';
        this.renderUserList();
        }
      
      }
    );

  }




  renderUserList() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // clear the list before rendering
    this.Users.forEach((user) => {
      const li = document.createElement('li');
      li.textContent = `Name: ${user.name}, Password: ${user.password}`;
      userList.appendChild(li);
    });
  }
}

const form = new signupForm();