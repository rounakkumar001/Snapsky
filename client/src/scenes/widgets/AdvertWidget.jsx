import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://mma.prnewswire.com/media/881033/OPPO_PUBG_Mobile.jpg?p=twitter"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>PUBG India</Typography>
        <Typography color={medium}>bgmiindia.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      OPPO Announces Sponsorship of PUBG MOBILE MENA Championship 2023
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
