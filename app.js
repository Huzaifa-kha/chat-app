function StartChat(id){
    document.getElementById('chatpanel').removeAttribute('style');
    document.getElementById('divStart').setAttribute('style','display:none')

    hideChatList();
}




function showChatList(){

    document.getElementById('side-1').classList.remove( 'd-none' ,'d-md-block');
    document.getElementById('side-2').classList.add('d-none');

}
function hideChatList(){

    document.getElementById('side-1').classList.add('d-none' ,'d-md-block');
    document.getElementById('side-2').classList.remove('d-none');

}




function OnKeyDown(){
    document.addEventListener('keydown',function(key){
if (key.which === 13){
SendMessage();
}
    });

}
function SendMessage(){
    var message = ` <div class="row justify-content-end">
                    
    <div class="col-6 col-sm-7 col-md-7">
      <p class="tex ">${document.getElementById('txtMessages').value} <span class="time">11:30PM</span></p>
    </div>
    <div class="col-2 col-sm-1 col-md-1">
      <img src="mages/pp.png" alt="" class="chat">
    </div>
  </div>
`   ;    


document.getElementById('messages').innerHTML += message;
document.getElementById('txtMessages').value ='';
document.getElementById('txtMessages').focus();

document.getElementById('messages').scrollTo(0,document.getElementById('messages').clientHeight)
    
}


/////////////////////////////////////////////



 const facebook_login = () =>{
  provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
 }

 function signOut(){
   firebase.auth().signOut();
 }

 function onFirebaseStateChanged(){
   firebase.auth().onAuthStateChanged(onStateChanged);
 }

 function  onStateChanged(user){
   if(user){
     //alert(firebase.auth().currentUser.email + '\n' + firebase.auth().currentUser.displayName);

     document.getElementById('imgprofile').src = firebase.auth().currentUser.photoURL;
     document.getElementById('imgprofile').title = firebase.auth().currentUser.displayName ;

   }
 }












 ///////////////////////////////

onFirebaseStateChanged();