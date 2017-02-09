document.addEventListener("deviceready", onDeviceReady, false);


window.fbAsyncInit = function() {
	FB.init({
	  appId      : '707821006054644',
	  cookie     : true,
	  xfbml      : true,
	  version    : 'v2.8'
	});
	checkLoginState();
};
(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var vm = new Vue({
	el: '#app',
	data: {
		user: {},
		connected: false,
	},
	methods: {

	},
});


function onDeviceReady()
{

}

function checkLoginState() {
	FB.getLoginStatus(function(response) {
		if(response.status == "connected") {
			FB.api('/me?fields=id,name,cover,first_name,last_name,gender,age_range,link,locale,picture,verified,email,birthday', function(response) {
				console.log(response);
				vm.user = {name: response.name, email: response.email, first_name: response.first_name, last_name: response.last_name, gender: response.gender, bday: response.birthday, facebook_id: response.id};
			});
			vm.connected = true;
		}
	});
}

var fbLoginSuccess = function (userData)
{
	//console.log(userData);
	FB.api('/me?fields=id,cover,name,first_name,last_name,gender,age_range,link,locale,picture,verified,email,birthday,likes', function(response) {
		console.log(response);
	});
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