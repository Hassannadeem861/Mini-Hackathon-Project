const firebaseConfig = {
  apiKey: "AIzaSyDfWuDS9ij7LrJ1Dws8n66QPsWNtrNLAh4",
  authDomain: "hackathon-project-84599.firebaseapp.com",
  projectId: "hackathon-project-84599",
  storageBucket: "hackathon-project-84599.appspot.com",
  messagingSenderId: "821886739333",
  appId: "1:821886739333:web:5ce3c52ff7175f1a919aec",
  measurementId: "G-ZGFX508P7P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let signupForm = document.querySelector("#signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let createpassword = document.querySelector("#createpassword").value;


  // // Check if passwords match
  // if (password !== createpassword) {
  //   Swal.fire({
  //     position: "top-end",
  //     icon: "error",
  //     title: "Passwords do not match",
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  //   return; // Exit the function if passwords don't match
  // }

  console.log("firstName: ", firstName);
  console.log("lastName: ", lastName);
  console.log("email: ", email);
  console.log("password: ", password);
  console.log("createpassword: ", createpassword);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.href = "../home.html";
    })
    .catch((error) => {
      console.log(error);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Already Taken",
        showConfirmButton: false,
        timer: 1500,
      });
    });

  //    // Reset the input fields after successful signup
  // document.getElementById("userName").value = "";
  // document.getElementById("email").value = "";
  // document.getElementById("password").value = "";
});
