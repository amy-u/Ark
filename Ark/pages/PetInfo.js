// import CreateIcon from "@material-ui/icons/Create"
import { Button, Avatar } from "@material-ui/core";
import {petsData} from "./dummydata";

export default function PetInfo() {
  return (
    petsData.map((data, key) => {
      return (
        <div>
          {/* Pet information Card */}
          <h4>Your kids</h4>

          <h3>{data.pets.petsName}</h3>
          <p>
            <Avatar alt="Picture of pet" src={data.pets.image} />
          </p>
          <p>
            <h4>Date of Birth:</h4>
            <p>{data.pets.birth}</p>
            <h4>Pets Parent:</h4>
            <p>{data.petsParent}</p>
            <h4>Allergies/ food sensitivity:</h4>
            <p>{data.pets.allergies}</p>
          </p>
          <p>
            <h4>Needs:</h4>
            <p>{data.pets.needs}</p>
            <h4>Favorite food:</h4>
            <p>{data.pets.favoriteFood}</p>
            <h4>Hates Food:</h4>
            <p>{data.pets.hatesFood}</p>
          </p>
        </div>
      );
    })
  )
}
