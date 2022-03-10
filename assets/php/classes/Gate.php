<?php
// This is your gate to the website, it handles your register & Login
class Gate {
    private $errorArray = array();
    const ERRORS = [
        "shortUN" => "Username must be between 5 & 25 Characters",
        "shortFN" => "Your First Name must be between 2 & 25 Characters",
        "shortLN" => "Your Last Name must be between 2 & 25 Characters",
        "differentEM" => "Your Emails Do Not Match",
        "invalidEM" => "Your Email is invalid",
        "shortPW" => "Your Password must be at least 8 Characters",
        "differentPW" => "Your Passwords Do Not Match",
        "alphanumericPW" => "Your Password can only contain numbers and letters",
    ];

    function register($un,$fn,$ln,$em,$em2,$pw,$pw2) {
        $this -> validateUsername($un);
        $this -> validateFirstName($fn);
        $this -> validateLastName($ln);
        $this -> validateEmails($em,$em2);
        $this -> validatePasswords($pw,$pw2);

        if(empty($this->errorArray)) {
            echo "weeeee";
        }
        else {
            return false;
        }
    }

    private function validateUsername($un) {
        if(strlen($un) < 5 || strlen($un) > 25) {
            array_push($this -> errorArray, self::ERRORS['shortUN']);
            return;
        }
    }
    
    private function validateFirstName($fn) {
        if(strlen($fn) < 2 || strlen($fn) > 25) {
            array_push($this -> errorArray, self::ERRORS['shortFN']);
            return;
        }

    }

    private function validateLastName($ln) {
        if(strlen($ln) < 2 || strlen($ln) > 25) {
            array_push($this -> errorArray, self::ERRORS['shortLN']);
            return;
        }

    }

    private function validateEmails($em1,$em2) {
        if(!filter_var($em1,FILTER_VALIDATE_EMAIL)) {
            array_push($this -> errorArray, self::ERRORS['invalidEM']);
            return;
        }

        if($em1 !== $em2) {
            array_push($this -> errorArray, self::ERRORS['differentEM']);
            return;
        }

    }

    private function validatePasswords($pw1,$pw2) {
        $pwReg = "/^[a-zA-Z0-9]+$/";

        if(strlen($pw1) < 8) {
            array_push($this -> errorArray, self::ERRORS['shortPW']);
            return;
        }

        if(!preg_match($pwReg,$pw1)) {
            array_push($this -> errorArray, self::ERRORS['alphanumericPW']);
            return;
        }

        if($pw1 !== $pw2) {
            array_push($this -> errorArray, self::ERRORS['differentPW']);
            return;
        }

    }

}

$account = new Gate;

?>