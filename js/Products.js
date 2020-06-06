class Products {

    constructor() {
        this.categoriesTable = $('#categoriesTable').find('tbody');
        this.productsTable = $('#productsTable').find('tbody');
        this.cartTable = $('#cartTable').find('tbody');
    }


    initEvents(){

        let that = this;
        $('#load-Categories').on('click', function () {
            that.getCategories();
            $('#categoriesTable').css("visibility", "visible");
        });

        $('#clear-Table').on('click', function () {
            that.productsTable.empty();
            $('#productsTable').css('visibility', 'hidden');

        });

        $("#cart-Button").on("click", function () {
            //alert("go to pay clicked");
            console.log('hops');
        });

        $("#clear-Basket").on("click", function () {
            //alert("go to pay clicked");
            that.cartTable.empty();
            $('#cartTable').css('visibility', 'hidden');
        });
    }

    getCategories(){
        let that = this;
        $.ajax({
            url: "http://localhost/KARADENIZ_FE_Uebung5/api/index.php?action=listTypes",
            method: "GET",
            success: function (response) {
                that.fillCategories(response);
            },
            error: function (errorData) {
                console.log("error from AJAX: ", errorData);
            }
    });
    }

    fillCategories(response){
        let that = this;
        that.clearTable(that.categoriesTable);
        for(let i in response){
            let productType = response[i];
            let tr = $("<tr></tr>");
            tr.append("<td>" + productType.id + "</td>");
            tr.append("<td>" + productType.name + "</td>");

            tr.on('click', function () {
                $('#productsTable').css('visibility', 'visible');
                // $('#cartTable').css('visibility', 'visible');
                that.getProducts(productType.id);
            });
            that.categoriesTable.append(tr);
        }


    }

    getProducts(typeId){
        let that = this;

        $.ajax({
            url: "http://localhost/KARADENIZ_FE_Uebung5/api/index.php?action=listProductsByTypeId&typeId=" + typeId,
            type: "GET",
            success: function(response){
                that.fillProducts(response);
            },
            error: function (errorData) {
                    console.log("Error: ", errorData);
            }
        });
    }
    fillProducts(response){
        let that = this;
        that.clearTable(that.productsTable);
        for(let i in response) {
                let product = response[i];
                let tr = $("<tr></tr>");
//            tr.append("<td>" + product.articleName + "</td>");
            tr.append("<td>" + product.price + " &euro; </td>");
            tr.append("<td>" + product.articleName + "</td>");
                this.productsTable.append(tr);


        }
        // console.log(response);

        $('#productsTable td').on('click', function (event) {
                //event.stopPropagation();
             //console.log(event.target.parentNode.firstChild.innerHTML); // gives product id
            // console.log(event.target.innerHTML); gives content of clicked -> product name
            // console.log("response[0]: ", response[0]);
            // console.log("response[0].product_id: ", response[0].product_id);
            // console.log("response: ", response);

            $('#cartTable').css('visibility' , 'visible');
            //that.addProductToCartView(event.target.parentNode.firstChild.innerHTML, event.target.innerHTML );
            let product = "<td>" + event.target.parentNode.firstChild.innerHTML + "</td><td>" + event.target.innerHTML + "</td>";
            //let product = "<tr>" + event.target.parentNode.innerHTML + "</tr>";
            //let product = "<td>" + event.target.innerHTML + "</td>";

            //let product = event.target.parentNode;
            that.addProductToCartView(product);

        });
    }

    // addProductToCartView(id, productName){
    //     let that = this;
    //     let tr = $("<tr></tr>");
    //     tr.append("<td>" + id + "</td><td>" + productName + "</td>");
    //     this.cartTable.append(tr);
    //
    //     $('#cartTable td').on('click', function (event) {
    //         event.target.parentNode.remove();
    //     });
    // }


    addProductToCartView(product){
        let that = this;
        let tr = $("<tr></tr>");

        tr.append(product);
        that.cartTable.append(tr);

        $('#cartTable td').on('click', function (event) {
            event.target.parentNode.remove();
        });
    }

    clearTable($table){
        $table.empty();
    }


}