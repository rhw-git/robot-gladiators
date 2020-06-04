//Game states
//"WIN" - Player robot has defeated all enemy robots
//    *Fight all enemy robots
//    *Defeat each enemy robot
//"LOSE" - Player robot's health is zero or less

//function to generate a random numeric value
var randomNumber = function(min, max){
    var value = Math.floor(Math.random()*(max-min+1)+min);
    return value;
}

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//var enemyName = "Roborto";
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = randomNumber(40, 60);
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
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            }
        }
    
        //remove enemy 's health by subtracting the amount set in the playerAttack
        var damage = randomNumber(playerAttack-3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);
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
        var damage = randomNumber(enemyAttack-3, enemyAttack);
        playerHealth = Math.max(0, playerHealth - damage);
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
    };
};

// function to start the game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i=0; i<enemyNames.length; i++){

        //other logic remains the same
        if (playerHealth >0){
            //let user know what round they are in, remember that arrys start at 0
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
            //pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            //reset enemyHealth before starting new fight
            enemyHealth = randomNumber(40, 60);
            fight(pickedEnemyName);

            // enter shop
            var shop = function(){
                //ask player what they'd like to do
                var shopOptionPrompt = window.prompt(
                    "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
                );

                //use switch to carry out action
                switch(shopOptionPrompt){
                    case "REFILL": // new case
                    case "refill":
                        if (playerMoney >7){
                            window.alert("Refilling player's health by 20 for 7 dollars.");
    
                            // increase health and decrease money
                            playerMoney = playerMoney - 7; 
                            playerHealth = playerHealth + 20;  
                        }else{
                            window.alert("you don't have enough memony!");
                        };
                        break;
                    
                    case "UPGRADE":
                    case "upgrade":
                        if (playerMoney >7){
                            window.alert("Upgrading player's attack by 6 for 7 dollars.");
    
                            // increase attack and decrease money
                            playerMoney = playerMoney - 7; 
                            playerAttack = playerAttack + 6;
                        }else{
                            window.alert("you don't have enough memony!");
                        };
                        break;   
                    
                    case "LEAVE":
                    case "leave":

                        // do nothing, so function will end.
                        break;
                    
                    default:
                        window.alert("You did not pick a valid option. Try again.");

                        // call shop function again
                        shop();
                };
            };
            
            // if we're not at the last enemy in the array and the player still alive.
            if (playerHealth > 0 && i < enemyNames.length - 1){

                //confirm to shop
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if(storeConfirm){
                    shop();
                };
            };

        }else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        };

    };

    //function to end game
    var endGame = function(){
        window.alert("The game has now ended. Let's see how you did!")
        //the player win, if them still alive
        if (playerHealth>0){
            window.alert("Great job! You've survived the game! You now have a score of " + playerMoney +".");
        }else{
            window.alert("You've lost your robot in battle.");
        }

        //ask player if they'd like to play again
        var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm){
            startGame();
        }else{
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
    }

    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function.
    endGame();


};

// start the game when the page loads
startGame();




