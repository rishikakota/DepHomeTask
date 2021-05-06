//Write a function which partitions a list of items based on a given predicate.

//After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).



function partitionOn(pred, items) {
  let i = 0;
  let visited_number = 0;
  while(visited_number < items.length){
    if(pred(items[i])){
      let removedItem = items.splice(i,1);
      items.push(removedItem[0])
    }
    else{
      i++;
    }
    visited_number++;
  }
  return i;
