<!DOCTYPE html>
<html lang="fr" ng-app="resuMEApp">
<head>
    <meta charset="UTF-8">
    <title>resuME</title>
    <link rel="stylesheet" href="assets/css/style-main.css">
    <link rel="stylesheet" href="assets/css/cv.css">
    <link rel="stylesheet" href="assets/font/fontello/css/resume.css">
</head>
<body >
<nav>
    <img src="assets/img/logo.PNG" alt="">
    <ul class="menu">
        <li><a href="#/user"><i class="icon-user"></i></a></li>
        <li><a href="#/experiences"><i class="icon-work"></i></a></li>
        <li><a href="#/formation"><i class="icon-formation"></i></a></li>
        <li><a href="#/competence"><i class="icon-skill"></i></a></li>
        <li><a href="#/loisir"><i class="icon-hobbies"></i></a></li>
    </ul>
</nav>



<div class="main">
    <div class="sections" ng-view>

    </div>

    <div class="container-preview">
        <div ng-controller="previewController" class="preview">
            <div ng-include="'app/preview/previewView.html'"></div>
        </div>
    </div>
    <div class="clear"></div>

</div>

<script type="text/javascript" src="assets/js/angular.js"></script>
<script type="text/javascript" src="assets/js/angular-route.js"></script>
<script type="text/javascript" src="assets/js/angular-slugify.js"></script>
<script type="text/javascript" src="app/app.js"></script>
<script type="text/javascript" src="app/user/userController.js"></script>
<script type="text/javascript" src="app/user/userService.js"></script>
<script type="text/javascript" src="app/experience/experienceService.js"></script>
<script type="text/javascript" src="app/experience/experienceController.js"></script>
<script type="text/javascript" src="app/formation/formationController.js"></script>
<script type="text/javascript" src="app/formation/formationService.js"></script>
<script type="text/javascript" src="app/skill/skillController.js"></script>
<script type="text/javascript" src="app/skill/skillService.js"></script>
<script type="text/javascript" src="app/hobby/hobbyController.js"></script>
<script type="text/javascript" src="app/hobby/hobbyService.js"></script>
<script type="text/javascript" src="app/preview/previewController.js"></script>


</body>
</html>