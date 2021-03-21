import { Button } from "@material-ui/core";
import { petsData } from "./dummydata";

export default function PetsLog() {
  return (
    <div>
      {petsData.map((data, key) => {
        return (
          <div key={key}>
            <div>
              {/* Activity chart */}
              Daily Goal: {data.pets.activity.exerciseGoal} hour Timer:
              <Button>Start Walk</Button>
            </div>
            <div>
              {/* Feeding Chart */}
              Meals Per Day: {data.pets.meal.perDay} meals Next Meal Time: In{" "}
              {data.pets.meal.time} hours
              <Button>Feed</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
