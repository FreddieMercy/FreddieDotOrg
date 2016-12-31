<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="/static/css/homeFirstHome.css">
		<link rel="stylesheet" type="text/css" href="/static/css/homeSecondAbout.css">	
		<link rel="stylesheet" type="text/css" href="/static/css/homeThirdForm.css">	
		<?php include "templates/head.php"; ?>
		<script type="text/javascript" src="/static/js/sites/home.js"></script> 

	</head>

    <body>
		
		<?php include "templates/header.php"; ?>
	
		<style>	#BG{ <?php MysqlConnect("HomeBackground", 1);?>	} </style>	
		<div id="BG"></div>

		<div class="container">
				<!-- First Section -->

				<div id="DalianJunda">		
							
					<div id="dljdText">
						<li id="dljd1" align="center" style="width:60vh; font-size:72px;"><span></span></li>
						<li id="dljd2" style="width:45vh; font-size:32px; margin-top:10px;"><span></span></li>
						<li id="dljd3" style="width:45vh; font-size:24px; margin-top:10px;"><span></span></li>
					</div>

					<div id="dljdLOGO" style="z-index:0;">
					
						<img src="/static/img/HomeFirstTop.png">
					
					</div>

					<div id="playPics" style="z-index:-1;">
						
					</div>

					<div id="Trace" class="sidebar" align="center">
						<nav>
							<ul>
								
							
							</ul>
						</nav>

					</div>
				</div>

				
				<?php include "templates/PathBar.php"; ?>

				<!-- End of First -->
				
				<!-- Second Section (About)-->

				<div id="HomeSecondAbout">
					<?php MysqlConnect("HomeSecondAbout"); ?>
				</div>


				<!-- End of Second -->

				<!-- Third Section (Product)  *withdraw* --> 
				<!--div id="HomeThirdForm" class="GeneralFormAndTable">
					
					<?php //MysqlConnect("HomeThirdForm");?>

				</div-->
				<!-- End of Third -->
				
				<!-- Forth Section (Hire) -->

					<?php MysqlConnect("HomeForthHire"); ?>

				<!-- End of Forth-->	

				<!-- Fifth Section (Contact) -->

				<div id="Contactus" style="background:#f6fecc;padding:30px 10px 30px 100px; height:40vh">
						
						<?php MysqlConnect("ContactUs"); ?>

				</div>

				<!-- End of Fifth-->	


		</div>

		<?php include "templates/footer.php"; ?>
			
	</body>
	   	
</html>