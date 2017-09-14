$(() => {
    const history = [{
        Question:"who coined trap music?",
        Answer:"T.I",
        points: 200
    },
    {
        Question:"what was the first rap song?",
        Answer:"Rappers Delight",
        points: 400
    },
    {
        Question:"who is the founder of Hip-Hop?",
        Answer:"Grand Master Flash",
        points: 600
    },
    {
        Question:"How many pillars of Hip-Hop are there?",
        Answer:"3",
        points: 800
    },
    {
        Question:"who is the GOAT?",
        Answer:"50 Cent",
        points: 1000
    },
]
    const dirtySouth = [{
    Question:"who coined trap music?",
    Answer:"T.I",
    points: 200
},
{
    Question:"what was the first rap song?",
    Answer:"Rappers Delight",
    points: 400
},
{
    Question:"who is the founder of Hip-Hop?",
    Answer:"Grand Master Flash",
    points: 600
},
{
    Question:"How many pillars of Hip-Hop are there?",
    Answer:"3",
    points: 800
},
{
    Question:"who is the GOAT?",
    Answer:"50 Cent",
    points: 1000
},
]
const kingOfHipHop = [{
    Question:"who is the king of hip-hop?",
    Answer:"T.I",
    points: 200
},
{
    Question:"what was the first rap song?",
    Answer:"Rappers Delight",
    points: 400
},
{
    Question:"who is the founder of Hip-Hop?",
    Answer:"Grand Master Flash",
    points: 600
},
{
    Question:"How many pillars of Hip-Hop are there?",
    Answer:"3",
    points: 800
},
{
    Question:"who is the GOAT?",
    Answer:"50 Cent",
    points: 1000
},
]
const queenOfHipHop = [{
    Question:"who is the queen of hip-hop?",
    Answer:"T.I",
    points: 200
},
{
    Question:"what was the first rap song?",
    Answer:"Rappers Delight",
    points: 400
},
{
    Question:"who is the founder of Hip-Hop?",
    Answer:"Grand Master Flash",
    points: 600
},
{
    Question:"How many pillars of Hip-Hop are there?",
    Answer:"3",
    points: 800
},
{
    Question:"who is the GOAT?",
    Answer:"50 Cent",
    points: 1000
},
]
const westCoast = [{
    Question:"who runs the west?",
    Answer:"T.I",
    points: 200
},
{
    Question:"what was the first rap song?",
    Answer:"Rappers Delight",
    points: 400
},
{
    Question:"who is the founder of Hip-Hop?",
    Answer:"Grand Master Flash",
    points: 600
},
{
    Question:"How many pillars of Hip-Hop are there?",
    Answer:"3",
    points: 800
},
{
    Question:"who is the GOAT?",
    Answer:"50 Cent",
    points: 1000
},
]
const worldWide = [{
    Question:"who is the greatest rapper in the world?",
    Answer:"T.I",
    points: 200
},
{
    Question:"what was the first rap song?",
    Answer:"Rappers Delight",
    points: 400
},
{
    Question:"who is the founder of Hip-Hop?",
    Answer:"Grand Master Flash",
    points: 600
},
{
    Question:"How many pillars of Hip-Hop are there?",
    Answer:"3",
    points: 800
},
{
    Question:"who is the GOAT?",
    Answer:"50 Cent",
    points: 1000
},
]

let score = 0;
    $('.hist-2').on('click', function(){
        const y = prompt(history[0].Question);
        if (y === history[0].Answer) {
            alert("correct");
            score += history[0].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= history[0].points;
            $('.score').html(score);
        }
        
        $(".hist-2").css("background-color", "black");
    });

    $('.hist-4').on('click', function() {
        const y = prompt(history[1].Question);
        if (y === history[1].Answer) {
            alert("correct");
            score += history[1].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= history[1].points;
            $('.score').html(score);
        }
        $(".hist-4").css("background-color", "black");
    });
    $('.hist-6').on('click', function() {
        const y = prompt(history[2].Question);
        if (y === history[2].Answer) {
            alert("correct");
            score += history[2].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= history[2].points;
            $('.score').html(score);
        }
        $(".hist-6").css("background-color", "black");
    });
    $('.hist-8').on('click', function() {
        const y = prompt(history[3].Question);
        if (y === history[3].Answer) {
            alert("correct");
            score += history[3].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= history[3].points;
            $('.score').html(score);
        }
        $(".hist-8").css("background-color", "black");
    });
    $('.hist-10').on('click', function() {
        const y = prompt(history[4].Question);
        if (y === history[4].Answer) {
            alert("correct");
            score += history[4].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= history[4].points;
            $('.score').html(score);
        }
        $(".hist-10").css("background-color", "black");
    });
    $('.ds2').on('click', function(){
        const y = prompt(dirtySouth[0].Question);
        if (y === dirtySouth[0].Answer) {
            alert("correct");
            score += dirtySouth[0].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= dirtySouth[0].points;
            $('.score').html(score);
        }
        $(".ds2").css("background-color", "black");
    });

    $('.ds4').on('click', function() {
        const y = prompt(dirtySouth[1].Question);
        if (y === dirtySouth[1].Answer) {
            alert("correct");
            score += dirtySouth[1].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= dirtySouth[1].points;
            $('.score').html(score);
        }
        $(".ds4").css("background-color", "black");
    });
    $('.ds6').on('click', function() {
        const y = prompt(dirtySouth[2].Question);
        if (y === dirtySouth[2].Answer) {
            alert("correct");
            score += dirtySouth[2].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= dirtySouth[2].points;
            $('.score').html(score);
        }
        $(".ds6").css("background-color", "black");
    });
    $('.ds8').on('click', function() {
        const y = prompt(dirtySouth[3].Question);
        if (y === dirtySouth[3].Answer) {
            alert("correct");
            score += dirtySouth[3].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= dirtySouth[3].points;
            $('.score').html(score);
        }
        $(".ds8").css("background-color", "black");
    });
    $('.ds10').on('click', function() {
        const y = prompt(dirtySouth[4].Question);
        if (y === dirtySouth[4].Answer) {
            alert("correct");
            score += dirtySouth[4].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= dirtySouth[4].points;
            $('.score').html(score);
        }
        $(".ds10").css("background-color", "black");
    });
    $('.koh2').on('click', function(){
        const y = prompt(kingOfHipHop[0].Question);
        if (y === kingOfHipHop[0].Answer) {
            alert("correct");
            score += kingOfHipHop[0].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= kingOfHipHop[0].points;
            $('.score').html(score);
        }
        $(".koh2").css("background-color", "black");
    });

    $('.koh4').on('click', function() {
        const y = prompt(kingOfHipHop[1].Question);
        if (y === kingOfHipHop[1].Answer) {
            alert("correct");
            score += kingOfHipHop[1].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= kingOfHipHop[1].points;
            $('.score').html(score);
        }
        $(".koh4").css("background-color", "black");
    });
    $('.koh6').on('click', function() {
        const y = prompt(kingOfHipHop[2].Question);
        if (y === kingOfHipHop[2].Answer) {
            alert("correct");
            score += kingOfHipHop[2].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= kingOfHipHop[2].points;
            $('.score').html(score);
        }
        $(".koh6").css("background-color", "black");
    });
    $('.koh8').on('click', function() {
        const y = prompt(kingOfHipHop[3].Question);
        if (y === kingOfHipHop[3].Answer) {
            alert("correct");
            score += kingOfHipHop[3].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= kingOfHipHop[3].points;
            $('.score').html(score);
        }
        $(".koh8").css("background-color", "black");
    });
    $('.koh10').on('click', function() {
        const y = prompt(kingOfHipHop[4].Question);
        if (y === kingOfHipHop[4].Answer) {
            alert("correct");
            score += kingOfHipHop[4].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= kingOfHipHop[4].points;
            $('.score').html(score);
        }
        $(".koh10").css("background-color", "black");
    });
    $('.qoh2').on('click', function(){
        const y = prompt(queenOfHipHop[0].Question);
        if (y === queenOfHipHop[0].Answer) {
            alert("correct");
            score += queenOfHipHop[0].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= queenOfHipHop[0].points;
            $('.score').html(score);
        }
        $(".qoh2").css("background-color", "black");
    });

    $('.qoh4').on('click', function() {
        const y = prompt(queenOfHipHop[1].Question);
        if (y === queenOfHipHop[1].Answer) {
            alert("correct");
            score += queenOfHipHop[1].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= queenOfHipHop[1].points;
            $('.score').html(score);
        }
        $(".qoh4").css("background-color", "black");
    });
    $('.qoh6').on('click', function() {
        const y = prompt(queenOfHipHop[2].Question);
        if (y === queenOfHipHop[2].Answer) {
            alert("correct");
            score += queenOfHipHop[2].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= queenOfHipHop[2].points;
            $('.score').html(score);
        }
        $(".qoh6").css("background-color", "black");
    });
    $('.qoh8').on('click', function() {
        const y = prompt(queenOfHipHop[3].Question);
        if (y === queenOfHipHop[3].Answer) {
            alert("correct");
            score += queenOfHipHop[3].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= queenOfHipHop[3].points;
            $('.score').html(score);
        }
        $(".qoh8").css("background-color", "black");
    });
    $('.qoh10').on('click', function() {
        const y = prompt(queenOfHipHop[4].Question);
        if (y === queenOfHipHop[4].Answer) {
            alert("correct");
            score += queenOfHipHop[4].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= queenOfHipHop[4].points;
            $('.score').html(score);
        }
        $(".qoh10").css("background-color", "black");
    });
    $('.wc2').on('click', function(){
        const y = prompt(westCoast[0].Question);
        if (y === westCoast[0].Answer) {
            alert("correct");
            score += westCoast[0].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= westCoast[0].points;
            $('.score').html(score);
        }
        $(".wc2").css("background-color", "black");
    });

    $('.wc4').on('click', function() {
        const y = prompt(westCoast[1].Question);
        if (y === westCoast[1].Answer) {
            alert("correct");
            score += westCoast[1].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= westCoast[1].points;
            $('.score').html(score);
        }
        $(".wc4").css("background-color", "black");
    });
    $('.wc6').on('click', function() {
        const y = prompt(westCoast[2].Question);
        if (y === westCoast[2].Answer) {
            alert("correct");
            score += westCoast[2].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= westCoast[2].points;
            $('.score').html(score);
        }
        $(".wc6").css("background-color", "black");
    });
    $('.wc8').on('click', function() {
        const y = prompt(westCoast[3].Question);
        if (y === westCoast[3].Answer) {
            alert("correct");
            score += westCoast[3].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= westCoast[3].points;
            $('.score').html(score);
        }
        $(".wc8").css("background-color", "black");
    });
    $('.wc10').on('click', function() {
        const y = prompt(westCoast[4].Question);
        if (y === westCoast[4].Answer) {
            alert("correct");
            score += westCoast[4].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= westCoast[4].points;
            $('.score').html(score);
        }
        $(".wc10").css("background-color", "black");
    });
    $('.ww2').on('click', function(){
        const y = prompt(worldWide[0].Question);
        if (y === worldWide[0].Answer) {
            alert("correct");
            score += worldWide[0].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= worldWide[0].points;
            $('.score').html(score);
        }
        $(".ww2").css("background-color", "black");
    });

    $('.ww4').on('click', function() {
        const y = prompt(worldWide[1].Question);
        if (y === worldWide[1].Answer) {
            alert("correct");
            score += worldWide[1].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= worldWide[1].points;
            $('.score').html(score);
        }
        $(".ww4").css("background-color", "black");
    });
    $('.ww6').on('click', function() {
        const y = prompt(worldWide[2].Question);
        if (y === worldWide[2].Answer) {
            alert("correct");
            score += worldWide[2].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= worldWide[2].points;
            $('.score').html(score);
        }
        $(".ww6").css("background-color", "black");
    });
    $('.ww8').on('click', function() {
        const y = prompt(worldWide[3].Question);
        if (y === worldWide[3].Answer) {
            alert("correct");
            score += worldWide[3].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= worldWide[3].points;
            $('.score').html(score);
        }
        $(".ww8").css("background-color", "black");
    });
    $('.ww10').on('click', function() {
        const y = prompt(worldWide[4].Question);
        if (y === worldWide[4].Answer) {
            alert("correct");
            score += worldWide[4].points;
            $('.score').html(score);
        } else {
            alert("incorrect")
            score -= worldWide[4].points;
            $('.score').html(score);
        }
        $(".ww10").css("background-color", "black");
       
    });
   
})
