export default {
	showInput: () =>{
	if(appsmith.store.input2Visible==true){
		if(appsmith.store.input3Visible==true){
			if(appsmith.store.input4Visible==true){
				if(appsmith.store.input5Visible==true){
					if(appsmith.store.input6Visible==true){
						if(appsmith.store.input7Visible==true){
							if(appsmith.store.input8Visible==true){
								if(appsmith.store.input9Visible==true){
									if(appsmith.store.input10Visible==true){
										showAlert("Maximum Number of Video Links");
									}
									else{
										storeValue("input10Visible",true);
									}
								}
								else{
									storeValue("input9Visible",true);
								}
							}
							else{
								storeValue("input8Visible",true);
							}
						}
						else{
							storeValue("input7Visible",true);
						}
					}
					else{
						storeValue("input6Visible",true);
					}
				}
				else{
					storeValue("input5Visible",true);
				}
			}
			else{
				storeValue("input4Visible",true);
			}
		}
		else{
			storeValue("input3Visible",true);
		}
	}
		else{
			storeValue("input2Visible",true);
		}
},
	hideInput2:()=>{
		storeValue("input2Visible",false);
	}	,
	hideInput3:()=>{
		storeValue("input3Visible",false);
	},
	hideInput4:()=>{
		storeValue("input4Visible",false);
	},
	hideInput5:()=>{
		storeValue("input5Visible",false);
	},
	hideInput6:()=>{
		storeValue("input6Visible",false);
	},
	hideInput7:()=>{
		storeValue("input7Visible",false);
	},
	hideInput8:()=>{
		storeValue("input8Visible",false);
	},
	hideInput9:()=>{
		storeValue("input9Visible",false);
	},
	hideInput10:()=>{
		storeValue("input10Visible",false);
	}
}