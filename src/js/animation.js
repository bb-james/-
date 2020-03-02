
var sport;              
function animation(Obj,target,time,callback) {  //事件，绑定对象，到达地点，延时毫秒
 
	 clearInterval(sport);
	 sport =  setInterval(function(){
 		var distance = Obj.offsetLeft; /*距离父亲盒子的左边距离*/
 		console.log( distance) 
 		var step = (target-distance) / 10;
 		step = step>0? Math.ceil(step):Math.floor(step)
 		Obj.style.left = distance + step  +'px';  
    	if (distance==target) {
		clearInterval(sport);
    	} 
    	},time);
    	if (callback) {callback();}   	
}

