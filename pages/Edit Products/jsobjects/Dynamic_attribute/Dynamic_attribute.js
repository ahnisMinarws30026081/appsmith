export default {
	showInput: () =>{
	if(appsmith.store.attribute2Visible==true){
		if(appsmith.store.attribute3Visible==true){
			if(appsmith.store.attribute4Visible==true){
				if(appsmith.store.attribute5Visible==true){
					if(appsmith.store.attribute6Visible==true){
						if(appsmith.store.attribute7Visible==true){
							if(appsmith.store.attribute8Visible==true){
								if(appsmith.store.attribute9Visible==true){
									if(appsmith.store.attribute10Visible==true){
										showAlert("Maximum Number of Attributes");
									}
									else{
										storeValue("attribute10Visible",true);
									}
								}
								else{
									storeValue("attribute9Visible",true);
								}
							}
							else{
								storeValue("attribute8Visible",true);
							}
						}
						else{
							storeValue("attribute7Visible",true);
						}
					}
					else{
						storeValue("attribute6Visible",true);
					}
				}
				else{
					storeValue("attribute5Visible",true);
				}
			}
			else{
				storeValue("attribute4Visible",true);
			}
		}
		else{
			storeValue("attribute3Visible",true);
		}
	}
		else{
			storeValue("attribute2Visible",true);
		}
},
	hideInput2:()=>{
		storeValue("attribute2Visible",false);
	}	,
	hideInput3:()=>{
		storeValue("attribute3Visible",false);
	},
	hideInput4:()=>{
		storeValue("attribute4Visible",false);
	},
	hideInput5:()=>{
		storeValue("attribute5Visible",false);
	},
	hideInput6:()=>{
		storeValue("attribute6Visible",false);
	},
	hideInput7:()=>{
		storeValue("attribute7Visible",false);
	},
	hideInput8:()=>{
		storeValue("attribute8Visible",false);
	},
	hideInput9:()=>{
		storeValue("attribute9Visible",false);
	},
	hideInput10:()=>{
		storeValue("attribute10Visible",false);
	}
}