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
    });
    
})
