import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from "@mui/material";

export default function BasicSelect({
  user,
  setSelectedUser,
  selectedUser,
  error,
  setError,
}) {
  const handleChange = (event) => {
    setSelectedUser(event.target.value);
    if (error) {
      setError(false);
    }
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
          value={selectedUser || ""}
          onChange={handleChange}
          autoWidth
          label="User"
          error={error}
        >
          {user.map((item, key) => {
            return (
              <MenuItem key={key} value={item}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
        {error && <FormHelperText>Select a user</FormHelperText>}
      </FormControl>
    </div>
  );
}
