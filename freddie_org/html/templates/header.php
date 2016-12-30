<style type="text/css">
	body {
			font: 100%/1.4 Verdana, Arial, Helvetica, sans-serif;
			width: 100%; 
			margin: 0;
			padding: 0;
			color: #000;
			display:block;					
		}
</style>

<header>
	<?php include "functions.php"; ?>

	<!-- Left section : Custom Picture -->
	<?php MysqlConnect("Home", 3,"id='HeaderPic'", '<img id="HeaderPic" src="/static/media/HomeFront/web-header-1140x333-2.jpg">');?>

	<!-- End of the Left Section -->
			
	<!-- Right section : Horizontal Nav Bar, with left and right key functions -->
	<div id="siderBar2" class="sidebar" align="center">
	<!--<img class="headerPics" src="/static/media/HomeFront/web-header-1140x333-2.jpg">-->
	  		<nav>
		    		<ul>
			      		<li><a id="bookmark-this"  href="#" rel="sidebar" title="大连峻达医药有限公司-首页"><?php MysqlConnect("Home", 6); ?>收藏本页</a></li>
			      		<li><a><?php MysqlConnect("Home", 7); ?>登陆</a></li>


			      		<!-- don't do it, since it is a huge security risk -->
			      		<!--<li><a>-->
			      		<!--?php MysqlConnect("Home", 8); ?-->
			      		<!--设为首页</a></li-->

		    		</ul>
	    	</nav>
	 </div>
	  <!-- End of the Right Section -->
	  
	 <div id="sidebar1" class="sidebar" align="center">
	
	  		<nav>
		    		<ul>
			      		<li><a id="Home" href="/index.php" alt="home.html">主页</a></li>
			      		<li><a id="About" href="/templates/sites/about.php" alt="about.html">公司简介</a></li>
			    		<!--li><a id="Product" href="/templates/sites/product.php" alt="product.html">产品介绍</a></li-->
			      		<li><a id="Hire" href="/templates/sites/hire.php" alt="hire.html">诚招英才</a></li>
			      		<li><a id="Comment" href="/templates/sites/comment.php" alt="comment.html">在线留言</a></li>
			      		<li><a id="Contact" href="/templates/sites/contact.php" alt="contact.html">联系我们</a></li>
		    		</ul>
	    	</nav>
	 </div>

</header>

<div id="placeholderTop">

</div>