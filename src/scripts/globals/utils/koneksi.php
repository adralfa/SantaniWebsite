<?php
    $serverName = "localhost:8080";
    $userName = "root";
    $password = "";
    $database = "santani";

    $koneksi = mysqli_connect($serverName, $userName, $password, $database);

    if(!$koneksi) {
        die("Koneksi Gagal : " . mysqli_connect_error());
    }
?>