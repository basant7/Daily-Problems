array1 = [1,3,5,7,9]
array2 = [2,4,6,8]

function merge(arr1,arr2){
    i = 0;
    j = 0;
    k=0;
    var temp = [];
    while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        temp[k] = arr1[i]
        i++;
        k++;
    }
    if(arr1[i]>arr2[j]){
        temp[k] = arr2[j];
        j++;
        k++;
    }
    }
while(i<arr1.length){
        temp[k] = arr1[i]
        i++;
        k++;
}

while(j<arr2.length){
    temp[k] = arr2[j]
    j++;
    k++;
}
    console.log(temp)
}

merge(array1, array2)