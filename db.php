<?php

$host="localhost";
$user="root";
$password="";
$dbname="devstore";

try{
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOEXCEPTION $e){
    die("Falha na conexão: ".$e->getMessage);
}
?>