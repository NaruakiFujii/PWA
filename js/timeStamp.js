

$(function(){

	(function (){

		// 初期処理でセッション情報を取得
//		var id = window.sessionStorage.getItem(['userId']);
//		var pass = window.sessionStorage.getItem(['userPass']);

//		if(id!=null && pass !=null){
//			$('.time').after('<div id="submit_result" class="section__block section__block--notification"><p>id:'+id+'</br>pass  :'+pass+'</br>セッション情報を保持しています。</p></div>');
//		}

		//cookie
		var obj = JSON.parse($.cookie("userData"));
		console.log(obj);

		//fetchAPI
//		var myHeaders = new Headers();
//		console.log(myHeaders.get("X-userData"));

	})();

	//値送る仕組みを後で入れる
	$(document).on('click', '.arrive-button', function(){
		alert("出社打刻しました");
	});
	$(document).on('click', '.leave-button', function(){
		alert("退社打刻しました");
	});

});