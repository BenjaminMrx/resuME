<?php

$data = json_decode(file_get_contents("php://input"));

include("../../private/connexion.php");

$link = mysqli_connect($serverBD, $userBD, $passwordBD, $tableBD);

if (mysqli_connect_errno()) {
    printf("Échec de la connexion : %s\n", mysqli_connect_error());
    exit();
}

mysqli_set_charset($link, 'utf8');

$query = "UPDATE user SET firstname = '" . $data->firstname . "', lastname = '" . $data->lastname . "', mail = '" . $data->mail . "', tel = '" . $data->tel . "', address = '" . $data->address . "', postcode = '" . $data->postcode . "', city = '" . $data->city . "', website = '" . $data->website . "', birth_date = '" . $data->birth_date . "'  WHERE id=" . $data->id;


if (mysqli_query($link, $query)) {
    echo "Requête effectuée";
} else {
    echo "Erreur : " . mysqli_error($link);
}
?>