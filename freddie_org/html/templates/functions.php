<?php

	function MysqlConnect($site, $id=1, $eid="", $default="Database not found") {
		$user_name = "root";
		$password = "qwe33162yuiF+++!!!123mysql";
		$database = "大连峻达医药有限公司";
		$server = "localhost";

		$db_handle = new mysqli($server, $user_name, $password, $database);

		if ($db_handle->connect_error) {
		    die("Connection failed: " . $db_handle->connect_error);
		} 

		//For Chinese reading in MySQL
		$db_handle->set_charset("SET NAMES 'UTF8'");


			
			switch($site){

				case "Home":

					$SQL = "SELECT * FROM `头（图片）` where `id`=".$id.";";
					$result = $db_handle->query($SQL);

					$db_field = $result->fetch_assoc();

					echo '<img '.$eid.' src="data:image/png;base64,'.base64_encode( $db_field['图片'] ).'"/>';

					break;


				case "HomeBackground":

					$SQL = "SELECT * FROM `头（图片）` where `id`=".$id.";";
					$result = $db_handle->query($SQL);

					$db_field = $result->fetch_assoc();

					echo 'background-image:url(data:image/png;base64,'.base64_encode( $db_field['图片'] ).');';
					
					break;

/*					
				case "HomeSectionAbout":

					$SQL = "SELECT * FROM `主页（公司简介）` where `id`=1;";
					$result = $db_handle->query($SQL);

					$db_field = $result->fetch_assoc();




					echo '<div id="aboutText" align="center">
							<li id="about1"><span>'.$db_field['标题'].'</span></li>
							<li id="about2"><span>'.$db_field['内容'].'</span></li>

							<a href="templates/sites/about.php" style="text-decoration:none;">
								<li id="about3"><span>'.$db_field['更多'].'</span></li>
							</a>
						</div>

						<div id="AboutBee">
							<img src="/static/img/HomeSecondAbout.png">
						</div>
						
						<div id="AboutPics">
							<img src="data:image/png;base64,'.base64_encode( $db_field['图片'] ).'">
						</div>


						';

					break;
*/
					/*
				case "HomeThirdForm":
					$SQL = "SELECT * FROM `主页（产品介绍）` where `id`=1;";
					$result = $db_handle->query($SQL);

					$db_field = $result->fetch_assoc();
					$pic = $db_field['图片'];


					$content = '<div class="botTop"><img src="data:image/png;base64,'.base64_encode( $pic ).'"/><span>'.$db_field['标题'].'</span><span style="color:gray;">'.$db_field["副标题"].'</span>';
					*/

					// Uncomment to enable the searching form
					/*
					$SearchForm = '<a href="/templates/sites/product.php">'.$db_field['更多'].'</a><!-- parameter in url? --><form action="templates/functions.php" method="post" enctype="multipart/form-data"><input style="width:300px" type="text" name="product" placeholder="'.$db_field['搜索框默认字'].'" /><input style="width:100px" type="submit" value="'.$db_field['搜索键上的字'].'"></form>';

					$content .= $SearchForm;
					*/
/*
					$content .= '</div>';

					echo $content;
					//MysqlConnect("DatabaseTable");
					break;
*/

/*
				case "DatabaseTable":

					$SQL = "SELECT * FROM `产品数据库`;";
					$result = $db_handle->query($SQL);

					$db_field = $result->fetch_assoc();
			
					$content='<table align="center"><tr>';
					foreach (array_keys($db_field) as $key) {
						$content.='<th>'.$key.'</th>';
					}

					$content.="</tr>";

					$content.='<tr>';
								
					foreach ($db_field as $value) {

						$content.='<td>'.$value.'</td>';
					}

					$content.='</tr>';

					while ( $db_field = $result->fetch_assoc() ) {


								$content.='<tr>';
								
								foreach ($db_field as $value) {

									$content.='<td>'.$value.'</td>';
								}

								$content.='</tr>';
					}

					echo $content.'</table>';

					break;

*/
				case "HomeForHire":

					$SQL = "SELECT * FROM `主页（诚招英才）` where `id`=1;";
					$result = $db_handle->query($SQL);

					$db_field = $result->fetch_assoc();


					echo '<div  id="HomeForHire" align="center">
						<li style="width:60vh; font-size:48px; padding-top:5%; "><span>'.$db_field['标题'].'</span></li>
						<li style="width:45vh; font-size:32px; margin-top:10px;"><span>'.$db_field['内容'].'</span></li>
						<a href="templates/sites/hire.php" style="text-decoration:none;"><li style="width:45vh; font-size:24px; margin-top:10px; border-style:solid;border-color:white;padding:10px;"><span>'.$db_field['更多'].'</span></li></a>						
							
					</div>';

					break;

				case "JsonFromDb":

					$SQL = "SELECT * FROM ".$id." ". $eid. ";";
					$result = $db_handle->query($SQL);

					$tmp=array();

					while ( $db_field = $result->fetch_assoc() ) {


						$tmp2=array();

						foreach (array_keys($db_field) as $key) {

							if($key === '图片'){

								//not sure what to do

							}else{
								$tmp2[$key]=$db_field[$key];
							}
						}

						$tmp[]=$tmp2;
							
					}

					echo json_encode($tmp);

					break;


					case "JsonPicFromDb":

						header('Content-type:image/png');

						$SQL = "SELECT `图片` FROM ".$id." where `id`=". $eid. ";";
						$result = $db_handle->query($SQL);
						$db_field = $result->fetch_assoc();

						echo $db_field['图片'];

					break;
/*

					header('Content-Type: application/json');
					$SQL = "SELECT * FROM ".$id." ". $eid. ";";
					$result = $db_handle->query($SQL);

					$index=0;

					echo "[";

					while ( $db_field = $result->fetch_assoc() ) {

						if($index>0)
						{
							echo ",";
						}

						echo "{";

						$index2=0;


						foreach (array_keys($db_field) as $key) {

							if($index2>0)
							{
								echo ",";
							}

							echo '"'.$key.'":"'. $db_field[$key].'"';

							$index2++;
						}

						echo "}";

						$index++;

					}

					echo "]";


*/

				case "AboutTitle":

					$SQL = "SELECT * FROM `公司简介` order by id;";
					$result = $db_handle->query($SQL);
			
					$content="";

					while ( $db_field = $result->fetch_assoc() ) {
						$content.="<li><a href=#".$db_field['id']."><span>".$db_field['标题']."</span></a></li>";
					}

					echo $content;

					break;

				case "AboutContent":

					$SQL = "SELECT * FROM `公司简介` where `id`=".$_GET["ino"].";";
					$result = $db_handle->query($SQL);

					$db_field = $result->fetch_assoc();
			
					echo $db_field['内容'];

					break;

				case "HireTitle":

					$SQL = "SELECT * FROM `诚招英才` order by id;";
					$result = $db_handle->query($SQL);
			
					$content="";

					while ( $db_field = $result->fetch_assoc() ) {
						$content.="<li><a href=#".$db_field['id']."><span>".$db_field['职位']." (".$db_field['招聘人数'].")"."</span></a></li>";
					}

					echo $content;

					break;

				case "HireContent":

					$SQL = "SELECT * FROM `诚招英才` where `id`=".$_GET["job"].";";
					$result = $db_handle->query($SQL);

					$db_field = $result->fetch_assoc();

					$cont="";
					if(!empty($db_field['职能类别'])){
						$cont='<span style="font-size:18px;">职能类别 :</span><br><span>'.$db_field['职能类别'].' </span>';
					}

					//echo $db_field['发布时间']."<div class='hireFirst'><div class='hireFirstLeft'><span></span></div><div id='ApplyBtn'><a href='http://localhost/templates/sites/comment.php?Apply=True'>Apply</a></div></div>";

					echo '						

					<div id="HireContent">
						<!-- Position title, Salary, Apply and more -->
							<div class="hireSec">
								<div class="hireSecLeft">
									<h1>'.$db_field['职位'].'</h1>
									<h3 style="color:#2A2A2A">'.$db_field['工作城市'].'</h3>
									<p style="font-size:18px;top:50px;">'.$db_field['招聘公司'].'</p><br>
									<p style="top:80px;">'.$db_field['公司细节'].'</p>
								</div>
								<div class="hireSecRight">
									<a href="/templates/sites/comment.php?Apply=True">
										<div id="ApplyBtn" align=center>
											<span>立刻申请</span>
										</div>
									</a>
									<h1>'.$db_field['工资'].'</h1>
									<div style="position:relative;left:-80px;top:-40px"><img src="/static/img/收藏（诚招英才）.png"><p>收藏</p></div>

								</div>

							</div>

							<!-- #, post date, welfare-->

							<div class="hireSec" style="background:white;">
								<br>
								<span>招聘人数 : '.$db_field['招聘人数'].'</span> 
								<span style="margin-left:100px;">发布日期 : '.$db_field['发布时间'].'</span><br><br>
								<span>'.$db_field['福利'].'</span><br><br>
							</div>


							<!-- details -->
							<div class="hireSec">
								<br>
								<span style="font-size:18px;">职位详细 : </span> <br>

								<span>'.$db_field['职位详细介绍'].' </span><br><br>

								
								'.$cont.'<br><br>
							</div>


							<!-- Contact method and Work location -->
							<div class="hireSec" style="background:white;">
								<br>
								<span style="font-size:18px;">联系方式 : </span> <br>

								<span>'.$db_field['联系方式'].'</span><br><br>

								<span style="font-size:18px;">工作地点 : </span><br>
								<span>'.$db_field['工作地点'].'</span><br><br>
							</div>

						</div>';

					break;

				case "ContactUs":

					$SQL = "SELECT * FROM `联系我们`;";
					$result = $db_handle->query($SQL);
					$content="";

					while ( $db_field = $result->fetch_assoc() ) {
						$content.="<span>".$db_field['标题'].":	".$db_field['内容']."</span><br>";
					}

					echo $content;

					break;

				case "sentComment":

						if(array_key_exists('resume', $_FILES)){

							if ($_FILES['resume']['error'] === UPLOAD_ERR_OK) {
							       echo 'upload was successful';
							} else {
							       die("Upload failed with error code " . $_FILES['resume']['error']);
							}

							$content = file_get_contents($_FILES['resume']['tmp_name']);

							$stmt = $db_handle->prepare('INSERT INTO `在线留言`(`姓名`, `邮箱`, `电话`, `地址`, `内容`, `简历`) VALUES (?,?,?,?,?,?);');
							$stmt->bind_param('ssssss', $_POST['name'], $_POST['email'], $_POST['tel'], $_POST['address'], $_POST['content'], $content);
							$stmt->execute();
						}
						else{

							$stmt = $db_handle->prepare('INSERT INTO `在线留言`(`姓名`, `邮箱`, `电话`, `地址`, `内容`) VALUES (?,?,?,?,?);');
							$stmt->bind_param('sssss', $_POST['name'], $_POST['email'], $_POST['tel'], $_POST['address'], $_POST['content']);
							$stmt->execute();
							header( 'Location: /templates/success.php' ) ;
						}

					break;

				default:

					echo "variable '$site' not defined";

					break;
			}


		$db_handle->close();
		   	
	}


	//HomeBotRightDiv form action handling
/*
	if(isset($_POST['product']))
	{
	   MysqlConnect("HomeBotRightDivForm", 0, 0, $_POST['product']);
	} 
*/

	//About fetching
	if(isset($_GET['ino']))
	{
	   MysqlConnect("AboutContent", 0, 0, $_GET['ino']);
	} 

	//Hire fetching
	if(isset($_GET['job']))
	{
	   MysqlConnect("HireContent", 0, 0, $_GET['job']);
	} 

	//"comment.php" Post validation and others

	if(isset($_POST['name'])&&isset($_POST['content']))
	{
		MysqlConnect("sentComment");
	}

	//----------- End of validations of posting comments, and others?? ---

	//Home Top First section looping pics and headlines. 

	if(isset($_GET['NeedHomeJson']) && $_GET['NeedHomeJson']==="True")
	{
		MysqlConnect("JsonFromDb", "主页（顶端滚动图片及标题和内容）", "order by id");
	}
		

	if (isset($_GET['HomeFirstPic']))
	{
		MysqlConnect("JsonPicFromDb", "主页（顶端滚动图片及标题和内容）", $_GET['HomeFirstPic']);
	}

	// End of the Home Top First section

?>