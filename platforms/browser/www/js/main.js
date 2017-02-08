document.addEventListener("deviceready", onDeviceReady, false);

if (window.cordova.platformId == "browser") {
    facebookConnectPlugin.browserInit("707821006054644");
}

function onDeviceReady()
{

}

function fbLoginSuccess()
{
	$('#status').html('Login success');
}

function loginToFacebook()
{
	facebookConnectPlugin.login(["public_profile"],
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

$( document ).ready(function(){
	$(".button-collapse").sideNav();
})