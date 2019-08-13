const x = 5;
const y = 5;
const hooverX = 1;
const hooverY = 2;

class Hoover {
  x = 0;

  y = 0;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get x() {
    return this.x;
  }

  get y() {
    return this.y;
  }

  set x(x) {
    this.x = x;
  }

  set y(y) {
    this.y = y;
  }
}

// const startingPosition = 1 2
// const dirt1 = 1 0
// const dirt2 = 2
// const dirt3 = 2 3

const createRoom = (x, y) => {
  const array = new Array(x);
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(y);
  }

  let number = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < y; j++) {
      array[i][j] = number++;
    }
  }

  //   console.log(array);

  return array;
};

let hoover = new Hoover(hooverX, hooverY);

const placeHoover = (room, x, y) => {
  //Hoover in correct Position DO NOT TOUCH HOOVER
  room[hoover.y][hoover.x] = "H";
  return room;
};

const placeDirt = (room, x, y) => {
  room[y][x] = "D";
  return room;
};

// const placeTest = (room, x, y) => {
//   room[x][y] = "T";
//   return room;
// };

room = placeHoover(createRoom(x, y), hooverX, hooverY);

room = placeDirt(room, 1, 0);
room = placeDirt(room, 2, 2);
room = placeDirt(room, 2, 3);

// room = placeTest(room, 1, 1);
// room = placeDirt(room, 1, 3);
room = room.reverse();
console.log(room);

let counter = 0;

const moveHoover = (room, direction, hoover) => {
  //let hoover = room[hooverY][hooverX];

  //   console.log("-----Start:--------");
  //   console.log("X" + hoover.x);
  //   console.log("Y" + hoover.y);
  //   console.log(direction);
  //   console.log(hoover.x);
  //   console.log(hoover.y);
  currentPos = room[hoover.x][hoover.y];
  //   console.log(currentPos);
  switch (direction) {
    case "N":
      room[hoover.y][hoover.x] = "C";
      if (room[hoover.y - 1][hoover.x] === "D") {
        counter++;
      }
      room[hoover.y - 1][hoover.x] = "H";
      hoover.y = hoover.y - 1;
      break;

    case "E":
      //console.log(room);

      if (room[hoover.y][hoover.x + 1] === "D") {
        counter++;
      }
      room[hoover.y][hoover.x] = "C";
      room[hoover.y][hoover.x + 1] = "H";
      hoover.x = hoover.x + 1;
      break;

    case "W":
      room[hoover.y][hoover.x] = "C";
      if (room[hoover.y][hoover.x - 1] === "D") {
        counter++;
        room[hoover.y][hoover.x - 1] = "H";
      } else {
        room[hoover.y][hoover.x - 1] = "H";
      }
      break;

    case "S":
      room[hoover.y][hoover.x] = "C";
      if (room[hoover.y + 1][hoover.x] === "D") {
        counter++;
        room[hoover.y + 1][hoover.x] = "H";
      } else {
        room[hoover.y + 1][hoover.x] = "H";
      }
      break;
  }
  //console.log(hoover);

  //console.log(room);
  //   console.log("------End:-------");
  //   console.log("x" + hoover.x);
  //   console.log("y" + hoover.y);
  console.log("patches of dirt cleaned:" + counter);
  console.log("Hoover is located at:" + hoover.x + " " + hoover.y);
  return room;
};

const directions = "NES";
const startProgram = directions => {
  directionsArray = directions.split("");
  directionsArray.forEach(direction => {
    room = moveHoover(room, direction, hoover);
    console.log(room);
  });
};

startProgram(directions);
