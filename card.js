// takes in two values to set these two properties for each card object that is created 

let Card = function(pSuit, pRank) {
    this.suit = pSuit;
    this.rank = pRank;
    this.inUse = false;
}