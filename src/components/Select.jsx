import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ user, setSelectedUser, selectedUser }) {
  const handleChange = (event) => {
    setSelectedUser(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel
          id="demo-simple-select-autowidth-label"
          sx={{
            backgroundColor: "white",
            padding: "0 5px",
          }}
        >
          Assign to
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selectedUser}
          onChange={handleChange}
          autoWidth
          label="User"
        >
          {user.map((item, key) => {
            return (
              <MenuItem key={key} value={item}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
