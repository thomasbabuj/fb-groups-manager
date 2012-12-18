 

 (function() {
    var e = document.createElement('script'); e.async = true;
        e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
        document.getElementById('fb-root').appendChild(e);
 }());

 window.fbAsyncInit = function() {
    FB.init({ appId: '373644082722897', 
      status: true, 
      cookie: true,
      xfbml: true,
      oauth: true});

      FB.Event.subscribe('auth.authResponseChange', handleResponseChange);  
      FB.Event.subscribe('auth.logout', 'handleLogout');
   
 };

function handleLogout(response){
  alert ( response);
}

function handleResponseChange(response) {
   document.body.className = response.authResponse ? 'connected' : 'not_connected';

   if (response.authResponse) {
     updateUserInfo(response);
   } 

 }