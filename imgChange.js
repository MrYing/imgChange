
/*
*
*name:imgChange.js
*date:2017-01-15
*power by wxf
*
*/


function imgChange(id,obj){//构造轮换函数
			
			var resetCss = {//重置默认样式
				"margin":"0px",
				"padding":"0px",
				"border":"0px",								
			};
			
			var idCss = {//初始化轮换图显示页样式
				"width":obj.imgWidth+"px",
				"height":obj.imgHeight+"px",				
				"position":"relative",				
				"overflow":"hidden"
			};
			
			var imgConCss = {//初始化轮换图容器样式
				"width":obj.imgWidth*obj.imgUrl.length+"px",
				"height":obj.imgHeight+"px",						
			};
			
			var imgCon = "<div id='img"+id+"'></div>";//初始化轮换图容器
			$("#"+id+" a,#"+id+" img").css(resetCss);//重置默认样式 生效
			$("#"+id).css(idCss);//轮换图显示页样式 生效
			$("#"+id).html(imgCon);//添加轮换图容器
			$("#img"+id).css(imgConCss);//轮换图容器样式 生效
			
			if(obj.imgBtn.is){//判断焦点轮换是否开启，若开启，执行以下操作
				var imgBtnCon = "<div id='imgBtnCon"+id+"'></div>";//初始化焦点容器
				$("#"+id).append(imgBtnCon);//添加焦点容器
					var imgBtnConCss = {//初始化焦点容器样式
						"width":obj.imgBtn.size*obj.imgUrl.length+obj.imgUrl.length*obj.imgBtn.interval+50+"px",
						"position":"absolute",
						"top":obj.imgBtn.top,
						"left":obj.imgBtn.left,
						"z-index":"100"
					}
				$("#imgBtnCon"+id).css(imgBtnConCss);//焦点容器样式 生效
				var imgBtn = new Array();//初始化焦点
				for (var i = 0;i<obj.imgUrl.length;i++) {//循环添加焦点
					imgBtn[i] = "<div class='imgBtn"+id+" imgBtn"+id+(i+1)+"'></div>";
					$(imgBtn[i]).appendTo("#imgBtnCon"+id);					
				}
					var btnCss = {//初始化焦点样式
						"width":obj.imgBtn.size+"px",
						"height":obj.imgBtn.size+"px",
						"border":"2px solid "+obj.imgBtn.color,
						"cursor":"pointer",
						"float":"left",
						"marginLeft":obj.imgBtn.interval+"px"
					}
					$(".imgBtn"+id).css(btnCss);//焦点样式 生效
					$("#imgBtnCon"+id+">div:nth-child(1)").css("background",obj.imgBtn.color);//为第一个焦点初始化样式 
					if(obj.imgBtn.type==="circular"){//判断焦点类型是否为圆
						$(".imgBtn"+id).css("border-radius","50%");
					}
					
				}
			
			
			
			var newImg = new Array();//初始化图片


			for (var i = 0;i < obj.imgUrl.length;i++) {//循环构造添加图片
				if(obj.autoChange.type == "slideTop"&&obj.imgTips.is){	
					newImg[i] = "<a href='"+obj.href[i]+"'><span class='imgTips"+id+"' style='left:0;top:"+(obj.imgTips.top+i*obj.imgHeight)+"px'>"+obj.title[i]+"</span><img src='"+obj.imgUrl[i]+"' width='"+obj.imgWidth+"px' height='"+obj.imgHeight+"px' title='"+obj.title[i]+"'/></a>";
				}else{
					newImg[i] = obj.imgTips.is?
						"<a href='"+obj.href[i]+"'><span class='imgTips"+id+"' style='top:"+obj.imgTips.top+"+px'>"+obj.title[i]+"</span><img src='"+obj.imgUrl[i]+"' width='"+obj.imgWidth+"px' height='"+obj.imgHeight+"px' title='"+obj.title[i]+"'/></a>":
						"<a href='"+obj.href[i]+"'><img src='"+obj.imgUrl[i]+"' width='"+obj.imgWidth+"px' height='"+obj.imgHeight+"px' title='"+obj.title[i]+"'/></a>";
					
				}

				$(newImg[i]).appendTo("#img"+id);								
			}
			

			if(obj.imgTips.is){
				var imgTipsStyle = {//设置tip样式
					"width":obj.imgWidth+"px",
					"height":obj.imgTips.height+"px",
					"fontSize":obj.imgTips.fontSize+"px",
					"textAlign":obj.imgTips.textAlign,
					"color":obj.imgTips.color,
					"background":obj.imgTips.background,
					"position":"absolute",				
					"lineHeight":obj.imgTips.height+"px",					
					"z-index":"99"
				}
				$(".imgTips"+id).css(imgTipsStyle);
			}



			var slideCounts = 0;//初始化轮换参数
			function imgChaneStart(){//构造轮换函数						
				slideCounts = slideCounts>obj.imgUrl.length?0:slideCounts;//判断轮换参数是否在图片数目范围内，超出则置0
				slideCounts++;//轮换参数计数或下移
				slideCounts = slideCounts % obj.imgUrl.length;//计算当前轮换参数
				switch (obj.autoChange.type){//判断轮换类型
					case "slideLeft":var autoChange = {marginLeft:-obj.imgWidth*slideCounts+"px"};break;
					case "slideTop":$("#img"+id).css({"width":obj.imgWidth+"px","height":obj.imgHeight*obj.imgUrl.length+"px"});var autoChange = {marginTop:-obj.imgHeight*slideCounts+"px"};break;
					default:var autoChange = {marginLeft:-obj.imgWidth*slideCounts+"px"};break;
				}
				$("#img"+id).animate(autoChange,obj.autoChange.keepTime*1000);//执行轮换

				if(obj.autoChange.type == "slideTop" && obj.imgTips.is){$(".imgTips"+id).animate(autoChange,obj.autoChange.keepTime*1000)};//执行轮换}

				$(".imgBtn"+id).eq(slideCounts).css("background",obj.imgBtn.color).siblings().css("background","none");//绑定焦点轮换					
			}
			function setTimer(){//构造定时器
				return setInterval(imgChaneStart,obj.autoChange.time*1000);
			}
			
			if(obj.autoChange.isAuto){//判断是否开启自动轮换
				var timer = setTimer();//开启自动轮换则调用定时器
				$(".imgBtn"+id).on("mouseout",function(){//绑点鼠标移出事件
					clearInterval(timer);//当鼠标移出焦点清除上次定时器
					timer = setTimer();//开启新的定时器
				})
			}
			
			function mouseoverPic(idx){//构造鼠标悬停事件
				$(".imgBtn"+id+idx).on("mouseover",function(){						
					slideCounts = idx-2;imgChaneStart();//当鼠标悬停在焦点上时让图片轮换到当前对应的焦点图片
					if(obj.autoChange.isAuto){clearInterval(timer);}//若开启了自动轮换，则清除定时器，让图片停止轮换
					})				
			}
			for(var m = 1 ;m <= obj.imgUrl.length;m++){//循环绑定鼠标悬停事件
				mouseoverPic(m);					
			}
			
	}
