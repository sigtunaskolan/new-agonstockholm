"use client";
import React from "react";
import { Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import styled from "@emotion/styled";

const SectionContainer = styled.section`
  padding: 6rem 5%;
`;

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
    background-color: #62e999;
  }
`;

const InsightCard = styled(Card)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const CardImg = styled(CardMedia)`
  height: 200px;
  background-color: #1e3a5f;
`;

const CardTitle = styled(Typography)`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 500;
`;

const CardDescription = styled(Typography)`
  color: #777;
  line-height: 1.6;
`;

export default function MarketInsights() {
  const insights = [
    {
      id: 1,
      title: "Copper Market Analysis Q1 2025",
      description: "Our latest analysis of global copper trends, supply constraints, and price forecasts for the coming quarter.",
    },
    {
      id: 2,
      title: "Sustainable Trading Practices",
      description: "How environmental regulations are shaping the future of commodities trading in European markets.",
    },
    {
      id: 3,
      title: "Supply Chain Resilience",
      description: "Strategic approaches to strengthening supply chains against global disruptions and market volatility.",
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>Market Insights</SectionTitle>
      <Grid container spacing={3}>
        {insights.map((insight) => (
          <Grid item xs={12} sm={6} md={4} key={insight.id}>
            <InsightCard>
              <CardImg />
              <CardContent>
                <CardTitle variant="h5">{insight.title}</CardTitle>
                <CardDescription>{insight.description}</CardDescription>
              </CardContent>
            </InsightCard>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
}