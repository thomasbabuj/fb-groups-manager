<html>
<head>
  <title>Manage your FB Groups</title>
  <style>
  body.connected #login { display: none; }
  body.connected #logout { display: block; }
  body.not_connected #login { display: block; }
  body.not_connected #logout { display: none; }
</style>

</head>
<body>
	<h1>Manage your FB-Groups</h1>
	<div id="login">
	   <p><button onClick="loginUser();">Login</button></p>
	</div>
	<div id="logout">
	   <p><button  onClick="FB.logout();">Logout</button></p>
	</div>
	<div id="user-info"></div>
	
	<div id="fb-root"></div>
	<script src="js/fb-connect.js"></script>
	<script src="js/fb-graph-call.js"></script>
</body>
</html>