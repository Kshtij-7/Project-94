/*var firebaseConfig = {
      apiKey: "AIzaSyCkvxA7TnTBO3Nkv_7JgOH_eRHGEkdU5o0",
      authDomain: "kwitter-e004f.firebaseapp.com",
      databaseURL: "https://kwitter-e004f-default-rtdb.firebaseio.com",
      projectId: "kwitter-e004f",
      storageBucket: "kwitter-e004f.appspot.com",
      messagingSenderId: "628047925960",
      appId: "1:628047925960:web:a5904b57e48cd8e5000bfd",
      measurementId: "G-6C5SFXBD0D"
};*/

firebase.initializeApp({
      apiKey: "AIzaSyBQmgULsfD4tSTbBgI7kkE5m7i2EJkcqvs",
      authDomain: "letschat-d2ecf.firebaseapp.com",
      projectId: "letschat-d2ecf",
      storageBucket: "letschat-d2ecf.appspot.com",
      messagingSenderId: "233903248193",
      appId: "1:233903248193:web:7997f493fa431fe93f87c0",
      measurementId: "G-KE4813ZD7M",
      databaseURL: "https://letschat-d2ecf-default-rtdb.firebaseio.com/"
});

var username = localStorage.getItem("Username")
document.getElementById("welcome").innerHTML = `Welcome ${username}!`

function createRoom() {
      roomname = document.getElementById("roomname").value;
    //  document.getElementById("roomname").innerHTML = ""
      firebase.database().ref("/").child(roomname).update({
            purpose: "adding room name"
      });
      localStorage.setItem("roomname", roomname);
      //window.location = "kwitter_page.html";
}

/*function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();*/


function logout() {
      localStorage.removeItem("Username") 
      window.location = "index.html"
}
