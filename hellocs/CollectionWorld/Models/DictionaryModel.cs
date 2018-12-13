using System.Collections.Generic;
using System.Linq;

namespace CollectionWorld.Models
{
  public class DictionaryModel
  {
    public void DictionaryFamily()
    {
      Dictionary<int,string> da;
      Dictionary<int,string> db = new Dictionary<int,string>();
      Dictionary<int,string> dc = new Dictionary<int,string>(){{1,"fred"},{2,"dori"}};

      //read
      da=dc;
      var x=da[1];
      var w=da.ContainsKey(1);
      var y=da.ContainsValue("dori");
      var z=da.ElementAt(1);
      var a=da.Single(s=>s.Value=="SP").Key;
      //single will give the only one (if there is more than one it will fail)

      //write
      da[10]="SP";
      if (!da.ContainsKey(5))
      {
        da.Add(5,"JP");
      }

      //update
      da.Remove(1);
      da.Remove(da.Single(s=>s.Value=="fred").Key);
    }
  }
}
