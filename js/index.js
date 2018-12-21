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

//var test = new Vue({
//	el: '#inputUserData',
//	watch: {
//		id: function(newVal, oldVal) {
//			this.error.id_require = (newVal.length < 1 || newVal.length > 5) ? true :false;
//		},
//		pass: function(newVal, oldVal) {
//			this.error.pass_require = (newVal.length < 1) ? true :false;
//		}
//	},
//	data: {
//		id: "",
//		pass: "",
//		error: {
//			id_require: false,
//			pass_require: false
//		}
//	}
//});

var auth = {
	login: function(id, pass){
		if(id === "0001" && pass === "1"){
			window.location.href = '/PWA/views/home';
		}
		else{
			window.alert("wrong ID or PASSWORD");
		}
	}
}

var loginTemplate = `
	<div id="login-template">
		<p class="id">ID：
			<input type="text" placeholder="ログインID" v-model="userId" />
		</p>
		<p class="password">PASSWORD：
			<input type="password" placeholder="パスワード" v-model="pass" />
		</p>
		<p>
			<button v-on:click="login">ログイン(vue.js)</button>
		</p>
	</div>
`

Vue.component('login-form', {
	template: loginTemplate,
	data: function(){
		return {
			userId: '',
			pass: ''
		}
	},
	methods: {
		login: function(){
			auth.login(this.userId, this.pass);
		}
	}
});

new Vue({
	el: "#login"
});