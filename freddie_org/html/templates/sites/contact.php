<!DOCTYPE html>
<html>
	
	<head>

		<?php include "../head.php"; ?>

			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

			<style type="text/css">
			*{
			    margin:0px;
			    padding:0px;
			}
			body, button, input, select, textarea {
			    font: 12px/16px Verdana, Helvetica, Arial, sans-serif;
			}
			#info {
			    margin-top: 10px;
			}
			#container{
				min-width:600px;
				min-height:767px;
			}
			</style>
			<script charset="utf-8" src="http://map.qq.com/api/js?v=2.exp"></script>
			<script>
			var init = function() {
			    var center = new qq.maps.LatLng(38.904870,121.570270);
			    var map = new qq.maps.Map(document.getElementById('container'),{
			        center: center,
			        zoom: 13
			    });
			    var infoWin = new qq.maps.InfoWindow({
			        map: map
			    });
			    infoWin.open();
			    //tips  自定义内容
			    infoWin.setContent('<div style="width:200px;padding-top:10px;">'+
			        '大连峻达医药有限公司</div>');
			    infoWin.setPosition(center);
			}
			</script>
	</head>

    <body onload="init()">
		
		<?php include "../header.php"; ?>
	
		<div class="container forFooter">

				<div class="TopTinyPic" align="center">
					
										
						<?php MysqlConnect("Home", 2);?>
					
					
				</div>

				<!--?php include "../PathBar.php"; ?-->

				<div class="NotHome">
					<div id="Contactus">
						
							<?php MysqlConnect("ContactUs"); ?>

					</div>

					 <div id="container" style="margin:50px 0px 100px 0px;"></div>

				</div>

		</div>

		<?php include "../footer.php"; ?>
			
	</body>

</html>


