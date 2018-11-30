$(function() {
	$('.loginbutton').click(function() {

		var inputId = ($("input[name='id']").val());
		var inputPass = ($("input[name='password']").val());

		var data = {
			id : inputId,
			pass : inputPass
		}
		var loginStatus = checkLogin(data);

		if (!loginStatus) {
			location.href = location.href;
		}

		//cookie
		$.cookie("userData", JSON.stringify(data));

	});

	function checkLogin(data) {
		//サーバーからデータ取ってきたい
		var str = "0001 1";
		var dbData = str.split(' ');

		if (data.id === dbData[0] && data.pass === dbData[1]) {
			return true;
		}
		return false;
	}
});

var here = "/PWA";
var there = "/PWA/views/timeStamp";

new Vue({
	el: '.inputUserData',
	routes: [
		{ path: here, redirect: to => {
			checkUser: function(){
				if(this.id == 0001 && this.pass == 1){
					return here;
				}
				return there;
			}
		}}
	]
})