var canGetCookie = 0; //是否支持存储Cookie 0 不支持 1 支持
			var ajaxmockjax = 1; //是否启用虚拟Ajax的请求响 0 不启用  1 启用
			//默认账号密码

			var truelogin = "kbcxy";
			var truepwd = "1";

			var CodeVal = 0;
			Code();

			function Code() {
				if(canGetCookie == 1) {
					createCode("AdminCode");
					var AdminCode = getCookieValue("AdminCode");
					showCheck(AdminCode);
				} else {
					showCheck(createCode(""));
				}
			}

			function showCheck(a) {
				CodeVal = a;
				var c = document.getElementById("myCanvas");
				var ctx = c.getContext("2d");
				ctx.clearRect(0, 0, 1000, 1000);
				ctx.font = "80px 'Hiragino Sans GB'";
				ctx.fillStyle = "#E8DFE8";
				ctx.fillText(a, 0, 100);
			}
			$(document).keypress(function(e) {
				// 回车键事件  
				if(e.which == 13) {
					$('input[type="button"]').click();
				}
			});
			//粒子背景特效
			//			$('body').particleground({
			//				dotColor: '#E8DFE8',
			//				lineColor: '#133b88'
			//			});
			//			$('input[name="pwd"]').focus(function() {
			//				$(this).attr('type', 'password');
			//			});
			//			$('input[type="text"]').focus(function() {
			//				$(this).prev().animate({
			//					'opacity': '1'
			//				}, 200);
			//			});
			//			$('input[type="text"],input[type="password"]').blur(function() {
			//				$(this).prev().animate({
			//					'opacity': '.5'
			//				}, 200);
			//			});
			//			$('input[name="login"],input[name="pwd"]').keyup(function() {
			//				var Len = $(this).val().length;
			//				if(!$(this).val() == '' && Len >= 5) {
			//					$(this).next().animate({
			//						'opacity': '1',
			//						'right': '30'
			//					}, 200);
			//				} else {
			//					$(this).next().animate({
			//						'opacity': '0',
			//						'right': '20'
			//					}, 200);
			//				}
			//			});
			var open = 0;
			layui.use('layer', function() {
				//非空验证
				$('input[type="button"]').click(function() {
					var login = $('input[name="login"]').val();
					var pwd = $('input[name="pwd"]').val();
					var code = $('input[name="code"]').val();
					if(login == '') {
						ErroAlert('请输入您的账号');
					} else if(pwd == '') {
						ErroAlert('请输入密码');
					} else if(code == '' || code.length != 4) {
						ErroAlert('输入验证码');
					} else {
						//登陆
						var JsonData = {
							login: login,
							pwd: pwd,
							code: code
						};
						//$.post("url",JsonData,function(data) {
						console.log(111);
						alert("登录成功");
						//window.location.href = 'http://127.0.0.1:8020/jQueryLogin/index.html?__hbt=1567408106021';
						//});						
					}
				})
			})
			//全屏
			var fullscreen = function() {
				elem = document.body;
				if(elem.webkitRequestFullScreen) {
					elem.webkitRequestFullScreen();
				} else if(elem.mozRequestFullScreen) {
					elem.mozRequestFullScreen();
				} else if(elem.requestFullScreen) {
					elem.requestFullscreen();
				} else {
					//浏览器不支持全屏API或已被禁用  
				}
			}