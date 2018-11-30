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
			.then(function(response) {
				console.log(response.text());
				var dbData = response.text().PromiseVlue;
				if (data.id === dbData[0] && data.pass === dbData[1]) {
					return true;
				}
//				return response.text();
			})
		fetch(url)
			.then((response) => response.body.getReader()) // ReadableStreamを取得する。
			.then((reader) => {
			// ReadableStream.read()はPromiseを返す。
			// Promiseは{ done, value }として解決される。
			// データを読み込んだとき：doneはfalse, valueは値。
			// データを読み込み終わったとき：doneはtrue, valueはundefined。
//				function readChunk({done, value}) {
//					if(done) {
//						// 読み込みが終わっていれば最終的なテキストを表示する。
//						console.log(veryLongText);
//						return;
//					}
//
//					var dbData = decoder.decode(value);
//
//					if (data.id === dbData[0] && data.pass === dbData[1]) {
//						return true;
//					}

					// 次の値を読みにいく。
//					reader.read().then(readChunk);
//				}

				// 最初の値を読み込む。
//				reader.read().then(readChunk);
			})

		//サーバーからデータ取ってきたい
		var str = "0001 1";
		var dbData = str.split(' ');

		if (data.id === dbData[0] && data.pass === dbData[1]) {
			return true;
		}
		return false;
	}
});