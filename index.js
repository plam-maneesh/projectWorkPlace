class signupForm {
  constructor() {
      this.Users = [];
      this.form = document.getElementById('signupForm');
      this.name = document.getElementById('name');
      this.password = document.getElementById('password');
      this.submit = document.getElementById('submit');

      this.submit.addEventListener('click', (event) => {
          event.preventDefault();
          let nameValue = this.name.value;
          let passwordValue = this.password.value;

          if (nameValue && passwordValue) {
              this.Users.push({ name: nameValue, password: passwordValue });
              console.log("Users array after addition:", this.Users); // Debugging
              this.name.value = ''; 
              this.password.value = ''; 
              this.renderUserList();
          }
      });
  }

  renderUserList() {
      const userList = document.getElementById('listUsers');
      console.log("Users", this.Users); // Corrected to log this.Users
      userList.innerHTML = ''; 
      this.Users.forEach((user) => {
          console.log("Rendering user:", user); // Debugging
          const li = document.createElement('li');
          li.textContent = `Name: ${user.name}, Password: ${user.password}`;
          userList.appendChild(li);
      });
  }
}

const form = new signupForm();
