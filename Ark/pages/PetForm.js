import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export default function PetForm() {
  return (
    <form>
      <h2>Your Pet Information</h2>
      <Button href="/">Home</Button>
      <div>
        <TextField required label="Pets Name" variant="outlined" />
        <TextField required label="Pets Parent" variant="outlined" />
        <TextField
          required
          label="Date of Birth"
          default="MM-DD-YYYY"
          variant="outlined"
        />
        <TextField
          label="Allergies/ Food Sensitivity"
          type="Ex. Gluten"
          variant="outlined"
        />
        <TextField label="Needs" type="Toys" variant="outlined" />
        <TextField label="Favorite Food" type="Chicken" variant="outlined" />
        <TextField label="Disliked Food" type="Celery" variant="outlined" />
      </div>

      <h3>Activity and Feeding</h3>
      <div>
        <TextField
          label="Daily Exercise Goal"
          type="1 hour"
          variant="outlined"
        />
        {/* Bellow here is focused on meals */}
        <TextField label="Meals per day" type="2" variant="outlined" />
        <TextField
          label="Next Feeding time"
          type="12 hours"
          variant="outlined"
        />
      </div>
      <Button>Save</Button>
    </form>
  );
}
