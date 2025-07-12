const username = prompt("Ismingizni kiriting");
const userId = +prompt("Space idingizni kiriting");
const userPassword = prompt("Space passwordingizni kiriting");

const Space = {
    name:username,
    id:userId,
    password:userPassword
}

console.log(Space);