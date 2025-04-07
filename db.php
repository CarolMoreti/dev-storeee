<?php
    //variavel para o servidor do banco
    $host="localhost";
    //variavel para o usuario de acesso ao banco
    $user = "root";
    //variavel para a senha do usuario
    $password = "";
    //variavel para o nome do banco
    $dbname = "devstore";
    //tenta conectar ao banco
    try{
        $pdo = new PDO("mysql:host=$host;dbname=$dbname;"
        , $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, 
        PDO::ERRMODE_EXCEPTION);
    }catch (PDOException $e){
        die("Falha na conexão: ". $e->getMessage());
    }
?>