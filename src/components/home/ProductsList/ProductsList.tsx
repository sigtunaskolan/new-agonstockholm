import React from "react";
import styled from "@emotion/styled";
import Container from "./container";
import ListContainer from "./ListContainer";
import ProductItem from "./ProductItem/ProductItem";

type Product = {
  key: string;
  bgImg: string;
  label: string;
  id: string;
};

interface MarketItem extends Product {
  description: string;
}

type Props = {
  productItems: Array<Product>;
};

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 5rem;
    height: 4px;
    background-color: var(--secondary);
  }
`;

export default function ProductsList({ productItems }: Props) {
  const markets: MarketItem[] = [
    {
      key: "1",
      id: "non-ferrous-metals",
      bgImg: "p1.png",
      label: "Non-ferrous Metals",
      description: "Expert trading in copper, aluminum, zinc, and other essential non-ferrous metals for global industries."
    },
    {
      key: "2",
      id: "energy-products",
      bgImg: "p2.png",
      label: "Energy Products",
      description: "Reliable supply of energy resources including oil, gas, and refined products to meet diverse customer needs."
    },
    {
      key: "3",
      id: "agricultural-commodities",
      bgImg: "p3.png", 
      label: "Agricultural Commodities",
      description: "Sustainable trading solutions for grains, oilseeds, and other agricultural products across key markets."
    }
  ];
  
  // Use mock data if productItems is empty
  const displayItems = productItems.length > 0 ? productItems : markets;
  
  return (
    <Container id="productsList" className="section">
      <SectionTitle>Our Markets</SectionTitle>
      <ListContainer>
        {displayItems.map((item) => (
          <ProductItem
            key={item.id || item.key}
            bgImg={item.bgImg}
            label={item.label}
            id={item.id}
            description={(item as MarketItem).description || ""}
          />
        ))}
      </ListContainer>
    </Container>
  );
}
