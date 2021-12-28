function Product ({product: {title, price1,price2,image}}) {
    return (
       
        <ul className="products columns-3">
        <li
        className="product type-product post-4295 status-publish last instock product_cat-accessories product_cat-equipment product_tag-blend product_tag-coffee has-post-thumbnail shipping-taxable purchasable product-type-simple" style={{width:"300px",margin:"6.5%"}}
    >
        <a href="#" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
            <img
                width="300"
                height="300"
                src={{backgroundImage: `url(${image})`}}
                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                alt=""
                loading="lazy"
                style={{boxShadow:"0px 0px 0px black !important",borderRadius:"5px"}}
            />
            <h2 className="woocommerce-loop-product__title">{title}</h2>
            <span className="price">
                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">&#36;</span>{price1}</span>
            </span>
        </a>
        <a
            href="?add-to-cart=4295"
            data-quantity="1"
            className="button product_type_simple add_to_cart_button ajax_add_to_cart"
            data-product_id="4295"
            data-product_sku="CRAFT-234-6-1"
            aria-label="Add &ldquo;{title}&rdquo; to your cart"
            rel="nofollow"
        >
            Add to cart
        </a>
    </li>
    </ul>
    
    );
  }
  
  export default Product;
  