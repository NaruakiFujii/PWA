
  // ルートオプションを渡してルーターインスタンスを生成します
var router = new VueRouter({
	// 各ルートにコンポーネントをマッピングします
	// コンポーネントはVue.extend() によって作られたコンポーネントコンストラクタでも
	// コンポーネントオプションのオブジェクトでも構いません
	routes: [
		{
			path: '/timeStamp',
			component: time-stamp
		},
		{
			path: '/safetyReport',
			component: SafetyReport
		}
	]
})


// ルーターのインスタンスをrootとなるVueインスタンスに渡します
var time3Cloud = new Vue({
	router: router
}).$mount('#time3-cloud')

