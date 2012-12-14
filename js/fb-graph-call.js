function loginUser() {    
     FB.login(function(response) { }, {scope:'email'});     
}