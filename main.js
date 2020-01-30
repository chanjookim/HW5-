document.addEventlistener("DOMContentLoaded",function(event) {
    
    let turnNumber = 0;
    let playerScore = 0;
    let computerScore = 0;

    
    
    const dealButton = document.getElementById("start");
    const nextButton = document.getElementById("next");
    
    
    playerArr = [];
    computerArr = [];
    
    dealButton.addEventListener("click", function(){
        turnNumber = 0;
        playerScore = 0;
        computerScore = 0;
        
        deck.load();
        for(i = 0; i< 52; i++){ // this shuffles
            const temp = Math.floor(Math.random()*(i+1)); //creates random number
            const exchange = deck.cardArray[temp];
            deck.cardArray[temp] = deck.cardArray[i];
            deck.cardArray[i] = exchange;
        }
        for(j = 0; j < 26; j++) {
            playerArr[j] = deck.cardArray[j];
            computerArr[j]=deck[j + 26]; // this allows a division and creates a separate deck for both player and computer gamer.
        }
        
        dealButton.style.display = "none";
        nextButton.style.display = "block";
    });
    
    nextButton.addEventListener("click", function(){
        let playerS = document.getElementById("playerScore");
        let computerS = document.getElementById("computerScore");
        let end = document.getElementById("end");
        let playerC = document.getElementById("playerCard");
        let computerC = document.getElementById("computerCard");
        
        let pSuit = playerArr[turnNumber].suit; 
        let pRank = playerArr[turnNumber].rank;
        let cSuit = computerArr[turnNumber].suit;
        let cRank = computerArr[turnNumber].rank;
        
        //from here, this displays the player's + computer's cards with something like x "of " d
        playerC.innerHTML = faces(pRank) + " of " + toString(pSuit);
        playerC.style.color = color(pSuit);
        computerC.innerHTML = faces(cRank) + " of " + toString(cSuit);
        computerC.style.color = colorA(cSuit);
        
        
        if(cRank > pRank) {
            end.innerHTML = "Computer Wins";
        } else if (cRank == pRank){
            if(cSuit > pSuit){
                end.innerHTML = "Computer Wins";
            } else {
                end.innerHTML = "Player Wins, WHOO HOO";
            }
        } else {
            end.innerHTML = "Player Wins, WOO WEE";
        }
        playerS.innerHTML = "Player Score" + playerS;
        computerS.innerHTML = "Computer Score" + computerS;
        
        turnNumber++;
        document.getElementById("end").innerHTML = "Turn Number:" + turnNumber; 
        
        if(25<turnNumber){
            if(computerS > playerS){
               end.innerHTML = "Game Over COMPUTER WINS!"
               } else if(conputerS == playerS) {
                   end.innerHTML = "Game Over TIE!"
               } else {
                   end.innerHTML = "Game Over YOU WIN!"
               }
            dealButton.style.display = "block"; // start over button 
            nextButton.style.display = "none"; // not shown because deal button has to be shown
        }
        
            function toString(x){
        switch(x){
            case 4:
                suit = "SPADES";
            case 3: 
                suit = "HEARTS";
            case 2: 
                suit = "DIAMONDS";
            case 1:
                suit = "CLUBS";
                
        }
        return suit;
    }
    
    function faces(y) {
        switch(y){
            case 14: 
                rank = "ACE";
            case 13: 
                rank = "KING";
            case 12:
                rank = "QUEEN";
            case 11:
                rank = "JACK";
        }
        return rank;
    }
    
    function colorA(x) {
        switch(x) {
            case 1: 
                color = "black"; 
            case 4: 
                color = "black";
            case 2: 
                color = "red";
            case 3: 
                color = "red";
        }
        return color; 
    }
        
    });
    
});