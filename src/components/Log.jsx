import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Log({ switchTrello, setFirst, first }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const switchTab = () => {
    setValue(1);
  };

  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          className="tab"
          aria-label="basic tabs example"
        >
          <Tab label="Sign Up" {...a11yProps(0)} />
          <Tab label="Log In" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <SignUp switchTab={switchTab} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SignIn switchTrello={switchTrello} setFirst={setFirst} first={first} />
      </CustomTabPanel>
    </Box>
  );
}
