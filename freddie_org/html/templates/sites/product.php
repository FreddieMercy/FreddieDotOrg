<!DOCTYPE html>
<html>
	
	<head>
		<link rel="stylesheet" type="text/css" href="/static/css/homeThirdForm.css">	
		<?php include "../head.php"; ?>
		<script type="text/javascript" src="/static/js/sites/about.js"></script> 

	</head>

    <body>
		
		<?php include "../header.php"; ?>
	
		<div class="container">

				<div class="TopTinyPic" align="center">
					
										
						<?php MysqlConnect("Home", 2);?>
					
					
				</div>

				<?php include "../PathBar.php"; ?>


				<div class="GeneralFormAndTable">
					<form action="templates/functions.php" method="post">
						<input style="width:300px" type="text" name="product" placeholder="这一页怎么做要等我看过你的数据库" />
						<input style="width:100px" type="submit" value="搜索">
					</form>
					<?php MysqlConnect("DatabaseTable"); ?>
				</div>
					




		<?php include "../footer.php"; ?>
			
	</body>
	   	
</html>