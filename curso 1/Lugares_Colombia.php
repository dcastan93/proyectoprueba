<?php
function placesRecommenation($condition = "", $question = ""){
    $wether = array("Bogotá" => "cold", "Monteria" => "hot", "Medellin" => "mild")
    $ubication = ("Guajira" => "Norte", "Leticia" => "Sur", "Sanrtander" => "este", "Medellin"=> "Oeste")
    $tourism = ("Santa Marta" => "sea", "Villavicencio"=> "Plains", "Rioacha" => "desert", "Quindio"=> "valley")

    switch($condition) {
        case "wether":
            return array_search("wether", $question);
        break;
        case "ubication":
            return array_search("ubication", $question);
        break;
        case "tourism":
            return array_search("tourism", $question);
        break;
        default:
            echo "Welcome to Colombia"
    }


} 