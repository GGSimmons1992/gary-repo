using ShapeWorld.Interfaces;

namespace ShapeWorld.Models
{
  class Cube : Square, IShape3d
  {
    public double Volume()
    {
      throw new System.NotImplementedException();
    }
  }
}
