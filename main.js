$(() => {
    const history = [{
        Question:"What is the name of the DJ for the Furious Five?",
        Answer:"Grandmaster Flash ",
        points: 200
    },
    {
        Question:"What was the name of the song that brought rap music to the mainstream in 1979, by the Sugarhill Gang?",
        Answer:"Rappers Delight",
        points: 400
    },
    {
        Question:"What member of the Wu-Tang Clan died in 2004 inside a recording studio just two days before his 36th birthday?",
        Answer:"ODB",
        points: 600
    },
    {
        Question:"In 1975, DJ Grand Wizard accidentally created a new sound by trying to hold a spinning record in place. The sound became a major element of modern deejaying. What is it called?",
        Answer:"scratch",
        points: 800
    },
    {
        Question:"In the 1970s, an East Bronx gang named Savage Seven started to organize cultural events for youths. The gang members formed a hip-hop awareness group in 1973 called what?",
        Answer:"Zulu Nation",
        points: 1000
    },
]
    const dirtySouth = [{
    Question:"who coined trap music?",
    Answer:"T.I",
    points: 200
},
{
    Question:"Who is this legendary Memphis rap group that won an academy award for best original song in 2006?",
    Answer:"Three 6 Mafia",
    points: 400
},
{
    Question:"Which artist is the 'King of Trill?'",
    Answer:"Bun-B",
    points: 600
},
{
    Question:"Which of the following artists performed the song 'Hey Ya'?",
    Answer:"OutKast",
    points: 800
},
{
    Question:"What rapper played for the New Orleans hornets?",
    Answer:"Master P",
    points: 1000
},
]
const kingOfHipHop = [{
    Question:"What is the stage name of the American rapper with the birth name Marshall Bruce Mathers III?",
    Answer:"Eminem",
    points: 200
},
{
    Question:"Dr.Dre, Jay-Z, Rakim and Truth Hurts team up together in a song called 'The Watcher 2'. What album does that song come from?",
    Answer:"Jay-Z - 'The Blueprint Vol 2: The Gift And The Curse'",
    points: 400
},
{
    Question:"Who won the album sales competition between Kanye West and 50 Cent",
    Answer:"Kanye West",
    points: 600
},
{
    Question:"How old was the Notorious B.I.G. at the time of his death?",
    Answer:"24",
    points: 800
},
{
    Question:"who Released a series of street mixtapes in 2002. They became so popular that Eminem heard them and signed him to his record label?",
    Answer:"50 Cent",
    points: 1000
},
]
const queenOfHipHop = [{
    Question:"Who is labeled 'Princess of the Roc' on Roc-A-Fella records?",
    Answer:"Teairra Mari",
    points: 200
},
{
    Question:"Younger sister of rappers Milk D and Gizmo of the group Audio Two, this rapper cut the tracks, 'Cha, Cha, Cha', 'Poor Georgie' and 'Paper Thin'.",
    Answer:"MC Lyte",
    points: 400
},
{
    Question:"Originally a member of the group, Junior Mafia, this Brooklyn rapper is notorious for her provocative dressing habits and explicit lyrics.",
    Answer:"Lil Kim",
    points: 600
},
{
    Question:"What song did Queen Latifah record in the 1980s that celebrated womanhood?",
    Answer:"Ladies First",
    points: 800
},
{
    Question:"This trio is considered to be the best female rap act of all time, winning five Grammys and numerous other awards for songs like 'Let's Talk About Sex', 'I'll Take Your Man', and 'Shake Your Thang'.",
    Answer:"Salt N Pepa",
    points: 1000
},
]
const westCoast = [{
    Question:"This rapper was born O'Shea Jackson and has moved on from his days in N.W.A. to star in movies such as 'Barbershop' (2002) and 'Are We There Yet?' (2005). What is his stage name?",
    Answer:"Ice Cube",
    points: 200
},
{
    Question:"Andre Young is better known as which rapper?",
    Answer:"Dr.Dre",
    points: 400
},
{
    Question:"Who was the rapper from Compton, California who was at one time signed to G-Unit Records?",
    Answer:"The Game",
    points: 600
},
{
    Question:"Which record label featured artists such as Dr. Dre, Tupac, and Snoop Dogg?",
    Answer:"Death Row Records",
    points: 800
},
{
    Question:"How many albums did 2Pac release before he was murdered?",
    Answer:"4",
    points: 1000
},
]
const worldWide = [{
    Question:"Who holds the world record for fastest rapper",
    Answer:"Twista",
    points: 200
},
{
    Question:"Who holds the world record for longest freestly?",
    Answer:"Chiddy",
    points: 400
},
{
    Question:"what duo were the first to receive a Grammy for Best Rap Performance?",
    Answer:"DJ Jazzy Jeff & The Fresh Prince",
    points: 600
},
{
    Question:"Who has the most #1 solo rap albums of all time?",
    Answer:"Jay-Z",
    points: 800
},
{
    Question:"who had the largest debut album ever with 9000,000 copies sold first week?",
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
