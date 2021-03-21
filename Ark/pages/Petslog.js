import { Button } from "@material-ui/core";

export default function PetsLog() {
  return (
    <div>
      {/* Activity chart */}
      Daily Goal: Timer:
      <Button>Start Walk</Button>
      {/* Feeding Chart */}
      Next Meal Time:
      <Button>Feed</Button>
    </div>
  );
}
