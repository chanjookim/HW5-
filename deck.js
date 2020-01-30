// defines an array called cardArray and fills the array w 52 card objects.

let deck = {
    cardArray: [],
    load: function() {
        for(i = 2; i < 14; i++){
            for(j = 0; j < 4; j++){
            this.cardArray.push(new Card(j,i));
            }
        }
    }
    
}


