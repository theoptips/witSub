(function(){
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD1FmIA5edpRxTsfvoakTTf5hNtiEgNm5U",
    authDomain: "rocketjournal-b9099.firebaseapp.com",
    databaseURL: "https://rocketjournal-b9099.firebaseio.com",
    projectId: "rocketjournal-b9099",
    storageBucket: "rocketjournal-b9099.appspot.com",
    messagingSenderId: "619223257171",
    appId: "1:619223257171:web:2ee975ca9b83e2395636a6",
    measurementId: "G-HE0EC0Q2PH"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth = firebase.auth()
  //console.log(firebase)


  const signUpForm = document.querySelector('#signup-form');

  //Add an event listener...this method takes two parameters - name of event and a callback function
  signUpForm.addEventListener('submit', (e)=>{

      //prevent the forms default action of refreshing the page
      e.preventDefault();

      //create constants to store values from the form
      const email = signUpForm['email'].value;
      const password = signUpForm['password'].value;

      //signup the user with email and password
      auth.createUserWithEmailAndPassword(email, password).then(userCredential => {

          //need to clear the form
          signUpForm.reset();

      })

  });

    //const dbRefObject = firebase.database().ref().child("object");
    //console.log(dbRefObject.child("monday").value())
    //dbRefObject.on('value', snap => console.log(snap.val())); // synchronize real time, change on event value
    //console.log(firebase.database().ref('theoptips'))
    //const dbRefObject = firebase.database().ref('theoptips');
    
    //console.log('hi');
    // auth

  //window.prompt('Please provide your email for confirmation');

  const logout = document.querySelector('#signout');

  //add an event addEventListener
      logout.addEventListener('click', (e)=>{
          e.preventDefault();
          auth.signOut().then(()=>{
              
          });
      });

  auth.onAuthStateChanged(user =>{
      if(user){
          console.log("signed in");
          //fs.collection('posts').get().then(snapshot => {
          //    setupPosts(snapshot.docs);
          //});
      }else{
          console.log("user signed out")
          //setupPosts([]);
      }
  });
  const loginForm = document.querySelector('#signin-form');
  loginForm.addEventListener('submit', (e)=>{

      //prevent the forms default action of refreshing the page
      e.preventDefault();

      //create constants to store values from the form
      const email = loginForm['email'].value;
      const password = loginForm['password'].value;

      //signup the user with email and password
      auth.signInWithEmailAndPassword(email, password).then(userCredential => {

          //need to clear the form
          const modal = document.querySelector('#modal-login');
          loginForm.reset();
          

      })

  });

  // (function (){
  // const q= encodeURIComponent('set watch tv to Monday');
  // console.log(q)
  // console.log('hi')
  // //const uri = 'https://api.wit.ai/message?v=20200513&q='+
  // //const uri = 'https://api.wit.ai/message?v=20200513&q='+q;
  // const uri = 'https://api.wit.ai/message?v=20200513&q='+q;
  // //const uri = 'https://api.wit.ai/message?v=20200513='+q;
  // const auth = 'Bearer   ' +'SV7LOAGAZKEPYWBGGM6RRQPWGZMXFO3V';
  // fetch(uri, {headers: {Authorization: auth}})
  // .then(res=> res.json())
  // .then(res=>console.log(res))
  // })()
  // after bear there needs to be three spaces
  

function witAPI(message){

  //const q= encodeURIComponent('set watch tv to Monday');
    const q= encodeURIComponent(message);
    //console.log(q)
    //console.log('hi')
    //const uri = 'https://api.wit.ai/message?v=20200513&q='+
    //const uri = 'https://api.wit.ai/message?v=20200513&q='+q;
    const uri = 'https://api.wit.ai/message?v=20200513&q='+q;
    //const uri = 'https://api.wit.ai/message?v=20200513='+q;
    const auth = 'Bearer   ' +'SV7LOAGAZKEPYWBGGM6RRQPWGZMXFO3V';
    fetch(uri, {headers: {Authorization: auth}})
    .then(res=> res.json())
    .then(
      res=>{
        //console.log(res);  
        // log wit response
        document.querySelector("#witresult").textContent= '<p>'+JSON.stringify(res)+'</p>';
        let i = res.intents[0].name;
        let wDay = res.entities["wit$datetime:datetime"][0].body;
        //day.charAt(0).toUpperCase() + day.slice(1)
        wDay = wDay.charAt(0).toUpperCase() + wDay.slice(1)
        let mBody = res.entities["wit$message_body:message_body"][0].body;
        console.log('Intent  '+ i );
        console.log('DateTime  '+ wDay);
        console.log('Messages  '+ mBody);
        const dbFirestore = firebase.firestore()
        //let currentUserId;
        const currentUserId = sessionStorage.getItem('currentUserId');
        let temp;


        if (i=='add'){
        console.log('in add');
        console.log('Day'+wDay + currentUserId);
        temp = dbFirestore.collection(currentUserId).doc(wDay);
        console.log(temp);


        temp.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());

                tMsg = doc.data().messages;
                tMsg.push(mBody);
                let docData = doc.data();
                docData.messages = tMsg
                temp.set(docData)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });




        }; // end of add

        if (i=='remove'){


          /// 
          console.log('in remove');
          temp = dbFirestore.collection(currentUserId).doc(wDay);
          //mBody= res.entities["wit$ordinal:ordinal"][0].body;
          mBody= res.entities["wit$ordinal:ordinal"][0].value;
          //console.log(mBody);
          const q= encodeURIComponent(mBody);
          const uri = 'https://api.wit.ai/message?v=20200513&q='+q;
          const auth = 'Bearer   ' +'SV7LOAGAZKEPYWBGGM6RRQPWGZMXFO3V';
          fetch(uri, {headers: {Authorization: auth}})
          .then(res=> res.json())
          .then(res=>console.log(res));
          temp.get().then(
            function(doc) {
              if (doc.exists) {
                //console.log("Document data:", doc.data());
                tMsg = doc.data().messages;
                let val = mBody-1;
                console.log(val)
                tMsg.splice(val, 1);
                let docData = doc.data();
                docData.messages = tMsg;
                temp.set(docData);
                } 
              else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }}); // end of small then


        
        }; // end of remove
   
      }); // end of .then res

}

  const witForm = document.querySelector('#witapi');

  witForm.addEventListener('submit', (e)=>{

      //prevent the forms default action of refreshing the page
      e.preventDefault();

      //create constants to store values from the form
      const message = witForm['message'].value;

      witAPI(message);

  });



  var actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    url: 'http://localhost:8000/',

  };
  // Confirm the link is a sign-in with email link.
  if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    var email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt('Please provide your email for confirmation');
    }
    // The client SDK will parse the code from the link for you.
    firebase.auth().signInWithEmailLink(email, window.location.href)
      .then(function(result) {
        // Clear email from storage.
        window.localStorage.removeItem('emailForSignIn');
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
      })
      .catch(function(error) {
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
        console.log(error)
      });

    
}

})();