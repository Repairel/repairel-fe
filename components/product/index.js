// import Link from "next/link";
import {
  ProductsWrapper,
  ProductCard,
  ProductImage,
  ProductInfoWrapper,
} from "./Product.style";

import ProductInfo from '@components/productInfo';

const Product = () => {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    fetch("http://35.178.141.40:1337/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const productRender = (products) => {
    return products.map((product) => {
      return (
        <ProductCard key={product.id}>
          <ProductImage
            key={product.id}
            src={product.images[0].url}
          />
          <ProductInfoWrapper>
            <ProductInfo key={product.id} price={product.price} name={product.name} rating={product.rating}/>
          </ProductInfoWrapper>
          </ProductCard>
        
      );
    });
  };

  return <ProductsWrapper>{products && productRender(products)}</ProductsWrapper>;
};

export default Product;