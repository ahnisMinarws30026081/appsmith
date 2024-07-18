export default {
	async storeInput(){
		storeValue("productid",Table1.triggeredRow.id);
	storeValue("productcode",Table1.triggeredRow.code);
	storeValue("productname",Table1.triggeredRow.name);
	storeValue("productslug",Table1.triggeredRow.slug);
	storeValue("productstock",Table1.triggeredRow.stock);
	storeValue("productsequence",Table1.triggeredRow.product_sequence);
	storeValue("metalweight",Table1.triggeredRow.metal_weight);
	storeValue("metalid",Table1.triggeredRow.metal_id);
	storeValue("metalprofit",Table1.triggeredRow.metal_profit_percent);
	storeValue("accessoryid",Table1.triggeredRow.accessories_id);
	storeValue("labourgroup",Table1.triggeredRow.labour_id);
	storeValue("description",Table1.triggeredRow.description);
	storeValue("pagetitle",Table1.triggeredRow.page_title);
	storeValue("pagekeywords",Table1.triggeredRow.page_keyword);
	storeValue("pagedescription",Table1.triggeredRow.page_description);
	storeValue("pagenote",Table1.triggeredRow.product_note);
	storeValue("avgweight",Table1.triggeredRow.avg_weight);
	storeValue("grossweight",Table1.triggeredRow.net_weight);
	storeValue("miscellaneous",Table1.triggeredRow.miscellaneous);
	storeValue("videolinks",Table1.triggeredRow.video_links);
	storeValue("status",Table1.triggeredRow.status);
	storeValue("isbestseller",Table1.triggeredRow.is_bestseller);
	storeValue("isreadytoship",Table1.triggeredRow.is_readytoship);
	storeValue("isnewarrival",Table1.triggeredRow.is_readytoship)
		.then(navigateTo("Edit Products"));
}

}