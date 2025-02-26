const arr = ["one", "two", "three"];

for (let item of arr) {
  item += 1;
  console.log(item); // one two three
}
for (const index in arr) {
  arr[index] += 1;
  console.log(index); // 0 1 2
}
console.log(arr);
