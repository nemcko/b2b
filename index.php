<?php 
if(session_id()) {
	if(isset($_COOKIE['PHPSESSID']) && !empty($_COOKIE['PHPSESSID'])) {session_id($_COOKIE['PHPSESSID']);}
	elseif(isset($_GET['PHPSESSID']) && !empty($_GET['PHPSESSID'])) {session_id($_GET['PHPSESSID']);}
	else {header('Location: index.php'); exit(0);}
}

session_start(); 
if ($_POST && $_POST["ac"]=="log") { 
	require_once 'api/config.php';
	$cfgobj = new clsConfig();
	$config=$cfgobj->getData("cfgusers","api/");
	foreach ($config as $usr){
		if ($usr['UserName']==$_POST["usr"] && $usr['UserPassword']==$_POST["pwd"]) {
			$_SESSION["logged"]=$_POST["usr"];
			break;
		}
	}

// $_SESSION["logged"]=$_POST["usr"];
	
	header("Location: ./");
} elseif ($_POST && $_POST["ac"]=="exit") {
	unset($_SESSION["logged"]); 
	header("Location: ./");
};
?>

<!doctype html>
<html ng-controller="DocsCtrl" lang="sk" ng-strict-di>

<head>
<title>Bigboardy</title>
<meta name="viewport" content="initial-scale=1, maximum-scale=1" />
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="">
<!-- <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"> -->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.6/angular.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.6/angular-animate.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.6/angular-route.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular-aria.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular-messages.min.js"></script>
<script type="text/javascript" src='https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-sanitize.min.js'></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-i18n/1.2.15/angular-locale_sk-sk.js"></script>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-i18n/1.2.15/angular-locale_sk.js"></script> -->
<!--  
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.12.0/ui-bootstrap.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.12.0/ui-bootstrap-tpls.min.js"></script>
<script type="text/javascript" src='http://cdnjs.cloudflare.com/ajax/libs/textAngular/1.1.2/textAngular.min.js'></script>
-->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/angular-material/0.8.3/angular-material.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-material/0.8.3/angular-material.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/angular-material-icons/0.4.0/angular-material-icons.min.js"> -->

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=RobotoDraft:400,500,700,400italic">
<!-- <link rel="stylesheet" href="css/docs.css"> -->
<link rel="stylesheet" href="css/app.css">

<script src="js/docs.js"></script>
<script src="js/app.js"></script>

<link rel="stylesheet" href="css/md-date-time.css">
<script src="js/md-date-time.js"></script>

</head>

<body layout="row">
<?php if (!array_key_exists("logged",$_SESSION)) { ?>
	<div layout="column" tabIndex="-1" role="main" flex>
		<md-toolbar>
			<h1 class="md-toolbar-tools">
				<img src="img/imagewell.png">
				<div class="docs-logotype">Bigboardy</div>
			</h1>
		</md-toolbar> 
		<md-content flex role="navigation" class="md-padding">
		
			<form class="aplLogin" layout="column" layout-align="center center" layout-margin layout-fill layout-padding  action="./" method="post">
					<input type="hidden" name="ac" value="log">
					<h1 class="aplBigtitle">Login</h1>
					<md-input-container flex="60" layout-margin layout-padding>
						<label>Používateľ</label>
						<input name="usr" ng-model="use" required>
					</md-input-container>
					<md-input-container flex="60" layout-margin layout-padding>
						<label>Heslo</label>
						<input type="password" name="pwd" ng-model="pwd">
					</md-input-container>
					<br><br>
					<md-button class="md-raised md-primary">Prihlásiť sa<md-button>
			</form>		

		</md-content>
</div>
<?php } else { ?>
	<md-sidenav class="site-sidenav md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="$media('gt-sm')"> 
		<md-toolbar>
			<h1 class="md-toolbar-tools">
				<a ng-href="#/" layout="row" flex> 
					<img src="img/imagewell.png">
					<div class="docs-logotype">Bigboardy</div>
				</a>
			</h1>
		</md-toolbar> 
		
		<md-content flex role="navigation">
			<ul class="docs-menu">
				<li ng-repeat="section in menu.sections" class="parent-list-item"
					ng-class="{'parentActive' : isSectionSelected(section)}">
					<h2 class="menu-heading" ng-if="section.type === 'heading'"
						id="heading_{{ section.name | nospace }}">{{section.name}}</h2> 
						<menu-link section="section" ng-if="section.type === 'link'"></menu-link> 
						<menu-toggle section="section" ng-if="section.type === 'toggle'"></menu-toggle>
						<ul ng-if="section.children" class="menu-nested-list">
							<li ng-repeat="child in section.children" ng-class="{'childActive' : isSectionSelected(child)}">
								<menu-toggle section="child"></menu-toggle>
							</li>
						</ul>
				</li>
			</ul>
		</md-content>

	</md-sidenav>

	<div layout="column" tabIndex="-1" role="main" flex>
		<md-toolbar>

		<div class="md-toolbar-tools" ng-click="openMenu()">
			<button class="docs-menu-icon" hide-gt-sm aria-label="Toggle Menu">
				<md-icon md-svg-src="img/icons/ic_menu_24px.svg"></md-icon>				
			</button>

			<div layout="row" flex class="fill-height">
				<div class="md-toolbar-item md-breadcrumb">
					<span ng-if="menu.currentPage.name !== menu.currentSection.name"> <span
						hide-sm hide-md>{{menu.currentSection.name}}</span> <span
						class="docs-menu-separator-icon" style="" hide-sm hide-md> <img
							src="img/docArrow.png" alt="" aria-hidden="true">
					</span>
					</span> <span class="md-breadcrumb-page">{{(menu.currentPage |
						humanizeDoc) || 'Angular Material' }}</span>
				</div>

				<span flex></span>
				
				<form action="./" method="post">
					<input type="hidden" name="ac" value="exit">
					<md-button aria-label="Odhlásiť" style="color:whitesmoke; height: 36px;width: 36px;"> 				
						<md-icon md-svg-src="img/exit.svg" alt="Odhlásiť"></md-icon>
						<md-tooltip class="apltooltip">Odhlásiť sa</md-tooltip>
					</md-button>
				</form>
			
			</div>
		</div>

		</md-toolbar>



		<md-content ng-view md-scroll-y flex class="bkg md-padding"></md-content>
	</div>
	<script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-8594346-14', 'auto');
      ga('send', 'pageview');
  </script>
<?php } ?>
  <script src="http://cdn.jsdelivr.net/angular-material-icons/0.4.0/angular-material-icons.min.js"></script>
</body>
</html>
