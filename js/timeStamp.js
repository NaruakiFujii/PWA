

$(function(){

	(function (){

		// 初期処理でセッション情報を取得
		var id = window.sessionStorage.getItem(['userId']);
        var pass = window.sessionStorage.getItem(['userPass']);

        if(id!=null && pass !=null){
        	$('#item').after('<div id="submit_result" class="section__block section__block--notification"><p>id:'+id+'</br>pass  :'+pass+'</br>セッション情報を保持しています。</p></div>');
        }

	})();

	$('.arrive').click(function(){
		alert("出社打刻しました");
	});
	$('.leave').click(function(){
		alert("退社打刻しました");
	});
});