<?php
/*------------------------------------*\
    #SECTION-INIT-HANDLERS
\*------------------------------------*/

// connect database
include "connect.php";

class Result_info {
    var $countries;
    var $vehicles;
    var $currencies;
    var $rooms;
    var $accomodation;
    var $tour_types;
    var $operators;
}

class Element {
    var $id;
    var $name;
}


// countries <--start--
$countries = array();

$sql = "SELECT * FROM `countries`";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $country = new Element;
        $country->id = $row["eng_name"];
        $country->name = $row["rus_name"];
        array_push($countries, $country);
    }
}
// countries --end-->


// vehicle <--start--
$vehicles = array();

$sql = "SELECT * FROM `vehicles` ORDER BY vehicles_priority ASC"; 
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $vehicle = new Element;
        $vehicle->id = $row["vehicles_id"];
        $vehicle->name = $row["vehicles_name"];
        array_push($vehicles, $vehicle);
    }
}
// vehicles --end-->


// currencies <--start--
$currencies = array();

$sql = "SELECT * FROM `currency` ORDER BY number ASC"; 
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $currency = new Element;
        $currency->id = $row["code"];
        $currency->name = $row["symbol"];
        array_push($currencies, $currency);
    }
}
// currencies --end-->


// tour_types <--start--
$tour_types = array();

$sql = "SELECT * FROM `tour_types`";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $type = new Element;
        $type->id = $row["id"];
        $type->name = $row["name"];
        array_push($tour_types, $type);
    }
}
// tour_types --end-->


// rooms <--start--
$rooms = array();

$sql = "SELECT room_name FROM `rooms` ORDER BY room_counter ASC"; 
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        array_push($rooms, $row["room_name"]);
    }
}
// rooms --end-->


// accomodation <--start--
$accomodation = array();

$sql = "SELECT accomodation_name FROM `accomodation` ORDER BY accomodation_counter ASC"; 
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        array_push($accomodation, $row["accomodation_name"]);
    }
}
// accomodation --end-->


// operators <--start--
$operators = array();

$sql = "SELECT operator_name FROM `operator` ORDER BY operator_counter ASC"; 
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        array_push($operators, $row["operator_name"]);
    }
}
// operators --end-->


$result = new Result_info;
$result->countries = $countries;
$result->vehicles = $vehicles;
$result->currencies = $currencies;
$result->rooms = $rooms;
$result->accomodation = $accomodation;
$result->tour_types = $tour_types;
$result->operators = $operators;


echo json_encode($result);
?>