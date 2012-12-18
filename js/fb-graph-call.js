function loginUser() {    
     FB.login(function(response) { }, {scope:'email,friends_location,friends_groups'});     
}

function updateUserInfo(response) {
     FB.api('/me', function(response) {
       document.getElementById('user-info').innerHTML = '<img src="https://graph.facebook.com/' + response.id + '/picture">' + response.name;
     });
}

function getUserFriends() {
	FB.api('/me/friends?fields=name,picture,location', function(response){
       

        if (!response.error) {
        	var markup = '';
        	var friends = response.data;

        	for( var i=0; i<friends.length; i++) {
        		var friend = friends[i];
        		var fri_pic = friend.picture.data;

        		console.log ( friend );

        		markup += '<img src="'+fri_pic.url  + '"> <br />' +friend.name + '<br >' + '<a href="#" onclick="getGroupList( '+ friend.id +');">My Groups List</a> <br /><br />';
        	}

        	document.getElementById("user-friends").innerHTML = markup;
        }
	});
}

function getGroupList(id) {
     FB.api('/'+id+'/?fields=groups,about', function(response) {

     	if ( response.groups ) {
     	 var groupslist = response.groups.data;
      	 var markup = '';
      	 for(var i=0; i<groupslist.length; i++) {
      	 	var group = groupslist[i];

      	 	markup += '<h3>'+ group.name+'</h3>';

      	 }

      	 document.getElementById("user-fb-group-list").innerHTML = markup;
     	} else {
     	  document.getElementById("user-fb-group-list").innerHTML = '<h2><span style="color:red">Sorry, No Groups!</span></h2>';
     	}
      	 
     });
}