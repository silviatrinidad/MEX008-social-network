//Integrando configuracion de proyecto en firebase
const firebaseConfig = {
  apiKey: "AIzaSyAfAooPNMQOUS3UMPcAUDQHBXM64dAuBK0",
  authDomain: "hopaki-prueba.firebaseapp.com",
  databaseURL: "https://hopaki-prueba.firebaseio.com",
  projectId: "hopaki-prueba",
  storageBucket: "",
  messagingSenderId: "967562359456",
  appId: "1:967562359456:web:8517811f94b84354"
};
// Inicializando Firebase
firebase.initializeApp(firebaseConfig);

//comprobar inicio de sesion anteriormente con fb
const comprobarSesionFb= () => {
  const prvider = new firebase.auth
}




//registro por medio de fb
const sessionFb= () => {
  //agregamos la instancia de objeto de proveedor de FB
  const provider = new firebase.auth.FacebookAuthProvider();
  //acceder con su cuenta, por medio de un popup
  firebase.auth().signInWithPopup(provider).then(function(result) {
      alert('exito');
      console.log('result');
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
      alert('error');
      console.log(error);
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });


}
          

//Función registrar usuario con correo y contraseña
const registrar = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

      if (errorCode === "auth/invalid-email") {
        alert('Correo inválido: Ingresa la dirección completa');
      } else if (errorCode === "auth/weak-password") {
        alert('La constraseña debe tener 6 caracteres mínimo');
      } else if (errorCode === "auth/email-already-in-use") {
        alert('La dirección de correo electrónico ya fué registrada');
      }
    });
    location.hash = "#/inicio"
};

console.log(registrar);

//Funcion para ingreso
function ingreso() {
  const email2 = document.getElementById("email2").value;
  const password2 = document.getElementById("password2").value;
  firebase.auth().signInWithEmailAndPassword(email2, password2)
    .catch(function (error) {
      //Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}


//Observador de la autenticación  
const observador = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("existe usuario activo");
      //User is signed in.
      const displayName = user.displayName;
      const email = user.email;
      console.log("user");
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
      type = "module"
      location.hash = '#/inicio'
    } else {
      //User is signed out.
      console.log("no existe usuario activo");
    }
  });
};

observador();

function aparece() {
  var contenido = document.getElementById("content");
  contenido.innerHTML = "Solo lo ve usuario activo";
  contenido.innerHTML = `<p> HOLA!!</p>
    <button onclick="cerrar()">Cerrar Sesión</button>`
};

function cerrar() {
  firebase.auth().signOut()
    .then(function () {
      console.log("saliendo");
    })
    .catch(function (error) {
      console.log(error);
    })
};

function cerrar() {
  firebase.auth().signOut()
    .then(function () {
      console.log("saliendo");

    })
    .catch(function (error) {
      console.log(error);
    })
}