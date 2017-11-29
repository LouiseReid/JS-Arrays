var arrayTasks = {

	concat: function (arr1, arr2) {
		var arr3 = arr1.concat(arr2);
		return arr3;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd)
		return arr;
	},

	square: function (arr) {
		var squaredArray = [];
		arr.forEach(function(element) {
			squaredArray.push(element * element);
		})
		return squaredArray;
	},

	sum: function (arr) {
		var result = arr.reduce((acc, currentValue) => acc + currentValue);
		return result;
	},

	findDuplicates: function (arr) {
		var sortedArr = arr.sort();
		var newArray = []
		for(var i = 0; i < arr.length -1; i++){
			if(sortedArr[i + 1] == sortedArr[i]){
				newArray.push(sortedArr[i])
			}
			return newArray;
		}
	},

	removeAndClone: function (arr, valueToRemove) {
			return arr.filter(function(num){
			return num !== valueToRemove;
		})
	},

	findIndexesOf: function (arr, itemToFind) {
		var newArray = []
		arr.forEach(function(itemToFind, index){
			newArray.push(index);
		})
		return newArray;

	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var evenNumbers = []
	}

}

module.exports = arrayTasks
