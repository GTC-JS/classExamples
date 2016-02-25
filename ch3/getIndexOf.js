function getIndexOf(myArr, target) {
   for(var i = 0;i<myArr.length;i++)
   {
      if (myArr[i] == target){
         return i;
      }
   }
return -1;
}