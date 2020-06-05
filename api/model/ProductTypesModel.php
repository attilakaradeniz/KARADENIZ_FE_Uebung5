<?php


class ProductTypesModel
{
    private $dbGateway;

    public function __construct(){
        $this->dbGateway = new DBGatewayModel();
    }

    public function getProductTypes(){
        $statement = "SELECT id, name FROM product_types ORDER BY name";
        return $this->dbGateway->query($statement);
    }


}