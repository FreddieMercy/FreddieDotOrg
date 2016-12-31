<!DOCTYPE html>
<html>
	
	<head>

		<?php include "../head.php"; ?>
		<script type="text/javascript" src="/static/js/ajax.js"></script> 
		<script type="text/javascript" src="/static/js/sites/about.js"></script> 
	</head>

    <body>
		
		<?php include "../header.php"; ?>
		<style>	#BG{ <?php MysqlConnect("HomeBackground", 1);?>	} </style>	
		<div id="BG"></div>
		<div id="BG2"></div>
		<div class="placeholder LeftDiv"></div>	
		<div class="container">

				<div class="TopTinyPic" align="center">
					
										
						<?php MysqlConnect("Home", 2);?>
					
					
				</div>

				<?php include "../PathBar.php"; ?>

				<div class="sidebarAbout LeftDiv OnlyHash ForPath2" align=center>
					<h1>公司简介</h1>
					<nav>
						<ul>
							<?php MysqlConnect("AboutTitle"); ?>
						</ul>
					</nav>
				</div>

				<div class="RightDiv">
					<div style="margin:0px 12% 50px 12%;" align="center">
						<h1 style="color:green;border-bottom: 3px solid green;">Nihaoma</h1>
						<div id="AboutContent" style="background:#e1e1e1" align="left"></div>
					</div>
				</div>

			</div>


		<?php include "../footer.php"; ?>

	</body>
	   	
</html>