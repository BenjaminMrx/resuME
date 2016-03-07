<?php
    if(isset($_GET['lang'])){

        if ($_GET['lang']=='fr') {
            include('lang/fr-lang.php');
        }

        else if ($_GET['lang']=='en') {
            include('lang/en-lang.php');
        }
    }
    else {
        include('lang/fr-lang.php');
    }
?>