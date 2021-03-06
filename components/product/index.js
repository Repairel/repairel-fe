import PropTypes from 'prop-types';
import _ from 'lodash';
import { Rating } from '@components/productInfo/ProductInfo.style';
import { Circle, CircleDiv } from '@components/compare/Compare.style';
import Slider from './Slider';
import Leaf from '../../public/leaf.svg';
import Material from '../../public/material.svg';
import materialProcessing from '../../public/material-processing.svg';
import Manufacturing from '../../public/manufacturing.svg';
import Assembly from '../../public/assembly.svg';
import Use from '../../public/use.svg';
import Disposal from '../../public/disposal.svg';


import {
  AddToCart,
  MainInfo,
  SoldOut,
  EthicsList,
  EthicsListItem,
  EthicsImage,
  EthicsCaption,
  ProductTitle,
  ProductSize,
  ProductHeading,
  Wishlist,
  ButtonContainer
} from './Product.style';

const Product = ({ product, url }) => {
  const icons = {
    material: Material,
    material_processing: materialProcessing,
    manufacturing: Manufacturing,
    assembly: Assembly,
    use: Use,
    disposal: Disposal,
  };

  const categories = Object.keys(product.ethics_and_sustainability);
  const ethics = [];
  for (let category of categories.slice(1)) {
    ethics.push([
      category,
      product.ethics_and_sustainability[category],
      icons[category] || Leaf,
    ]);
  }
  const handleCircles = (int) => {
    let array = [];
    _.times(int, (i) => {
      array.push(<Circle int={int} key={i} />);
    });
    return array;
  };
  const ethicsRender = (ethics) => {
    return ethics.map((ethic) => {
      return (
        <EthicsListItem key={ethic[0]}>
          <EthicsImage src={ethic[2]} />
          <EthicsCaption>{ethic[0].split('_').join(' ')}</EthicsCaption>
          <CircleDiv int={ethic[1]}>{handleCircles(ethic[1])}</CircleDiv>
        </EthicsListItem>
      );
    });
  };

  return (
    <>
      <Slider images={product.images} />
      <div
        className='product'
        style={{
          padding: '1rem',
        }}
      >
        <MainInfo>
          <div>
            <ProductTitle className='product__title'>
              {product.name} <ProductSize>/ size {product.Size}</ProductSize>
            </ProductTitle>
            <p className='product__price'>£ {product.price}</p>
          </div>
          <Rating title={'Overall ethics rating'} rating={product.rating}>{product.rating}</Rating>
        </MainInfo>
        <ButtonContainer className='product__price-button-container'>
          {product.stock ? (
            <AddToCart
              className='snipcart-add-item product__button'
              data-item-id={product.id}
              data-item-name={product.name}
              data-item-price={product.price}
              data-item-url={`https://84b827bf9943.ngrok.io${url}`}
              data-item-image={product.images[0].url}
              data-item-custom1-name='Size'
              data-item-custom1-options={product.Size}
            >
              Add to cart
            </AddToCart>
          ) : (
            <SoldOut>Sold Out</SoldOut>
          )}
          <a href={`mailto:repairelhub@gmail.com?subject=Wishlist&body=I would like to add ${product.name} to my wishlist`}>
          <Wishlist>Add to wishlist</Wishlist>
          </a>
        </ButtonContainer>
        <ProductHeading>Description</ProductHeading>
        <p className='product__description'>{product.description}</p>
        <ProductHeading>Ethics and Sustainability</ProductHeading>
        <EthicsList>{ethicsRender(ethics)}</EthicsList>
      </div>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  url: PropTypes.string,
};
export default Product;
