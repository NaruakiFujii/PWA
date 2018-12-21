

$(function(){

//	(function (){

		// 初期処理でセッション情報を取得
//		var id = window.sessionStorage.getItem(['userId']);
//		var pass = window.sessionStorage.getItem(['userPass']);

//		if(id!=null && pass !=null){
//			$('.time').after('<div id="submit_result" class="section__block section__block--notification"><p>id:'+id+'</br>pass  :'+pass+'</br>セッション情報を保持しています。</p></div>');
//		}

		//cookie
//		alert(JSON.parse($.cookie("userData")));

		//fetchAPI
//		var myHeaders = new Headers();
//		console.log(myHeaders.get("X-userData"));

//	})();

	//値送る仕組みを後で入れる
	$(document).on('click', '.report-button', function(){
		alert("報告しました");
	});

});