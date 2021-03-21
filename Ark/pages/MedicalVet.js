import { Button, TextField } from "@material-ui/core";
import { petsData } from "./dummydata";
// import Image from "next/image";

export default function MedicalVet() {
  return (
    <div>
      {petsData.map((data, key) => {
        return (
          <div>
            <h1>{data.pets.petsName} Medical and Vet Notes</h1>

            {/* Get home button working */}
            <Button href="/">Home</Button>

            <div>
              <h2>Notes:</h2>
              {/* Button to go back to home directory */}
              <TextField variant="outlined" />
              <Button>Save</Button>

              {/* Text box */}

              {/* Picture album */}
            </div>
            {data.pets.medicalVet.notes}
            {/* <Image src={data.pets.medicalVet.image}
                width={500}
                height={500}
            /> */}
          </div>
        );
      })}
    </div>
  );
}
