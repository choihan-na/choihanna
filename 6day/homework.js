for (let i = 1; i < 100; i++) {
  let result = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      result = false;
    }
  }
  if(result) {
    console.log(i)
  }
}

for (let i = 1; i <= 25; i++) {
  if (i % 3 === 0) {
    console.log("fizz" + i);
  }
}

for (let i = 1; i <= 25; i++) {
  if (i % 5 === 0) {
    console.log("bizz" + i);
  }
}

