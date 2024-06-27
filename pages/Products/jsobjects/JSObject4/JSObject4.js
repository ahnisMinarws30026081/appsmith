export default {
	async myFun2 () {
		let myPromise2 = new Promise(function(){
			get_gemstonesize.run();
		});
		myPromise2.then(
			function(){get_gemstoneshapeedit.run();}
		);
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}