//Game states
//"WIN" - Player robot has defeated all enemy robots
//    *Fight all enemy robots
//    *Defeat each enemy robot
//"LOSE" - Player robot's health is zero or less





var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//you can also log multiple values at once like this
console.log(playerName, playerHealth, playerHealth);

//var enemyName = "Roborto";
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);

console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);

console.log(enemyNames[enemyNames.length - 1]);

for(var i=0; i<3; i++){
    console.log("apple", i);
}

for(var i=0; i<enemyNames.length; i++){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}


var fight = function() {
    window.alert ("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");
    if(promptFight === "fight" || promptFight === "FIGHT"){
        //remove enemy 's health by subtracting the amount set in the playerAttack
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        
        //check enemyHealth
        if (enemyHealth <=0){
            window.alert(enemyName + " has died!");
        }else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        };

        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + "now has " + playerHealth + " health remaining."
        );

        //check playerHealth
        if(playerHealth<=0){
            window.alert(playerName + " has died!");
        }else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        };

        //if player choses to skip
    }else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure?");

        //if yes (true), leave fight
        if(confirmSkip){
            window.alert(playerName + " has chosen to skip the fight! Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
            //if no (false), ask question again by running fight() again
        }else{
            fight();
        };

    }else {
        window.alert("You need to pick a valid option. Try again!"); 
    };
};

// fight();

