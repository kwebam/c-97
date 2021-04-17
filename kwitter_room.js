



var firebaseConfig = {
      apiKey: "AIzaSyA14y8L5LGu-IhONepHqb-iV8HnAXdVI94",
      authDomain: "amol3-e705e.firebaseapp.com",
      databaseURL: "https://amol3-e705e-default-rtdb.firebaseio.com",
      projectId: "amol3-e705e",
      storageBucket: "amol3-e705e.appspot.com",
      messagingSenderId: "366399071411",
      appId: "1:366399071411:web:721a4618d54034ef3dfcc6"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name"); 
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 
    function addRoom() { 
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"; 
      }

function getData() { 
 firebase.database().ref("/").on('value', 
 function(snapshot) { 
       document.getElementById("output").innerHTML = ""; 
       snapshot.forEach(function(childSnapshot) 
       { 
             childKey = childSnapshot.key;
 Room_names = childKey; 
 console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
  document.getElementById("output").innerHTML += row;
  }); 
  });
  }
  getData(); 
  function redirectToRoomName(name) 
  {
  console.log(name); 
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
 } 
 function logout()
  {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
window.location = "index.html"; 
}
