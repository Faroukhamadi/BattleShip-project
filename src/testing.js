let arr = [];
let k = 0;

for (let i = 0; i < 5; i++) {
  arr.push([0, 0, 0, 0, 0]);
}

// TODO: insert from in a Cruiser (size=3) in i=2 and j=1 (insert ones"1")
let size = 3;
let i = 2;
let j = 1;
while (size > 0) {
  arr[i][j] = 1;
  i++; // this changes depending on the chosen axis
  size--;
}

console.log(arr);
