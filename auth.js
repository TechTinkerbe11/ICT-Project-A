// auth.js
const auth = firebase.auth();
const database = firebase.database();

function signUpUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            database.ref('users/' + user.uid).set({
                username: username,
                email: email,
                phone: phone
            });
            alert("User created and data saved!");
        })
        .catch((error) => {
            alert("Failed to create user: " + error.message);
            console.error("Signup error", error);
        });
}
