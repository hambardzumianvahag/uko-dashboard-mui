// export default function Tasks({ result }) {
//   console.log(result);
//   return (
//     <div className="todo">
//       <h3>Task Name: {result.taskName}</h3>
//       <p>Task Description:{result.taskDesc}</p>
//       <p>Assign To: {result.assignTo.name}</p>
//     </div>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

export default function Tasks({ result }) {
  return (
    <div className="todo">
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Task Name
          </Typography>
          <Typography variant="h5" component="div">
            {result.taskName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Task Description
          </Typography>
          <Typography variant="body2">{result.taskDesc}</Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Assigned To
          </Typography>
          <Typography variant="body2">{result.assignTo.name}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
