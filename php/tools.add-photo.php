<?php
/*------------------------------------*\
    #SECTION-IMAGE-COPYING
    processing images (resize and copy)
\*------------------------------------*/
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

$url      = trim($_GET['photo_url']);
$tour_id  = $_GET['tour_id'];

$name_base = date("YmdHis");


function load_img($filepath) 
{
    global $image;
    $type = @getimagesize($filepath); 
    $allowed_types = array(1, 2, 3, 4); // gif, jpg, png, bmp
    
    if (!in_array($type[2], $allowed_types)) { 
        return false; 
    } 
    
    switch ($type[2]) { 
        case 1 : 
            $image = imageCreateFromGif($filepath); 
        break; 
        case 2 : 
            $image = imageCreateFromJpeg($filepath); 
        break; 
        case 3 : 
            $image = imageCreateFromPng($filepath); 
        break; 
        case 4 : 
            $image = imageCreateFromBmp($filepath); 
        break; 
    }  
    
    if ($image != "") {return true;} else {return false;};  
}

function resize_img($max_height, $flag, $name_base) 
{
    global $image, $new_img; 
    
    $img_width      = imagesx($image);
    $img_height     = imagesy($image);
    $ratio          = $img_width / $img_height;

    $new_img_width  = $max_height*$ratio;
    $new_img_height = $max_height;

    $new_img = imagecreatetruecolor($new_img_width, $new_img_height);
    imagecopyresampled($new_img, $image, 0, 0, 0, 0, 
                       $new_img_width, $new_img_height, 
                       $img_width, $img_height);
    imagejpeg($new_img, '../tour-img/' . $flag . $name_base . '.jpg');
}

if ($url && $url !== "") {
    if (load_img($url)) {
        resize_img(500, "h", $name_base);
        
        // resize image for preview
        if ($tour_id != '') {
            resize_img(460, "", $tour_id);
        }
    } else {
        $error_message = "Can't copy the image: " . $url;
    }  
}    

@imagedestroy($image);
@imagedestroy($new_img);


if ($error_message != ""||$url == "") {
    $flag = "error";
    $file_name = "";
} else {
    $flag = "success";
    $file_name = "h" . $name_base . ".jpg";
}

if ($url == "") {
    $error_message = "There isn't any link!";
}


$JSONobj = '{"type":"' . $flag . '","message":"' . $error_message . 
           '","file":"' . $file_name . '"}';

echo $JSONobj;
//echo $tour_id;
?>