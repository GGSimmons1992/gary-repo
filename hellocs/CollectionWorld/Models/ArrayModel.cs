namespace CollectionWorld.Models
{
  public class ArrayModel
  {
    public void ArrayFamily()
    {
      //1D
      int[] arr1;//Fits in any 1D array
      int[] arr2 ={0,1,2,3,4};//This has 5 elements, and it has to be this
      int[] arr3 =new int[5];//Can contain 5 elements

      //2D (not an array of an array, which is an nxn matrix)
      int[,] arr4;//Fits in any 2D array
      int[,] arr5 ={{0,1},{2,3}};
      int[,] arr6 =new int [2,2];

      //3D
      //int[,,] arr6;
      int[,,] arr7= {{{0,1,2},{3,4,5},{6,7,8}},{{9,10,11},{12,13,14},{15,16,17}},{{18,19,20},{21,22,23},{24,25,26}}};
      int[,,] arr8= new int[3,3,3];


      //M-D
      //int[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,] arrx = new int [,,,,,,,,,,..........]

      //jagged array
      int[][] arr9;
      //int[][] arr10 = {new int[1],new int[2,2],new int[3,3,3]};
      //int[][] arr11 = new int[new int[0],new int {{0,1},{2,3}}];

    }
    public void UseArrayFamily()
      {
        var arr1 = new int[3,4]{{1,2,3,4},{5,6,7,11},{8,9,11,11}};
        arr1[2,1]=0;
        for (var i=0;i<arr1.GetLength(0);i+=1)
        {
          for (var j=0;j<arr1.GetLength(1);j+=1)
          {
            System.Console.WriteLine(arr1[i,j]);
          }
        }
        System.Console.WriteLine("--new array--");

        //idea 1
        // arr1[1,3]=8;
        // arr1[2,0]=9;
        // arr1[2,1]=10;
        // arr1[2,2]=11;
        // arr1[2,3]=12;


        //idea 2
        int countValue=1;
        for (var k=0;k<arr1.GetLength(0);k+=1)
        {
          for (var l=0;l<arr1.GetLength(1);l+=1)
          {
            if(arr1[k,l]!=countValue)
            {
              arr1[k,l]=countValue;
            }
            System.Console.WriteLine(arr1[k,l]);
            countValue+=1;
          }
        }
      }
  }
}
