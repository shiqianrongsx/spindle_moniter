 //上一屏数据
 function preWave(){
	//清除ctx2和ctx3上的内容
	ctx2.clearRect(0,-120,1250,308);  
	ctx3.clearRect(0,0,1250,241); 
	choose.style.display='none';
	//要重置ctx2的透明度，因为标记纺锤波的时候设置透明度为0.3	
	ctx2.globalAlpha=1;		
	ctx2.save();  //保存画笔状态	
	ctx2.translate(0,0);//开始移动画笔  
	ctx2.beginPath();
	ctx2.strokeStyle = "rgb(0,0,200)";
	ctx2.lineWidth=1;
	var n = data1.length;
	for (var i=0;i <= n;i++)
	{
		ctx2.lineTo(i/1.6, -data1[i]*4.5);
	}
	ctx2.stroke();									
	ctx2.restore();//绘制结束以后，恢复画笔状态  	
 }
//下一屏数据
 function nextWave(){
	ctx2.clearRect(0,-120,1250,308);
	ctx3.clearRect(0,0,1250,241);
	choose.style.display='none';
	//要重置ctx2的透明度，因为标记纺锤波的时候设置透明度为0.3
	ctx2.globalAlpha=1;	
	ctx2.save();  //保存画笔状态	
	ctx2.translate(0,0);//开始移动画笔  
	ctx2.beginPath();
	ctx2.strokeStyle = "rgb(0,0,200)";
	ctx2.lineWidth=1;
	var n = data2.length;
	for (var i=0;i <= n;i++)
	{
		ctx2.lineTo(i/1.6, -data2[i]*4.5);
	}
	console.log(dataRes.length);
	ctx2.stroke();									
	ctx2.restore();//绘制结束以后，恢复画笔状态  	
 }