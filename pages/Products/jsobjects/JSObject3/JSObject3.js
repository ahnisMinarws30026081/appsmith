export default {

	async myFun2 () {
		let myPromise = new Promise(function(){
			get_Gemstoneproduct.run()
		});
		myPromise.then(
			function(){get_gemstonecutedit.run()}
		);


		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}