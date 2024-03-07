const passwordbox = document.getElementById("password");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const character = "!~#$%^&*()_+";
const allchars = "1heg2itr@%^&%3";

function createpassword() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += character[Math.floor(Math.random() * character.length)];
  while (length > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
  passwordbox.value = password;
}

document.querySelector('.fa-copy').addEventListener('click', () => {
  passwordbox.select();
  document.execCommand('copy');
  alert('Password copied to clipboard');
});
