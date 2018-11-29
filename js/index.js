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

		//session
//		window.sessionStorage.setItem(['userId'], [inputId]);
//		window.sessionStorage.setItem(['userPass'], [inputPass]);

		//cookie
		$.cookie("userData", data);

		////fetchAPI試してみた
		//Ajaxみたいな非同期通信だった…
		//いずれ使える。使ってるとかっこいいかも…
//		var myHeaders = new Headers();
//		myHeaders.append("X-userData", data);
//
//		var url = "/PWA/views/timeStamp.html";
//		fetch(url, {
//			headers: {'X-userData': data}
//		}).then(function(response){
//			return response.json();
//		});
	});

	function checkLogin(data) {
		var url = "/PWA/testDB.txt";
		fetch(url)
			.then(response => {
				var dbData = response.body.getReader();
				if (data.id === dbData[0] && data.pass === dbData[1]) {
					return true;
				}
			})

		//サーバーからデータ取ってきたい
//		var str = "0001 1";
//		var dbData = str.split(' ');
//
//		if (data.id === dbData[0] && data.pass === dbData[1]) {
//			return true;
//		}
		return false;
	}
});