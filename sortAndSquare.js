array = [2,5,3,7,4];

function sortAndSquare(arr){
    var sqArr = [];
    var temp = 0;
    for(var k = 0; k<arr.length; k=k+1){
        if(arr[k]>arr[k+1]){
            temp = arr[k];
            arr[k] = arr[k+1];
            arr[k+1] = temp;
            k=0;
        }
        sqArr[k] = arr[k] *arr[k];
    }
    console.log(sqArr)
}

sortAndSquare(array);