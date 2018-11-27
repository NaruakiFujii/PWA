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

//		window.sessionStorage.setItem(['userId'], [inputId]);
//		window.sessionStorage.setItem(['userPass'], [inputPass]);

//		$.cookie("userId", inputId);
//		$.cookie("userPass", inputPass);

//		var myHeaders = new Headers({"X-userData" : data});
//		myHeaders.append("X-userData", data);

		var url = "/PWA/views/timeStamp.html";
		fetch(url, {
			headers: {'X-userData': data}
		}).then(function(response){
			return response.json();
		});

	function checkLogin(data) {
//		var fs = new ActiveXObject("Scripting.FileSystemObject");
//		var file = fs.OpenTextFile("C:\_dev\\testDB.txt");
//
//		var str = file.ReadLine();
		var str = "0001 1";
		var dbData = str.split(' ');

		if (data.id === dbData[0] && data.pass === dbData[1]) {
			return true;
		}
		return false;
	}
});