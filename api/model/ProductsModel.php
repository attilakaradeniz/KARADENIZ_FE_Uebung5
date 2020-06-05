<?php


class ProductsModel
{
    private $dbGateway;

    public function __construct()
    {
        $this->dbGateway = new DBGatewayModel();
    }


    public function showProductsByTypeId($typeId){
//        $statement = "SELECT t.name AS productTypeName, p.name AS articleName FROM product_types t JOIN products p ON t.id = p.id_product_types WHERE t.id =" . $typeId; // ORIGINAL
      $statement = "SELECT t.name AS productTypeName, p.name AS articleName, p.id AS product_id FROM product_types t JOIN products p ON t.id = p.id_product_types WHERE t.id =" . $typeId; // TEST
        $products = $this->dbGateway->query($statement);
        //print_r($products);  // TEST
        return $products;
    }
}