function spookyGhost(){
  console.log(`Boo!!!`);
}
spookyGhost(); // Boo!!!

console.log("========");

function candy(goal){
  console.log(goal);
  console.log(goal);
  console.log(goal);
  console.log(goal);
}

candy(`Get Candy`);

console.log("=========");

function werewolf(a, b){
  if (a === `Full` && b === `Moon`){
    console.log(`ARH-WOOO!`);
  }
}
werewolf(`Full`, `Moon`);
werewolf(`Crescent`, `Moon`); 

console.log("==========");

// 4
function halloween(){
  return `October 31st`;
}
halloween();
console.log(halloween()); 

console.log('==========');

// 5
function isEnoughCandy(pieces){
  if (pieces >= 31){
    return true;
  } else {
    return false;
  }
}
console.log(isEnoughCandy(31));
console.log(isEnoughCandy(5)); 

console.log("=========");

// 6
function candyCounter(nums){
  let total = 0;
  for(i = 0; i < nums.length; i++){
    total += nums[i];
  }
  return total;
}
console.log(candyCounter([1, 2, 3]));
console.log(candyCounter([1, 3])); 

console.log("=========");

// 7
const hauntedMansion = function(){
  console.log("Welcome, foolish mortals, to the Haunted Mansion!");
}
hauntedMansion();

console.log("=========");

ghostbusters = () => `Who You Gonna Call?`;

console.log(ghostbusters());

console.log("==========");

const costumes = ["Ghost", "Princess", "Pirate"];

const upperCostumes = costumes.map(i => i.toUpperCase());

console.log(upperCostumes);