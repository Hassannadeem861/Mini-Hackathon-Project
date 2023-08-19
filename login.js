
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


 let loginForm = document.querySelector("#loginForm");

 loginForm.addEventListener("submit", (event) => {
  
    event.preventDefault();

    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value

//     // Check if passwords match
//   if (password !== createpassword) {
//     Swal.fire({
//       position: "top-end",
//       icon: "error",
//       title: "Passwords do not match",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//     return; // Exit the function if passwords don't match
//   }
   

    console.log("email: ", email)
    console.log("password: ", password)

   // firebase

   firebase
   .auth()
   .signInWithEmailAndPassword(email, password)
   .then((userCredential) => {
       console.log("Login successful");
       Swal.fire({
           icon: 'success',
           title: 'Logged In',
           text: 'Login Successfull',
           confirmButtonColor: "#252525"
       })
       window.location.href = "home.html";
   })
   .catch((error) => {
       console.log("Login error:", error);
       Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Invalid email or password. Please enter correct credentials",
        showConfirmButton: false,
        timer: 1500,
      });
           // alert("Invalid email or password. Please enter correct credentials.");
   });

})



  




