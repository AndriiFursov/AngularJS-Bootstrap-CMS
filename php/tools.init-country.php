<?php
/*------------------------------------*\
    #SECTION-INIT-COUNTRY
\*------------------------------------*/

// connect database
include "connect.php";

$selected_country = $conn->real_escape_string($_GET['country']);

class City {
    var $id;
    var $name;
    var $region;
}
$country = array();

$sql = "SELECT name_eng, name_rus, country, region FROM `cities` WHERE country='" . $selected_country . "' ORDER BY name_rus ASC";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $city = new City;
        $city->id = $row["name_eng"];
        $city->name = $row["name_rus"];
        $city->region = $row["region"];
        array_push($country, $city);
    }
}

echo json_encode($country);
?>