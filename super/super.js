<script>
// Define variables
var hunterName = "Hunter";
var hunterHealth = 100;
var hunterAttack = 10;

// Define a function to attack
function attack(targetName, targetHealth, attackPower) {
  targetHealth -= attackPower;
  console.log(hunterName + " attacks " + targetName + " for " + attackPower + " damage.");
  console.log(targetName + " has " + targetHealth + " health remaining.");
  return targetHealth;
}

// Call the attack function
var enemyName = "Villain";
var enemyHealth = 50;
enemyHealth = attack(enemyName, enemyHealth, hunterAttack);
</script>
