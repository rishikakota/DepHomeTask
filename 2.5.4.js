// The SantaClausable interface is implemented, if all of the following methods are defined on an object:

// sayHoHoHo() / say_ho_ho_ho
// distributeGifts() / distribute_gifts
// goDownTheChimney() / go_down_the_chimney

function isSantaClausable(obj) {
  // TODO
  if((typeof obj.sayHoHoHo)=='function' && (typeof obj.distributeGifts)=='function' && (typeof obj.goDownTheChimney)=='function')
    {
      return true;
    }
  
  return false;
}