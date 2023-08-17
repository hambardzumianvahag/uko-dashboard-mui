import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Done({ done, prevTaskToInProgress }) {
  return (
    <div>
      <div className="tasks-list">
        {done.map((item, index) => (
          <Card key={index} className="task-card">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Task Name
              </Typography>
              <Typography variant="h5" component="div">
                {item.taskName}
              </Typography>
              <Typography color="text.secondary">Task Description</Typography>
              <Typography variant="body2">{item.taskDesc}</Typography>
              <Typography color="text.secondary">Assigned To</Typography>
              <Typography variant="body2">{item.assignTo.name}</Typography>
            </CardContent>
            <Button
              onClick={() => prevTaskToInProgress(index)}
              variant="outlined"
            >
              Prev Step
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
