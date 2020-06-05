<?php
//error_reporting(E_ALL);

include "controller/ProductsController.php";
include "services/DatabaseService.php";
include "model/DBGatewayModel.php";
include "model/ProductTypesModel.php";
include "model/ProductsModel.php";
include "view/JsonView.php";



define("DBHost" , "localhost");
define("DBName", "beb_test_05052020");
define("charset", "utf8");
define("DBUserName", "root");
define("DBPassword", "" );
