document.addEventListener("deviceready", onDeviceReady, false);


window.fbAsyncInit = function() {
	FB.init({
	  appId      : '707821006054644',
	  cookie     : true,
	  xfbml      : true,
	  version    : 'v2.8'
	});
};
(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

new Vue({
	el: '#app',
	data: {
		user: null,
	}
});


function onDeviceReady()
{

}

function checkLoginState() {
	FB.getLoginStatus(function(response) {
		console.log(response);
	});
}

var fbLoginSuccess = function (userData)
{
	//console.log(userData);
	FB.api('/me?fields=id,cover,name,first_name,last_name,gender,age_range,link,locale,picture,verified,email,birthday,likes', function(response) {
		console.log(response);
	});
	$('#status').html('Login success');
}

function loginToFacebook()
{
	facebookConnectPlugin.login(["public_profile", "user_birthday", "user_likes", "email"],
		fbLoginSuccess,
		function (err) {
			$('#status').html('Authentication fail');
		}
	);
}

function logout() 
{
	facebookConnectPlugin.logout(function () {
		$('#status').html('Logut is successfull');
	}, function (e) {
		alert('error');
	});
}

function loginStatus()
{
	facebookConnectPlugin.getLoginStatus(fbLoginSuccess, function (err) {
		console.log(err);
	});
}

$( document ).ready(function(){

	$(".button-collapse").sideNav();
})