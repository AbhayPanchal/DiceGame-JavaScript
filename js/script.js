/*
Name: Abhay Panchal
Student Number : 000813104
Date: 13-11-2020
*/

/*
This JavaScript file use to make changes in DOM according to user!
*/


window.addEventListener("load", function(){
    
    /**
     * this action happens when the form load.
     */
    document.forms.example_form.addEventListener("submit", function(event){
        event.preventDefault();//prevent form from submitting

        let name1 = document.forms.example_form.name1.value;//collect value for player1 name
        let name2 = document.forms.example_form.name2.value;//collect value for player2 name
        let age1 = document.forms.example_form.age1.value;//collect value for player1 age
        let age2 = document.forms.example_form.age2.value;//collect value for player2 age
        let fcolor = document.forms.example_form.color.value;//collect value for color

        let form = document.getElementById("example_form");

        form.style.display = "none"; //hidden form
        
        let player1 = document.getElementById("player1");
        let player2 = document.getElementById("player2");

        /**
         * Displaying players name
         */
        player1.innerHTML = name1 + + age1;
        player2.innerHTML = name2 + + age2;

        /**
         * Style the name of players
         */
        player1.style.color = fcolor;
        player1.style.border = "2px solid black";
        player1.style.borderRadius = "2px";
        player1.style.padding = "3px";
        player2.style.border = "2px solid black";
        player2.style.borderRadius = "2px";
        player2.style.padding = "3px";
        player2.style.color = fcolor;

        let button = document.createElement("button");
        button.innerHTML = "Roll the Dice Again!";

        let btn = document.getElementById("button");
        btn.appendChild(button);//button
        
        /**
         * Click event for Roll button
         * 
         * this event help to changing dice and chose the winner form players
         */
        let count1 = 0;
        let count2 = 0;
        button.addEventListener("click", function(){
            let p = document.getElementById("p");

            p.innerHTML = " ";
            
            const firstRandomNum = Math.floor(Math.random()*6) + 1; //random number generator
            const secondRandomNum = Math.floor(Math.random()*6) + 1;
            
            //src for image
            const firstDiceImage = 'img/'+ firstRandomNum + '.png';
            const secondDiceImage = 'img/'+ secondRandomNum + '.png';

            let img1 = document.getElementById("img1");
            let img2 = document.getElementById("img2");

            img1.src = firstDiceImage;
            img2.src= secondDiceImage;

            let result = document.getElementById("Result");

            let score = document.getElementById("Score");

            
            /**
             * Choosing winner according to result
             */
            if(firstRandomNum > secondRandomNum){
                result.innerHTML = name1 + " is a winner! ";
                
                count1 += 1;
                score.innerHTML = name1 + ": " + count1;
            }else if (firstRandomNum < secondRandomNum) {
                result.innerText = name2 + " is a winner!";
                
                count2 += 1;
                score.innerHTML = name2 + ": " + count2;
            } else {
                result.innerHTML = "Game is Draw Roll again to see who is gonna win!!!";
            }


            
            
        });

        let imghelp = document.getElementById("help");

        imghelp.addEventListener("click", help());
        
        /**
         * This function add help insruction in p tag of html
         */
        function help(){
           let p = document.getElementById("p");

           p.innerHTML = 'This is a Multiplayer game! <br> Players can roll dices and player who has highest number will win!';
        }
        
    });
   
});
