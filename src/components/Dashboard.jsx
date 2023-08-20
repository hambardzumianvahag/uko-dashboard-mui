import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "./Table";
import Cards from "./Card";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Log from "./Log";
import Trello from "./Trello";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Dashboard({ first, setFirst }) {
  const [value, setValue] = React.useState(0);

  const switchTrello = () => {
    setValue(2);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 420,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Login" {...a11yProps(0)} />
        <Tab label="LMS" {...a11yProps(1)} />
        <Tab label="Trello" {...a11yProps(2)} />
        <Tab label="Sales 2" {...a11yProps(3)} />
        <Tab label="Hiring" {...a11yProps(4)} />
        <Tab label="Project" {...a11yProps(5)} />
        <Tab label="Profiles" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Log switchTrello={switchTrello} first={first} setFirst={setFirst} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="lms">
          <Table />
          <div className="cards">
            <Cards
              first="Revenue"
              second="$35,800"
              third="+10.23%"
              color="green"
              arrow={<ArrowUpwardIcon />}
            />
            <Cards
              first="Repeat Purchase"
              second="$12,900"
              third="+20.4%"
              color="green"
              arrow={<ArrowUpwardIcon />}
            />
            <Cards
              first="Average Order value"
              second="$1,000"
              third="+10.23%"
              color="red"
              arrow={<ArrowDownwardIcon />}
            />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Trello />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}
