var option;//用于存储最后的选择
var optionRes;
function changeFillColor(e){
	var e=e||window.event;
	optionRes=e.target;
	option=e.target.value;
	//ctx3.globalCompositeOperation="source-atop";
	ctx3.clearRect(downHPos,0,upHPos-downHPos,241);
	if(option=="Definitely"){		 
		ctx3.fillStyle="#006400";		
	}else if(option=="Probably"){
		ctx3.fillStyle="#0033FF";
	}else if(option=="Guessing"){
		ctx3.fillStyle="#8b0000";
	}
	ctx3.globalAlpha=0.3;
	ctx3.fillRect(downHPos,0,upHPos-downHPos,241);
}
function subRes(){
	console.log(option);
	choose.style.display='none';
	for(var i=downSub;i<upSub+1;i++){
		if(option=="Definitely"){		 
			dataRes[i]=1;		
		}else if(option=="Probably"){
			dataRes[i]=0.75;	
		}else if(option=="Guessing"){
			dataRes[i]=0.5;	
		}else{ //undefined
			ctx3.clearRect(downHPos,0,upHPos-downHPos,241);
		}
	}
}
function resetRes(){
	//第一次选中一个区域直接按取消或者初始化对话框之后（因为默认会选中与上一次的最终结果）
	if(optionRes==undefined||optionRes.checked==false){
		alert("您还未作出选择");
	}else if(optionRes.checked==true){
		//取消选中的项
		optionRes.checked=false;
		option=undefined;//不设置的话，option还是原来选中的值，因此提交的时候还会提交原来的值
		//恢复选中区域为灰色
		ctx3.clearRect(downHPos,0,upHPos-downHPos,241);
		ctx3.fillStyle="#000";
		ctx3.globalAlpha=0.3;
		ctx3.fillRect(downHPos,0,upHPos-downHPos,241);
	}

}