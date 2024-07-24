import React, { useState } from 'react';
import styled from 'styled-components';

const ProductList = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedVariant, setSelectedVariant] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const handleAddToCart = (product) => {
        setSelectedProduct(product);
        setModalVisible(true);
    };

    const handleVariantChange = (productId, variant) => {
        setSelectedVariant({ ...selectedVariant, [productId]: variant });
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedProduct(null);
    };

    return (
        <ProductGrid>
            {products.map((product) => (
                <ProductCard key={product.id}>
                    <Image src={product.image} alt={product.title} />
                    <Tags>
                        {product.tags.map((tag, index) => (
                            <Tag key={`${product.id}-${tag}-${index}`}>{tag}</Tag>
                        ))}
                    </Tags>
                    <Title>{product.title}</Title>
                    <Description>{product.description}</Description>
                    <Rating>Rating: {product.rating}</Rating>
                    <VariantSelector
                        value={selectedVariant[product.id] || product.variants[0]}
                        onChange={(e) => handleVariantChange(product.id, e.target.value)}
                    >
                        {product.variants.map((variant, index) => (
                            <option key={`${product.id}-${variant.size}-${index}`} value={variant.size}>
                                {variant.size} - ${variant.price}
                            </option>
                        ))}
                    </VariantSelector>
                    <Discount>{product.discountHint}</Discount>
                    <Tooltip>{product.tooltip}</Tooltip>
                    <Price>
                        ${selectedVariant[product.id]?.price || product.variants[0].price}
                    </Price>
                    <ActionButtons>
                        <AddToCartButton onClick={() => handleAddToCart(product)}>Add to Cart</AddToCartButton>
                        <FavoriteButton>❤️</FavoriteButton>
                    </ActionButtons>
                </ProductCard>
            ))}
            {modalVisible && selectedProduct && (
                <Modal>
                    <ModalContent>
                        <ModalTitle>Product Added to Cart</ModalTitle>
                        <Image src={selectedProduct.image} alt={selectedProduct.title} />
                        <Title>{selectedProduct.title}</Title>
                        <Price>
                            ${selectedVariant[selectedProduct.id]?.price || selectedProduct.variants[0].price}
                        </Price>
                        <Quantity>Quantity: 1</Quantity>
                        <ModalActions>
                            <ContinueShoppingButton onClick={closeModal}>Continue Shopping</ContinueShoppingButton>
                            <GoToCartButton>Go to Cart</GoToCartButton>
                        </ModalActions>
                        <FreeShippingHint>Free shipping on orders over $50!</FreeShippingHint>
                    </ModalContent>
                </Modal>
            )}
        </ProductGrid>
    );
};

export default ProductList;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  width: 300px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Tags = styled.div`
  display: flex;
  gap: 5px;
`;

const Tag = styled.span`
  background-color: #eee;
  padding: 5px;
  font-size: 12px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
`;

const Rating = styled.div`
  font-size: 14px;
  color: #ff9800;
`;

const VariantSelector = styled.select`
  margin: 10px 0;
`;

const Discount = styled.div`
  font-size: 14px;
  color: #f00;
`;

const Tooltip = styled.div`
  font-size: 12px;
  color: #999;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const AddToCartButton = styled.button`
  flex: 1;
  padding: 10px;
  background-color: #0f9d58;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const ModalTitle = styled.h2`
  margin-bottom: 20px;
`;

const Quantity = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;

const ModalActions = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const ContinueShoppingButton = styled.button`
  padding: 10px 20px;
  background-color: #00796b;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const GoToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #d32f2f;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const FreeShippingHint = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;
