  
var firebaseConfig = {
      apiKey: "AIzaSyB8kCWqVhCkc2r--LUTR5nCnhaGMsb1UC0",
      authDomain: "kwitter-23f5c.firebaseapp.com",
      databaseURL: "https://kwitter-23f5c-default-rtdb.firebaseio.com",
      projectId: "kwitter-23f5c",
      storageBucket: "kwitter-23f5c.appspot.com",
      messagingSenderId: "1067874969131",
      appId: "1:1067874969131:web:4e428e9a3458ff478fac6e"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
     

    function addroom()
    {
          roomname=document.getElementById("room_name").value;
          firebase.database().ref("/").child(roomname).update({
                purpose:"adding room name"
          });

          localStorage.setItem("room_name", roomname);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+ Room_names);
row="<div class='room_name' id="+ Room_names + "onclick='redirecttoroomname(this.id)'>#"+ Room_names + "</div> <hr>" ;
document.getElementById("output").innerHTML= row;
      //End code
      });
});

}
getData();


function redirecttoroomname(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

      
}