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

// not accpet invalid player name such as blank or null
var getPlayerName = function(){
    var name = "";
    while (name === "" || name === null){
        name = prompt("what is your robot's name?");
    }    
    console.log("your robot's name is " + "" + name);
    return name;
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.attack = 10;
        this.money =10;
    },
    refillHealth: function(){
        if (this.money>7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -=7;
        }else{
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function(){
        this.attack += 6;
        this.money -= 7;
        if(this.money>7){
            window.alert("Upgrading player's attack by 6 for 6 dollars.");
            this.attack += 6;
            this.money -=7;
        }else{
            window.alert("You don't have enough money!");
        };
    }
};

//var enemyName = "Roborto";
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14),
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14),
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14),
    },
];



// console.log(enemyHealth);
var fight = function(enemy) {
    //repeat and excute as long as the enemy robot is alive
    while (enemy.health>0 && playerInfo.health>0) {
        //window.alert ("Welcome to Robot Gladiators!");
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure?");
    
            //if yes (true), leave fight
            if(confirmSkip){
                window.alert(playerInfo.name + " has chosen to skip the fight! Goodbye!");
                // subtract money from playerMoney for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerMoney", playerInfo.money);
                break;
            }
        }
    
        //remove enemy 's health by subtracting the amount set in the playerAttack
        var damage = randomNumber(playerInfo.attack-3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );
        
        //check enemyHealth
        if (enemy.health<=0){
            window.alert(enemy.name + " has died!");
            break;
        }else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        };

        //remove player's health by subtracting the amount set in the enemyAttack variable
        var damage = randomNumber(enemy.attack-3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        //check playerHealth
        if(playerInfo.health<=0){
            window.alert(playerInfo.name + " has died!");
            break;
        }else{
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        };
    };
};

// function to start the game
var startGame = function() {
    //reset player stats
    playerInfo.reset();
    for(var i=0; i<enemyInfo.length; i++){

        //other logic remains the same
        if (playerInfo.health >0){
            //let user know what round they are in, remember that arrys start at 0
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
            debugger;
            //pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyObj = enemyInfo[i];
            //reset enemyHealth before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);

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
                        playerInfo.refillHealth();
                        break;
                    
                    case "UPGRADE":
                    case "upgrade":
                        playerInfo.upgradeAttack();
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
            if (playerInfo.health > 0 && i < enemyInfo.length - 1){

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
        if (playerInfo.health>0){
            window.alert("Great job! You've survived the game! You now have a score of " + playerInfo.money +".");
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
