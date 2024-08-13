<?php

$requestedpage = $_SERVER["REQUEST_URI"];
$router = str_replace('/SantaniWebsite/', "", $requestedpage);
if($router == "#index") {
    include "index.php";
} else if($router == "#about") {
    include "about.php";
} else if($router == "blog") {
    include "blog.php";
} else if($router == "blog_details") {
    include "blog_details.php";
} else {
    include "404.php";
}