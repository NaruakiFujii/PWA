$(function() {
	$('.loginbutton').click(function() {

		var inputId = ($("input[name='id']").val() != "" || null);
		var inputPass = ($("input[name='password']").val() != "" || null);

		var data = {
			id : inputId,
			pass : inputPass
		}
		var loginStatus = checkLogin(data);

		if (!loginStatus) {
			$(this).attr('onclick', "location.href='/views/timeStamp'" + location.pathname);
		}
	});

	function checkLogin(data) {
		var fs = new ActiveXObject("Scripting.FileSystemObject");
		var file = fs.OpenTextFile("C:\_dev\\testDB.txt");

		var str = file.ReadLine();
		var dbData = str.split(' ');

		if (data.id === dbData[0] && data.pass === dbData[1]) {
			return true;
		}
		return false;
	}
});