import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Cards(props) {
  return (
    <div className="cards">
      <Card
        sx={{
          width: 170,
          height: 120,
          boxShadow: 0,
          borderRadius: 4,
          border: "1px solid black",
        }}
      >
        <CardContent sx={{ padding: 1 }}>
          <Typography
            sx={{ fontSize: 14 }}
            margin="0 0 10px 0"
            color="text.secondary"
            gutterBottom
          >
            {props.first}
          </Typography>
          <Typography
            margin="0 0 10px 0"
            variant="h1"
            component="div"
            sx={{ fontSize: 30 }}
          >
            {props.second}
          </Typography>
          <Typography
            margin="0 0 10px 0"
            sx={{ fontSize: 15 }}
            arrow="props.arrow"
            color={props.color}
          >
            <div className="third">
              {props.arrow} {props.third}
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
