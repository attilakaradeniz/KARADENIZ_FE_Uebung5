<?php

//session_start();
// session_destroy(); // ------------------------------------------- IF ANYTHING GOES WRONG USE THIS ------------------------------------ /
// ----------------------------------------------------------------------DONT FORGET TO DISABLE -----------------------------------------/
include "config/config.php";

$productsController = new ProductsController();
$productsController->route();
