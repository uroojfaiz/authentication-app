
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged , sendEmailResetPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyD4I1WjVOIxgdgH5tbrSNwnX6hpSbNtXos",
    authDomain: "autentication-app-b2d6e.firebaseapp.com",
    projectId: "autentication-app-b2d6e",
    storageBucket: "autentication-app-b2d6e.firebasestorage.app",
    messagingSenderId: "740668032551",
    appId: "1:740668032551:web:2237b6707323a7d14d3002",
    measurementId: "G-S6P5KZY7VZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // sign up code

  document.getElementById('sign')?.addEventListener('click', ()=>{
    const email = document.getElementById('sign-email').value;
    const password = document.getElementById('sign-password').value;
    createUserWithEmailAndPassword(auth, email, password)
    .then(()=>{
      alert('Sign-Up successfully')
      window.location.href='welcome.html'
    })
    .catch((error)=>{
      alert(error.message)
    })
  })

  // sign in code

    document.getElementById('login')?.addEventListener('click', ()=>{
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
   signInWithEmailAndPassword(auth, email, password)
    .then(()=>{
      alert('Login successfully')
      window.location.href='welcome.html'
    })
    .catch((error)=>{
      alert(error.message)
    })
  })

  // Google sign in code
  document.getElementById('google')?.addEventListener('click', ()=>{
    signInWithPopup(auth, provider)
    .then((result)=>{
      const user = result.user;
      alert('Google Sign-In successfully')
      window.location.href='welcome.html'
    })
    .catch((error)=>{
      alert(error.message)
    })
  })

  // sign out code
  document.getElementById('logout')?.addEventListener('click', ()=>{
    signOut(auth)
    .then(()=>{
      alert('Sign-Out successfully')
      window.location.href='index.html'
    })
    .catch((error)=>{
      alert(error.message)
    })
  })
  // reset password code
  document.getElementById('reset-btn')?.addEventListener('click', ()=>{
    const email = document.getElementById('reset-email').value;
    if(email){
      sendEmailResetPassword(auth, email)
      .then(()=>{
        alert('Password reset email sent!')
        window.location.href='login.html'
      })
      .catch((error)=>{
        alert(error.message)
      })
    
    } })


  //show user email
  onAuthStateChanged(auth, (user)=>{
    if(user){
      document.getElementById('user-email').innerText = user.email;
    }

  })