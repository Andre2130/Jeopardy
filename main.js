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
    
})
