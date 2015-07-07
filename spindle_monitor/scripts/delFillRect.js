var startIndex,endIndex;
function getMousePos(e) {
    var e = e || window.e;
	delHPos=e.clientX-canvas3.offsetLeft-out.offsetLeft;
	delSub=Math.ceil(delHPos*1.6);
	if(dataRes[delSub]!=0){
		//获取要删除区域数据的下标的起始点
		for(var i=delSub;i>=0;i--){
			if(dataRes[i]!=dataRes[delSub]){
				startIndex=i+1;
				console.log("要删除的部分的起点"+startIndex);
				break;
			}
		}
		for(var i=delSub;i<data1.length;i++){
			if(dataRes[i]!=dataRes[delSub]){
				endIndex=i-1;
				console.log("要删除的部分的终点"+endIndex);
				break;
			}
		}
		delSelected.style.display="block";
		delSelected.style.left=e.clientX+2+'px';
		del.onclick=delSel;
		delReset.onclick=resetSel;		
	}
}
function delSel(){
	//canvas3删除选中区域
	for(var i=startIndex;i<=endIndex;i++){
		dataRes[i]=0;
	}
	ctx3.clearRect(startIndex/1.6-1,0,endIndex/1.6+1-startIndex/1.6+1,241);
	delSelected.style.display="none";
}
function resetSel(){
	delSelected.style.display="none";
}