export default {
	showInput: () =>{
	if(appsmith.store.gemstone2Visible==true){
		if(appsmith.store.gemstone3Visible==true){
			if(appsmith.store.gemstone4Visible==true){
				if(appsmith.store.gemstone5Visible==true){
					if(appsmith.store.gemstone6Visible==true){
						if(appsmith.store.gemstone7Visible==true){
							if(appsmith.store.gemstone8Visible==true){
								if(appsmith.store.gemstone9Visible==true){
									if(appsmith.store.gemstone10Visible==true){
										showAlert("Maximum Number of Gemstones");
									}
									else{
										storeValue("gemstone10Visible",true);
									}
								}
								else{
									storeValue("gemstone9Visible",true);
								}
							}
							else{
								storeValue("gemstone8Visible",true);
							}
						}
						else{
							storeValue("gemstone7Visible",true);
						}
					}
					else{
						storeValue("gemstone6Visible",true);
					}
				}
				else{
					storeValue("gemstone5Visible",true);
				}
			}
			else{
				storeValue("gemstone4Visible",true);
			}
		}
		else{
			storeValue("gemstone3Visible",true);
		}
	}
		else{
			storeValue("gemstone2Visible",true);
		}
},
	hideInput2:()=>{
		storeValue("gemstone2Visible",false);
	}	,
	hideInput3:()=>{
		storeValue("gemstone3Visible",false);
	},
	hideInput4:()=>{
		storeValue("gemstone4Visible",false);
	},
	hideInput5:()=>{
		storeValue("gemstone5Visible",false);
	},
	hideInput6:()=>{
		storeValue("gemstone6Visible",false);
	},
	hideInput7:()=>{
		storeValue("gemstone7Visible",false);
	},
	hideInput8:()=>{
		storeValue("gemstone8Visible",false);
	},
	hideInput9:()=>{
		storeValue("gemstone9Visible",false);
	},
	hideInput10:()=>{
		storeValue("gemstone10Visible",false);
	}
}