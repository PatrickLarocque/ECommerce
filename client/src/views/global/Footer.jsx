import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            Capstone
          </Typography>
          <div>
          He must have tried it a hundred times, shut his eyes so 
          that he wouldn't have to look at the floundering legs, 
          and only stopped when he began to feel a mild, dull pain 
          there that he had never felt before. "Oh, God", he thought, 
          "what a strenuous career it is that I've chosen! 
          Travelling day in and day out.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Locations</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Service
          </Typography>
          <Typography mb="30px">FAQs</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            821 Sainte Croix Ave, Saint-Laurent, Quebec H4L 3X9
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: capstone@fake.com
          </Typography>
          <Typography mb="30px">1+ (123) 456-7890</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;