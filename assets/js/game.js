var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//you can also log multiple values at once like this
console.log(playerName, playerHealth, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert ("Welcome to Robot Gladiators!");
    //subtract the value of 'playerAttack' from the value of 'enemyHealth.
    enemyHealth = enemyHealth - playerAttack;
    //log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    //subtract the value of 'enemyAttack' from the value of 'playerHealth.
    playerHealth = playerHealth - enemyAttack;
    //log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
};

fight();