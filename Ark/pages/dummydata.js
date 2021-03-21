export const petsData = [
  {
    id: 1,
    petsParent: "Tom Tom",
    // need to pets to animals
    pets: {
      id: 1,
      petsName: "Jack Black",
      birth: "2017-07-07",
      image:
        "https://bornfreeshelter.org/wp-content/uploads/2015/10/Born-Free-04-15-2017-36.jpg",
      allergies: "Humans",
      favoriteFood: "Chicken and blueberries",
      hatesFood: "Celery",
      needs: "More Toys",
      activity: {
        exerciseGoal: 1,
      },
      meal: {
        perDay: 2,
        time: 12,
      },
      medicalVet: {
        image:
          "https://dwdqz3611m4qq.cloudfront.net/templates/Veterinary-Invoice-Template-1-G.jpg?mtime=20191120145818&focal=none",
        notes: "Throws up a lot",
      },
    },
  },
];
