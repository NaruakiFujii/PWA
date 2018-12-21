
  // ルートオプションを渡してルーターインスタンスを生成します
var router = new VueRouter({
	// 各ルートにコンポーネントをマッピングします
	// コンポーネントはVue.extend() によって作られたコンポーネントコンストラクタでも
	// コンポーネントオプションのオブジェクトでも構いません
	routes: [
		{
			path: '/timeStamp',
			name: 'timeStamp',
			component: {
				template: '#time-stamp'
			}
		},
		{
			path: '/safetyReport',
			name: 'safetyReport',
			component: {
				template: '#safety-report'
			}
		}
	]
})


// ルーターのインスタンスをrootとなるVueインスタンスに渡します
var time3Cloud = new Vue({
	router: router
}).$mount('#time3-cloud')

