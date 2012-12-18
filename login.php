<?php
   require_once ("src/facebook.php");

   $config = array(
   		'appId' => '373644082722897',
   		'secret' => 'ef582763e8574620f8b17672bc7eebe8'
   );

   $facebook = new Facebook($config);
   

   $login_url = $facebook->getLoginUrl();
   echo 'Please <a href="'. $login_url . '">Login</a>';
   
?>