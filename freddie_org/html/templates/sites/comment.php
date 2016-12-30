<!DOCTYPE html>
<html>
	
	<head>

		<?php include "../head.php"; ?>
		<script type="text/javascript" src="/static/js/sites/about.js"></script> 

	</head>

    <body>
		
		<?php include "../header.php"; ?>
	
		<div class="container">
<!--
				<div class="TopTinyPic" align="center">
					
										
						<?php //MysqlConnect("Home", 2);?>
					
					
				</div>

				<?php //include "../PathBar.php"; ?>
-->
				<div class="Comment">
						<h1 style="color:green;border-bottom-style:solid;">在线留言</h1>
						<form style="width:100%;" action="../functions.php" method="post" enctype="multipart/form-data">
						<?php

							if(isset($_GET['Apply']) && $_GET['Apply']==='True')
							{
								echo '<li><span>上传简历</span><input type="file" name="resume"/></li>';
							}


						?>
							<li><input type="text" name="name" placeholder="发件人（必填）" /></li>
							<li><input type="text" name="email" placeholder="电子邮件" /></li>
							<li><input type="text" name="tel" placeholder="联系电话" /></li>
							<li><input type="text" name="address" placeholder="地址" /></li>
							<li><textarea style="width:100%; min-height:800px;" name="content" placeholder="留言内容（必填）" ></textarea></li>

							<input style="width:200px; float:right;" type="submit" value="发送"/>

						</form>

				</div>

		</div>

		<?php include "../footer.php"; ?>
			
	</body>
	   	
</html>