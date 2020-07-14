function getSecondBiggestNumber(arr) {
    var first = arr[0];
    var second = arr[1];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second) {
            second = arr[i];
        }
    }
    return second;
}
// function getSecondBiggestNumber(arr) {
// 	for (var i = 0; i < 8; i++) {
// 		var max = arr[i]
// 		for (var j = i; j < 8; j++) {
// 			if (max < arr[j + 1]) {
// 				temp = arr[i]
// 				max = arr[j + 1]
// 				arr[i] = arr[j + 1]
// 				arr[j + 1] = temp 
// 			}
// 		}
// 	}
// 	return arr[1]
// }

// 테스트 코드
console.log(getSecondBiggestNumber([4, 7, 2, 1, 9, 3, 6, 5]));
console.log(getSecondBiggestNumber([80, 2, 44, 21, 92, 3, 51]));
console.log(getSecondBiggestNumber([4, 7, 6, 5]));

/*결과
7
80
6
*/
