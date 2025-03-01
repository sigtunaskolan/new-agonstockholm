import React from "react";
import styled from "@emotion/styled";

type Props = {
  bgImg: string;
  label: string;
  id: string;
  description?: string;
};

interface CardImgProps {
  bgImage?: string;
}

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const CardImg = styled.div<CardImgProps>`
  height: 200px;
  background-color: var(--primary);
  background-image: ${props => props.bgImage ? `url(/${props.bgImage})` : 'none'};
  background-size: cover;
  background-position: center;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const CardDescription = styled.p`
  color: #777;
  line-height: 1.6;
`;

export default function ProductItem({ bgImg, label, description = "" }: Props) {
  return (
    <Card>
      <CardImg bgImage={bgImg} />
      <CardContent>
        <CardTitle>{label}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
