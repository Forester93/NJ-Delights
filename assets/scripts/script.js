let pageContent=$('#products');

function buildPage(){

    for(let i=0;i<products.length;i++){
        let product=$('<section>')
            .addClass('col-3 custom-card bg-custom')
            .append('<br>')
            .append('<br>')
            .append('<br>')
            .append($('<h2>')
                .text(products[i].name)
            )
            .append($('<img>')
                .addClass('product-image')
                .attr('src','./assets/images/'+products[i].photo)
                .attr('alt',products[i].description)
            )
            .append($('<article>')
                .addClass('card-body')
                .append($('<p>')
                    .addClass('card-text')
                    .text(products[i].description))
            )
            .append($('<span>')
                .addClass('price')
                .text("$"+products[i].price)
            )
            .append($('<form>')
                .addClass('row justify-content-center align-items-center')
                .attr('product',i)
                .append($('<button>')
                    .addClass('col-2 removeFromCart')
                    .attr('product',i)
                    .attr('price',products[i].price)
                    .text('➖')
                )
                .append($('<button>')
                    .addClass('col-2 addToCart')
                    .attr('product',i)
                    .attr('price',products[i].price)
                    .text('➕')
                )    
            )
                        /* <section class="col-3 custom-card bg-custom">
                            <br><br><br>
                            <h2>Arrangement 1</h2>
                            <img class="product-image" src="./assets/images/Product (1).jpg" alt="Card image cap">
                            <article class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </article>
                            <span class='price'>$34.99</span>
                            <form product='product1' class='row justify-content-center align-items-center'>
                                <button class='col-2 removeFromCart' id='removeproduct1'>➖</button>
                                <button class='col-2 addToCart'  id='addproduct1'>➕</button>
                            </form>
                        </section> */
        pageContent.append(product);
    }
}

buildPage();