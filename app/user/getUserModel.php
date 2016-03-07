<?php
include("../../private/connexion.php");
header('Content-Type: application/json; charset=utf-8');

$link = mysqli_connect($serverBD, $userBD, $passwordBD, $tableBD);

if (mysqli_connect_errno()) {
printf("Échec de la connexion : %s\n", mysqli_connect_error());
exit();
}

mysqli_set_charset($link, 'utf8');

$query = "SELECT * FROM user WHERE id='1'";
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