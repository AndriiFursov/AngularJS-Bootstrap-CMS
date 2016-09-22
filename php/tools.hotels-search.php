<?php
/*------------------------------------*\
    #SECTION-HOTELS-SEARCH
\*------------------------------------*/

// connect database
include "connect.php";

$incomingData = trim(strtoupper($conn->real_escape_string($_GET['hotel_name'])));

if ($incomingData === "") { die('[]'); }

$hotels_list = array();

class Hotel {
    var $id;
    var $name;
    var $class;
    var $country;
}

function compare ($value1, $value2) {
  if ($value1[0] == $value2[0]) return 0;
  return ($value1[0] < $value2[0])? 1: -1;
}


// make countries array
$countries = array();

class Country {
    var $id;
    var $name;
}

$sql = "SELECT * FROM `countries`";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $country = new Country;
        $country->id = $row["eng_name"];
        $country->name = $row["rus_name"];
        array_push($countries, $country);
    }
}



// make result array
$incoming_parts = explode(" ", trim($incomingData));

$sql = "SELECT h_code, h_name, h_country, h_class FROM `hotels`";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $extracted_parts = explode(" ", $row[h_name]);
        $number_of_overlaps = count(array_intersect($extracted_parts, $incoming_parts));
        
        if ($number_of_overlaps > 0) {
            $country_name = null;
            foreach($countries as $elem) {
                if ($row["h_country"] === $elem->id) {
                    $country_name = $elem->name;
                    break;
                }
            }  
            
            $hotel = new Hotel;
            $hotel->id = $row["h_code"];
            $hotel->name = $row["h_name"];
            $hotel->class = $row["h_class"];
            $hotel->country = $country_name;
            array_push($hotels_list, array($number_of_overlaps, $hotel));
        }
    }
}

@usort($hotels_list, compare); 

echo json_encode($hotels_list);
?>