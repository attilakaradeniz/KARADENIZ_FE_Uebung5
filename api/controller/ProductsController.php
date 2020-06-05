<?php


class ProductsController
{
    private $jsonView;

    public function __construct()
    {
        $this->jsonView = new JsonView();
    }

    public function route()
    {
        $action = filter_input(INPUT_GET, 'action', FILTER_SANITIZE_STRING);

        switch ($action) {
            case 'listTypes' :
                //echo "TEST: case : listTypes"; // TEST
                $this->showProductTypes();
                break;
            case 'listProductsByTypeId' :
                //echo "TEST case : listProductsByTypeId"; // TEST
                $typeId = filter_input(INPUT_GET, 'typeId', FILTER_SANITIZE_STRING);
                $this->showProductsByTypeId($typeId);
                break;
            default :
                $this->jsonView->output(
                    [
                        "Error" => "Interface not found!",
                        "Possible parameters :" => "action=(listTypes, listProductsByTypeId&typeId="
                    ]);
                return false;

        }
    }

    private function showProductTypes()
    {
        $productTypesModel = new ProductTypesModel();
        $types = $productTypesModel->getProductTypes();

        $url = "http://localhost/KARADENIZ_FE_Uebung5/api/index.php?action=listProductsByTypeId&typeId=";
        foreach ($types as &$type) {
            $type['url'] = $url . $type['id'];
        }
        $this->jsonView->output($types);

    }

    private function showProductsByTypeId($typeId)
    {
        $productModel = new ProductsModel();
        $products = $productModel->showProductsByTypeId($typeId);
            // print_r($products); // TEST
        $url = "http://localhost/KARADENIZ_FE_Uebung5/api/index.php?action=listTypes";
        foreach ($products as &$product) {
            $product['url'] = $url;
            // print_r($product); // TEST
        }
        $this->jsonView->output($products);
        //print_r($products); // TEST

    }

}