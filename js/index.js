$(function() {
	$('.loginbutton').click(function() {

		var inputId = ($("input[name='id']").val());
		var inputPass = ($("input[name='password']").val());

		var data = {
			id : inputId,
			pass : inputPass
		};
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

var test = new Vue({
	el: '#inputUserData',
	watch: {
		id: function(newVal, oldVal) {
			this.error.id_require = (newVal.length < 1) ? true :false;
		}
	},
	watch: {
		pass: function(newVal, oldVal) {
			this.error.pass_require = (newVal.length < 1) ? true :false;
		}
	},
	data: {
		error: {
			id_require: false,
			pass_require: false
		}
	}
});