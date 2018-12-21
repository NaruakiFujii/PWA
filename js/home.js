
  // ルートオプションを渡してルーターインスタンスを生成します
var router = new VueRouter({
	// 各ルートにコンポーネントをマッピングします
	// コンポーネントはVue.extend() によって作られたコンポーネントコンストラクタでも
	// コンポーネントオプションのオブジェクトでも構いません
	routes: [
		{
			path: '/timeStamp',
			component: {
				template: timeStamp
			}
		},
		{
			path: '/safetyReport',
			component: {
				template: safetyReport
			}
		}
	]
})


// ルーターのインスタンスをrootとなるVueインスタンスに渡します
var time3-cloud = new Vue({
	router: router
}).$mount('#time3-cloud')

