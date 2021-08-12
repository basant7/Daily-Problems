array = [2,7,4,8,5,9]

function bubble(arr){
    var n = arr.length;
    for(var i = 0; i< n-1; i++){
        var flag = 0;
        for(var j = 0; j< n-1-i; j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag = 1;
            }
        }
        if(flag == 0){
            break;
        }
    }
    console.log(arr)
}

bubble(array)