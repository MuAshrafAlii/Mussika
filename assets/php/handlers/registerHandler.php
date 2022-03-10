<?php
require_once("./assets/php/classes/Gate.php");

if(isset($_POST['regBtn'])) {
    extract($_POST);

    $regUserName = sanitizeString($regUserName);
    $regFirstName = sanitizeNames($regFirstName);
    $regLastName = sanitizeNames($regLastName);
    $regEmail = sanitizeString($regEmail);
    $regEmail2 = sanitizeString($regEmail2);
    $regPw = sanitizePw($regPw);
    $regPw2 = sanitizePw($regPw2);

    $regSuccessfully = $account ->register($regUserName,$regFirstName,$regLastName,$regEmail,$regEmail2,$regPw,$regPw2);
}

function sanitizeString($input) {
    $input = strip_tags($input);
    $input = htmlentities($input);
    $input = str_replace(" ", "",$input);

    return $input;
}

function sanitizeNames($input) {
    sanitizeString($input);
    $input = strtolower($input);
    $input = ucfirst($input);

    return $input;
}

function sanitizePw($input) {
    $input = strip_tags($input);
    $input = htmlentities($input);

    return $input;
}

?>