import SectionContent from "@/components/atoms/SectionContent/SectionContent";
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import TextBlock from "@/components/atoms/TextBlock/TextBlock";
import Box from "@mui/material/Box";
import React from "react";

const PlanetContent = ({ title, content }:{
  title: string;
  content: string;
}) => {
  return (
    <Box sx={{ px: "30px", mb: "20px" }}>
      <SectionTitle title={title} />
      <SectionContent content={content} />
    </Box>
  );
};

export default PlanetContent;
