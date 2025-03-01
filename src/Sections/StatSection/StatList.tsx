import React from "react";
import Box from "@mui/material/Box";
import Separator from "@/components/Shared/Separator";
import Text from "../../components/Shared/Text";
import { StatData } from "./types";

type StatListProps = {
  stat: StatData[];
};

const StatItem = ({ label, value }: StatData) => {
  return (
    <Box mr={{ xs: 2, sm: 5 }}>
      <Box mb={2}>
        <Separator height="0.5px" bgColor="rgba(1, 31, 83, 0.5)" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        pr={{ xs: 2, sm: 5 }}
      >
        <Box mb={1}>
          <Text textVariant="statValue">{value}</Text>
        </Box>
        <Text textVariant="statLabel">{label}</Text>
      </Box>
    </Box>
  );
};

export default function StatList({ stat }: StatListProps) {
  return (
    <Box width="100%" display="flex" mb={6}>
      {stat?.map((item: StatData, index: number) => (
        <StatItem key={index} label={item.label} value={item.value} />
      ))}
    </Box>
  );
}
