//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var match = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req,ress){
        ress.json(match);
    });
    app.post("/api/friends", function (req,res){
        let newFriend = req.body;

        for(var i = 0; i< newFriend.scores.length; i++){
            if (newFriend.scores[i] == "1 (Yes)"){
                newFriend.scores[i] =1;

            }else if(newFriend.scores[i] == "3 (No)"){
                newFriend.scores[i] =3;
            }else{
                newFriend.scores[i] = parseInt(newFriend.scores[i]);
            }
        }

        var compareArray = [];

        for (var i = 0; i< match.length; i++){
            var compareFriend = match[i];
            var difference = 0;

            for (var j = 0; j< compareFriend.scores.length;j++){
                var differenceScore = Math.abs(compareFriend.scores[j] - newFriend.scores[j]);
                totalScore += differenceScore;
            }
        }
    })
}