function quickSort(arr) {

  if(arr.length <= 1) {
    return arr;
  }

  var num = Math.floor(arr.length/2); //找到中间位置
  var numValue = arr.splice(num ,1); //从数组里提出来

  var left = [];
  var right = [];

  for(var i=0,len=arr.length; i<len; i++) {

    if(arr[i]<numValue) {
      left.push(arr[i]);
    } else {
      right.push(arr[i])
    }

  }

  return quickSort(left).concat([numValue], quickSort(right)); //递归

}