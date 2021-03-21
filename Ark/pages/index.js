import Head from "next/head";
import PetInfo from "./PetInfo";
import Petslog from "./Petslog";

import { Button } from "@material-ui/core";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Ark</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Ark!</h1>

        {/* Need button link to Medical/Vet */}

        <p>Reminders for all your pets needs</p>

        <PetInfo />

        <Button href="/PetForm">Edit Page</Button>
        <Button href="/MedicalVet">Medical Info</Button>

        {/* Pet Logs */}
        <Petslog />
      </main>
    </div>
  );
}
