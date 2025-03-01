import React from "react";
import Container from "./container";
import ListContainer from "./ListContainer";
import Header from "./Header";
import ProductItem from "./ProductItem/ProductItem";

type Product = {
  key: string;
  bgImg: string;
  label: string;
  id: string;
};
type Props = {
  productItems: Array<Product>;
};

export default function ProductsList({ productItems }: Props) {
  return (
    <Container id="productsList">
      <Header />
      <ListContainer>
        {productItems.map((item) => (
          <ProductItem
            key={item.key}
            bgImg={item.bgImg}
            label={item.label}
            id={item.id}
          />
        ))}
      </ListContainer>
    </Container>
  );
}
