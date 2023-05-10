import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/", {replace: true})}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
          fontSize="large"
        >
          Capstone
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "18px",
                minWidth: "18px",
                backgroundColor: "#de3349",
                color: "white",
                fontSize: "xsmall"
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;