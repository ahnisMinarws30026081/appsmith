export default {
	async myFun1 () {
	const jsonData={
		VideoLinks: Input31Copy.text
		
	};
		const jsonString=JSON.stringify(jsonData);
		storeValue("jsonData",jsonString);
		add_products.run()
		.then(()=>{
			return get_Products.run();
		})
		 .then(()=>{
			closeModal(editProductCopy);
		})
	}

}