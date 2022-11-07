<?php

$_POST = json_decode(file_get_contents("php://input"), true); // only for 222 variant

echo var_dump($_POST);