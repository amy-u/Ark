// import CreateIcon from "@material-ui/icons/Create"
import { Button, Avatar } from "@material-ui/core";

export default function PetInfo() {
  return (
    <div>
      {/* Pet information Card */}
      <h4>Your kids</h4>
      {/* Pet name here */}
      <h3>Jack</h3>
      <p>
        <Avatar alt="Picture of pet" src="/dogProfile.jpg" />
      </p>
      <p>
        <h4>Date of Birth:</h4>
        <h4>Pets Parent:</h4>
        <h4>Allergies/ food sensitivity:</h4>
      </p>
      <p>
        <h4>Favorite food:</h4>
        <h4>Hates Food:</h4>
      </p>
    </div>
  );
}
