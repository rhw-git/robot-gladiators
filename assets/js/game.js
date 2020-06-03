//Game states
//"WIN" - Player robot has defeated all enemy robots
//    *Fight all enemy robots
//    *Defeat each enemy robot
//"LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//var enemyName = "Roborto";
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// console.log(enemyHealth);

var fight = function(enemyName) {
    //repeat and excute as long as the enemy robot is alive
    while (enemyHealth>0 && playerHealth>0) {
        //window.alert ("Welcome to Robot Gladiators!");
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure?");
    
            //if yes (true), leave fight
            if(confirmSkip){
                window.alert(playerName + " has chosen to skip the fight! Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
    
        //remove enemy 's health by subtracting the amount set in the playerAttack
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        
        //check enemyHealth
        if (enemyHealth<=0){
            window.alert(enemyName + " has died!");
            break;
        }else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        };

        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check playerHealth
        if(playerHealth<=0){
            window.alert(playerName + " has died!");
            break;
        }else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        };
    }
};

for(var i=0; i<enemyNames.length; i++){
    //call fight function with enemyrobot
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

