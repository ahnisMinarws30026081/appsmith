export default {
	
	myFun1 () {
		if(get_Gemstoneproduct.data[0]){
		storeValue("numberofstones1",get_Gemstoneproduct.data[0].no_of_stones) ;
		storeValue("gemstoneprofit1",get_Gemstoneproduct.data[0].stone_profit_percent);
	}
		else{
			storeValue("numberofstones1",0);
			storeValue("gemstoneprofit1",0);
			
		}
		if(get_Gemstoneproduct.data[1]){
		storeValue("numberofstones2",get_Gemstoneproduct.data[1].no_of_stones) ;
		storeValue("gemstoneprofit2",get_Gemstoneproduct.data[1].stone_profit_percent);
	}
		else{
			storeValue("numberofstones2",0) ;
			storeValue("gemstoneprofit2",0);
		}
		
	if(get_Gemstoneproduct.data[2]){
		storeValue("numberofstones3",get_Gemstoneproduct.data[2].no_of_stones) ;
		storeValue("gemstoneprofit3",get_Gemstoneproduct.data[2].stone_profit_percent);
	}
		else{
			storeValue("numberofstones3",0) ;
			storeValue("gemstoneprofit3",0);
			
		}
		if(get_Gemstoneproduct.data[3]){
		storeValue("numberofstones4",get_Gemstoneproduct.data[3].no_of_stones) ;
		storeValue("gemstoneprofit4",get_Gemstoneproduct.data[3].stone_profit_percent);
	}
		else{
			storeValue("numberofstones4",0) ;
			storeValue("gemstoneprofit4",0);
			
		}
		if(get_Gemstoneproduct.data[4]){
		storeValue("numberofstones5",get_Gemstoneproduct.data[4].no_of_stones) ;
		storeValue("gemstoneprofit5",get_Gemstoneproduct.data[4].stone_profit_percent);
	}
		else{
			storeValue("numberofstones5",0) ;
			storeValue("gemstoneprofit5",0);
		}
		if(get_Gemstoneproduct.data[5]){
		storeValue("numberofstones6",get_Gemstoneproduct.data[5].no_of_stones) ;
		storeValue("gemstoneprofit6",get_Gemstoneproduct.data[5].stone_profit_percent);
	}
		else{
			storeValue("numberofstones6",0) ;
			storeValue("gemstoneprofit6",0);
		}
		if(get_Gemstoneproduct.data[6]){
		storeValue("numberofstones7",get_Gemstoneproduct.data[6].no_of_stones) ;
		storeValue("gemstoneprofit7",get_Gemstoneproduct.data[6].stone_profit_percent);
	}
		else{
			storeValue("numberofstones7",0) ;
			storeValue("gemstoneprofit7",0);
		}
		if(get_Gemstoneproduct.data[7]){
		storeValue("numberofstones8",get_Gemstoneproduct.data[7].no_of_stones) ;
		storeValue("gemstoneprofit8",get_Gemstoneproduct.data[7].stone_profit_percent);
	}
		else{
			storeValue("numberofstones8",0) ;
			storeValue("gemstoneprofit8",0);
		}
		if(get_Gemstoneproduct.data[8]){
		storeValue("numberofstones9",get_Gemstoneproduct.data[8].no_of_stones) ;
		storeValue("gemstoneprofit9",get_Gemstoneproduct.data[8].stone_profit_percent);
	}
		else{
			storeValue("numberofstones9",0) ;
			storeValue("gemstoneprofit9",0);
		}
		if(get_Gemstoneproduct.data[9]){
		storeValue("numberofstones10",get_Gemstoneproduct.data[9].no_of_stones) ;
		storeValue("gemstoneprofit10",get_Gemstoneproduct.data[9].stone_profit_percent);
	}
		else{
			storeValue("numberofstones10",0) ;
			storeValue("gemstoneprofit10",0);
			
		}
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}