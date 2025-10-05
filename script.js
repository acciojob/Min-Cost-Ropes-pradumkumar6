function mincost(arr)
{ 
//write your code here
// return the min cost
	if (!arr || arr.length <= 1) return 0;

  let cost = 0;

  // Keep connecting the two smallest ropes until one rope remains
  while (arr.length > 1) {
    // Sort the array to bring smallest elements in front
    arr.sort((a, b) => a - b);

    // Take two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    // Cost to connect them
    let sum = first + second;
    cost += sum;

    // Push the new combined rope length back into the array
    arr.push(sum);
  }

  return cost;
  
}

module.exports=mincost;
