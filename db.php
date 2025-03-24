<?php

$host="localhost";
$user="root";
$password="";
$dbname="devstore";

try{
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf-8", $user, $password);
    $pdo->setAtribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOEXCEPTION $e){
    die("Falha na conexão: ".$e->getMessage)
}
?>