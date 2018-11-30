

$(function(){

	(function (){

		// 初期処理でセッション情報を取得
//		var id = window.sessionStorage.getItem(['userId']);
//		var pass = window.sessionStorage.getItem(['userPass']);

//		if(id!=null && pass !=null){
//			$('.time').after('<div id="submit_result" class="section__block section__block--notification"><p>id:'+id+'</br>pass  :'+pass+'</br>セッション情報を保持しています。</p></div>');
//		}

		//cookie
		alert($.cookie("userData").id);

		//fetchAPI
//		var myHeaders = new Headers();
//		console.log(myHeaders.get("X-userData"));

	})();

	//値送る仕組みを後で入れる
	$('.arrive-button').click(function(){
		alert("出社打刻しました");
	});
	$('.leave-button').click(function(){
		alert("退社打刻しました");
	});

	$('.modal-open').click(function(){
	    // オーバーレイ用の要素を追加
	    $('body').append('<div class="modal-overlay"></div>');
        // オーバーレイをフェードイン
        $('.modal-overlay').fadeIn('slow');

        // モーダルコンテンツのIDを取得
        var modal = '#' + $(this).attr('data-target');
        // モーダルコンテンツの表示位置を設定
        modalResize();
         // モーダルコンテンツフェードイン
        $(modal).fadeIn('slow');

        // 「.modal-overlay」あるいは「.modal-close」をクリック
        $('.modal-overlay, .modal-close').off().click(function(){
            // モーダルコンテンツとオーバーレイをフェードアウト
            $(modal).fadeOut('slow');
            $('.modal-overlay').fadeOut('slow',function(){
                // オーバーレイを削除
                $('.modal-overlay').remove();
            });
        });

        // リサイズしたら表示位置を再取得
        $(window).on('resize', function(){
            modalResize();
        });

        // モーダルコンテンツの表示位置を設定する関数
        function modalResize(){
            // ウィンドウの横幅、高さを取得
            var w = $(window).width();
            var h = $(window).height();

            // モーダルコンテンツの表示位置を取得
            var x = (w - $(modal).outerWidth(true)) / 2;
            var y = (h - $(modal).outerHeight(true)) / 2;

            // モーダルコンテンツの表示位置を設定
            $(modal).css({'left': x + 'px','top': y + 'px'});
        }

    });

});