<?php
include("../../private/connexion.php");
header('Content-Type: application/json; charset=utf-8');

$link = mysqli_connect($serverBD, $userBD, $passwordBD, $tableBD);

if (mysqli_connect_errno()) {
    printf("Échec de la connexion : %s\n", mysqli_connect_error());
    exit();
}

mysqli_set_charset($link, 'utf8');

$query = "SELECT liste_section.* FROM section, cv, liste_section WHERE liste_section.section_id=section.id AND section.cv_id=1 AND section.type = 'exp'";
if ($result = mysqli_query($link, $query)) {
    $table = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $table[] = $row;
    }
    if (!$json = json_encode($table)) {
        echo "Problème d'encodage";
    }
    mysqli_free_result($result);
} else {
    echo "Problème requête";
}

echo $json;
?>