import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button, TextField } from "@mui/material";
import { invoke } from "@tauri-apps/api/tauri";
import { toast } from "react-toastify";

export default function LoginTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  async function submitUser() {
    try {
      const res = await invoke("create_user", {
        user_details: JSON.stringify({
          username: "akshay",
          password: "deosthale",
        }),
      });
      toast.success(res as string);
      setValue("1");
    } catch (error) {
      toast.error(error as string);
      console.log(error);
    }
  }

  return (
    <Box sx={{ width: "100%", typography: "body1", height: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Login" value="1" />
            <Tab label="Sign Up" value="2" />
            <Tab label="Upload Config" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <h1 className="text-3xl font-bold underline">Login</h1>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </Box>
          <Button sx={{ mt: 5 }} variant="contained">
            Login
          </Button>
        </TabPanel>
        <TabPanel value="2">
          <h1 className="text-3xl font-bold underline">Sign Up</h1>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </Box>

          <Button onClick={submitUser} sx={{ mt: 5 }} variant="contained">
            Login
          </Button>
        </TabPanel>
        <TabPanel value="3">
          <h1 className="text-3xl font-bold underline">Upload Config</h1>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </Box>

          <Button sx={{ mt: 5 }} variant="contained">
            Login
          </Button>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
