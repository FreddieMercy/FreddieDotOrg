<!DOCTYPE html>
<html>
	
	<head>
		<link rel="stylesheet" type="text/css" href="/static/css/hire.css">	
		<?php include "../head.php"; ?>
		<script type="text/javascript" src="/static/js/ajax.js"></script> 
		<script type="text/javascript" src="/static/js/sites/about.js"></script> 
	</head>

    <body>
		
		<?php include "../header.php"; ?>

		<div class="placeholder LeftDiv"></div>	
		<div class="container">

<!--
				<div class="TopTinyPic" align="center">
					
										
						<?php //MysqlConnect("Home", 2);?>
					
					
				</div>
-->
				<?php include "../PathBar.php"; ?>

				<div class="sidebarAbout LeftDiv OnlyHash ForPath2" align=center>
					<h1>诚招英才</h1>
					<nav>
						<ul>
							<?php MysqlConnect("HireTitle"); ?>
						</ul>
					</nav>
				</div>

				<div class="RightDiv">
					<div id="HireContent" style="margin:0px 50px 50px 50px">


					</div>
				</div>


		<?php include "../footer.php"; ?>

	</body>
	   	
</html>