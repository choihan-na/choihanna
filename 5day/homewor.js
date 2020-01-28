let arrays = [0, 1, 2, 3, 4, 1, 2, 3, 6, 5];

let answer = arrays.filter((item, index) => arrays.indexOf(item) === index);
console.log(answer);

// 결과
// let arrays = [0, 1, 2, 3, 4, 6, 5];



// 배열 arr안에는 항상 정수 값만 들어갑니다.
// arr은 빈 배열 값이 들어 갈 수 도 있습니다.
// 예시
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 결과 예시
// 5.5
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let avg = arr.reduce((acc, current, index, array) => {
  if (index === array.length - 1) {
    return (acc + current) / array.length;
  }
  return acc + current;
}, 0);

console.log(avg);
