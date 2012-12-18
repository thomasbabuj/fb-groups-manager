<!doctype html>
<html lang="en">
<head>
  <meta name="viewport" content="initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
  <title>Manage your FB Groups</title>
  <link href='css/style.css' rel='stylesheet' type='text/css' />
</head>
<body>
	<h1>Manage your FB-Groups</h1>
	<div id="login">
	   <p><button onClick="loginUser();">Login</button></p>
	</div>
	<div id="logout">
	   <p><button  onClick="FB.logout();">Logout</button></p>
	</div>
	<div style="border:1px solid coral; width:300px; height:auto;">
		<div id="user-info"></div>
		<a href="#" onclick="getUserFriends();" id="getfriendslink" style="border:1px solid coral; ">	
		Show My Friends List
		</a>	
	</div>
	
	
    <div id="user-friends" style="width:300px; height:auto; float:left; border:1px solid coral; margin-top:10px;">a</div>
    	
    <div id="user-fb-group-list" style="border:1px solid coral; float:left;"><h2>Group List</h2></div>
	
	<div id="fb-root"></div>
	<script src="js/fb-connect.js"></script>
	<script src="js/fb-graph-call.js"></script>
</body>
</html>