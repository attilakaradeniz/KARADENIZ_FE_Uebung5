class Products {

    constructor() {
        this.categoriesTable = $('#categoriesTable').find('tbody');
        this.productsTable = $('#productsTable').find('tbody');
    }


    initEvents(){
        let that = this;
        $('#load-Categories').on('click', function () {
            that.getCategories();
        });

        $('#clear-Table').on('click', function () {
            that.productsTable.empty();
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

    // getproductsWithId(){
    //     $.ajax({
    //        url:
    //     });
    // }

    fillProducts(response){
        let that = this;
        that.clearTable(that.productsTable);
        for(let i in response) {
                let product = response[i];
                let tr = $("<tr></tr>");
//            tr.append("<td>" + product.articleName + "</td>");
            tr.append("<td id='pId'>" + product.product_id + "</td><td id='pName'>" + product.articleName + "</td></td>");
                this.productsTable.append(tr);
                // td.on('click', function () {
                //     alert("MALERT");
                // });
        }
        console.log(response);
    }

    clearTable($table){
        $table.empty();
    }


}