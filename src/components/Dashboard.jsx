import * as React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BlindIcon from "@mui/icons-material/Blind";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import Person2Icon from "@mui/icons-material/Person2";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
function MenuSection({ children, label }) {
  return (
    <MenuSectionRoot role="group">
      <MenuSectionLabel>{label}</MenuSectionLabel>
      <ul>{children}</ul>
    </MenuSectionRoot>
  );
}

MenuSection.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
};

export default function Dashboard() {
  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <Dropdown>
      <TriggerButton>Options</TriggerButton>
      <Menu slots={{ listbox: StyledListbox }}>
        <MenuSection label="Dashboard">
          <StyledMenuItem onClick={createHandleMenuClick("LMS")}>
            <div className="each">
              <AccessibilityNewIcon />
              LMS
            </div>
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("Sales1")}>
            <div className="each">
              <AttachMoneyIcon />
              Sales 1
            </div>
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("Hiring")}>
            <div className="each">
              <BlindIcon />
              Hiring
            </div>
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("Project")}>
            <div className="each">
              <FolderCopyOutlinedIcon />
              Project
            </div>
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("CRM")}>
            <div className="each">
              <ChatBubbleOutlineOutlinedIcon />
              CRM
            </div>
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("Saas")}>
            <div className="each">
              <BookmarksOutlinedIcon />
              SaaS
            </div>
          </StyledMenuItem>

          <StyledMenuItem
            onClick={createHandleMenuClick("Management")}
            disabled
          >
            Management
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("Profiles")}>
            <div className="each">
              <Person2Icon />
              Profiles
            </div>
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("Accounts")}>
            <div className="each">
              <ManageAccountsIcon />
              Accounts
            </div>
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("User")}>
            <div className="each">
              <PeopleAltIcon />
              User & Contact
            </div>
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("Profiles")}>
            <div className="each">
              <DescriptionIcon />
              Invoice
            </div>
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("Ecommerce")}>
            <div className="each">
              <ShoppingBasketIcon />
              Ecommerce
            </div>
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("Projects")}>
            <div className="each">
              <DataUsageIcon />
              Projects
            </div>
          </StyledMenuItem>
        </MenuSection>
        <MenuSection label="Apps">
          <StyledMenuItem onClick={createHandleMenuClick("Todo")}>
            <div className="each">
              <ListAltIcon />
              Todo List
            </div>
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("Calendar")}>
            <div className="each">
              <CalendarMonthIcon />
              Calendar
            </div>
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("Chats")}>
            <div className="each">
              <ChatOutlinedIcon />
              Chats
            </div>
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("Pages")}>
            <div className="each">
              <AutoStoriesOutlinedIcon />
              Pages
            </div>
          </StyledMenuItem>
        </MenuSection>
      </Menu>
    </Dropdown>
  );
}

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  height: 200px; /* Set the desired height */
  border-radius: 12px;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: scroll; /* Enable vertical scrolling if needed */
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 2px 16px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  z-index: 1;
  `
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 8px 14px;
  line-height: 1.5;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }
  `
);

const MenuSectionRoot = styled("li")`
  list-style: none;

  & > ul {
    padding-left: 1em;
  }
`;

const MenuSectionLabel = styled("span")`
  display: block;
  padding: 10px 0 5px 10px;
  font-size: 0.75em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  color: ${grey[600]};
`;
