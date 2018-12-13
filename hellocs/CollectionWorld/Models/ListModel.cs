using System.Collections.Generic;
using System.Linq;

namespace CollectionWorld.Models
{
  public class ListModel
  {
    public void ListFamily()
    { //List, linked list, linked list node, sorted Lists,
      // definition
      List<int> la;
      List<int> lb = new List<int>{1,2,3,4};
      List<int> lc = new List<int>();//new means a reference to a new

      List<int[]> ld = new List<int[]>();//lists and nothing else
      List<List<int[]>> le = new List<List<int[]>>();

      //read
      var x= lb[1];//lists are dynamic. What's at index 1 may not always be at index 1.
      var y= lb[lb.IndexOf(2)];//It is not static.
      var z = lb.ElementAt(1);//Exactly like 2 lines prior.
      var a =lb.FindIndex(100000,200,f=>f==2);//Starting from 100000, and the 200 indecies after it, find a 2. (f)=>{f==2;}


      //write
      la=lc;
      la[10]=100; //(The empties by value:0,false, or ''. The empties by reference: null)
      lb[10]=100;
      lb.Add(100);//Where it was last. If we were reading at 10, it will put it at 9 or 11.
      lb.AddRange(new int[]{100,200,300,400});//I just need a collection.
      lb.AddRange(lb.ToArray());
      lb.AddRange(lb);

      //update
      lb.Remove(100);//I need a value to remove. I'll remove the first one I find. Will return a boolean.
      lb.RemoveAll(r=>r==0);//It needs a condition. NB: (r=>r==0) == ((r)=>r==0)
      lb[10]=200;//true modification (add notation strictliy adds, while [] can add or update.)
      lb.RemoveAt(10);// Will shift the nodes to fill gaps.
      lb.RemoveAt(lb.IndexOf(200));
    }
  }
}
