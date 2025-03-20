document.querySelector(".again").style.display = "none";
document.querySelector(".top5").style.display = "none";

document.querySelector(".play").addEventListener("click", function () {
    document.querySelector(".top3").style.display = "none";
    document.querySelector(".top4").style.display = "inline";
    document.querySelector(".again").style.display = "none";
    document.querySelector(".top5").style.display = "none";
    document.querySelector(".footer").style.bottom = "-150px";

    document.querySelector(".top3").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".top3").style.display = "none";
        document.querySelector(".top4").style.display = "block";
        document.querySelector(".top4").style.opacity = "1";
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
    let teams = {
        "Pakistan": [
            { name: "Babar Azam", role: "Batsman" },
            { name: "Shaheen Afridi", role: "Fast Bowler" },
            { name: "Shadab Khan", role: "All-rounder" },
            { name: "Iftikhar Ahmed", role: "All-rounder" },
            { name: "Mohammad Rizwan", role: "Wicketkeeper Batsman" },
            { name: "Usman Khan", role: "Wicketkeeper Batsman" },
            { name: "Haris Rauf", role: "Fast Bowler" },
            { name: "Fakhar Zaman", role: "Batsman" },
            { name: "Imam ul Haq", role: "Batsman" },
            { name: "Naseem Shah", role: "Fast Bowler" },
            { name: "Hasan Ali", role: "Fast Bowler" },
            { name: "Abrar Ahmed", role: "Spinner" },
            { name: "Salman Ali Agha", role: "All-rounder" },
            { name: "Saud Shakeel", role: "All-rounder" },
            { name: "Sajid Khan", role: "Spinner" },
            { name: "Nouman Ali", role: "Spinner" }
        ],
        "India": [
            { name: "Virat Kohli", role: "Batsman" },
            { name: "Jasprit Bumrah", role: "Fast Bowler" },
            { name: "Rohit Sharma", role: "Batsman" },
            { name: "Shumbman Gill", role: "Batsman" },
            { name: "Rishabh Pant", role: "Wicketkeeper Batsman" },
            { name: "Ravindra Jadeja", role: "All-rounder" },
            { name: "Mohammed Shami", role: "Fast Bowler" },
            { name: "Mohammad Siraj", role: "Fast Bowler" },
            { name: "Ravichandran Ashwin", role: "Spinner" },
            { name: "Axar Patel", role: "Spinner" },
            { name: "Cheteshwar Pujara", role: "Batsman" },
            { name: "KL Rahul", role: "Wicketkeeper Batsman" },
            { name: "Hardik Pandya", role: "All-rounder" },
            { name: "Kuldeep Yadav", role: "Spinner" },
            { name: "Shreyas Iyer", role: "Batsman" },
            { name: "Yashasvi Jaiswal", role: "Batsman" }
        ],
        "Australia": [
            { name: "Pat Cummins", role: "Fast Bowler" },
            { name: "David Warner", role: "Batsman" },
            { name: "Steve Smith", role: "Batsman" },
            { name: "Marnus Labuschagne", role: "Batsman" },
            { name: "Travis Head", role: "Batsman" },
            { name: "Mitchell Marsh", role: "All-rounder" },
            { name: "Josh Hazlewood", role: "Fast Bowler" },
            { name: "Mitchell Starc", role: "Fast Bowler" },
            { name: "Nathan Lyon", role: "Spinner" },
            { name: "Glenn Maxwell", role: "All-rounder" },
            { name: "Marcus Stoinis", role: "All-rounder" },
            { name: "Alex Carey", role: "Wicketkeeper Batsman" },
            { name: "Adam Zampa", role: "Spinner" },
            { name: "Cameron Green", role: "All-rounder" },
            { name: "Usman Khawaja", role: "Batsman" },
            { name: "Tim David", role: "Batsman" },
            { name: "Josh Inglis", role: "Wicketkeeper Batsman" },
            { name: "Ashton Agar", role: "Spinner" },
            { name: "Matthew Wade", role: "Wicketkeeper Batsman" }
        ],
        "South Africa": [
            { name: "Temba Bavuma", role: "Batsman" },
            { name: "Quinton de Kock", role: "Wicketkeeper Batsman" },
            { name: "David Miller", role: "Batsman" },
            { name: "Kagiso Rabada", role: "Fast Bowler" },
            { name: "Anrich Nortje", role: "Fast Bowler" },
            { name: "Lungi Ngidi", role: "Fast Bowler" },
            { name: "Marco Jansen", role: "All-rounder" }
        ],
        "England": [
            { name: "Jos Buttler", role: "Wicketkeeper Batsman" },
            { name: "Joe Root", role: "Batsman" },
            { name: "Ben Stokes", role: "All-rounder" },
            { name: "Jonny Bairstow", role: "Wicketkeeper Batsman" },
            { name: "Jofra Archer", role: "Fast Bowler" },
            { name: "Mark Wood", role: "Fast Bowler" },
            { name: "Adil Rashid", role: "Spinner" }
        ],
        "New Zealand": [
            { name: "Kane Williamson", role: "Batsman" },
            { name: "Devon Conway", role: "Batsman" },
            { name: "Daryl Mitchell", role: "Batsman" },
            { name: "Glenn Phillips", role: "All-rounder" },
            { name: "Michael Bracewell", role: "All-rounder" },
            { name: "Trent Boult", role: "Fast Bowler" },
            { name: "Tim Southee", role: "Fast Bowler" },
            { name: "Matt Henry", role: "Fast Bowler" },
            { name: "Mitchell Santner", role: "Spinner" }
        ],
        "Bangladesh": [
            { name: "Shakib Al Hasan", role: "All-rounder" },
            { name: "Tamim Iqbal", role: "Batsman" },
            { name: "Liton Das", role: "Wicketkeeper Batsman" },
            { name: "Mushfiqur Rahim", role: "Wicketkeeper Batsman" },
            { name: "Taskin Ahmed", role: "Fast Bowler" },
            { name: "Mustafizur Rahman", role: "Fast Bowler" },
            { name: "Mehidy Hasan Miraz", role: "All-rounder" }
        ],
        "Sri Lanka": [
            { name: "Dasun Shanaka", role: "All-rounder" },
            { name: "Kusal Mendis", role: "Wicketkeeper Batsman" },
            { name: "Pathum Nissanka", role: "Batsman" },
            { name: "Charith Asalanka", role: "Batsman" },
            { name: "Maheesh Theekshana", role: "Spinner" },
            { name: "Wanindu Hasaranga", role: "All-rounder" },
            { name: "Dushmantha Chameera", role: "Fast Bowler" }
        ],
        "West Indies": [
            { name: "Nicholas Pooran", role: "Wicketkeeper Batsman" },
            { name: "Rovman Powell", role: "All-rounder" },
            { name: "Shimron Hetmyer", role: "Batsman" },
            { name: "Alzarri Joseph", role: "Fast Bowler" },
            { name: "Jason Holder", role: "All-rounder" },
            { name: "Andre Russell", role: "All-rounder" }
        ],
        "Afghanistan": [
            { name: "Rashid Khan", role: "Spinner" },
            { name: "Mohammad Nabi", role: "All-rounder" },
            { name: "Rahmanullah Gurbaz", role: "Wicketkeeper Batsman" },
            { name: "Ibrahim Zadran", role: "Batsman" },
            { name: "Mujeeb Ur Rahman", role: "Spinner" },
            { name: "Fazalhaq Farooqi", role: "Fast Bowler" }
        ],

    };

    let stage = "team";
    let selectedTeam = "";
    let currentIndex = 0;
    let no = 0;
    let selectedRole = "";
    let filteredPlayers = [];

    function updateQuestion() {
        const questionElement = document.querySelector(".quest");
        const top5Element = document.querySelector(".top5");
        const btn1 = document.querySelector(".btn1");
        const btn2 = document.querySelector(".btn2");

        if (stage === "team") {
            let teamNames = Object.keys(teams);
            if (currentIndex < teamNames.length) {
                questionElement.innerHTML = `Is the player from ${teamNames[currentIndex]}?`;
                no++;
                document.querySelector(".no").innerHTML = `Question no. ${no}`;
                document.querySelector(".question").style.height = "auto";
            } else {
                questionElement.innerHTML = "No team selected! Imagine a current cricket team :( ";
                btn1.style.display = "none";
                btn2.style.display = "none";
                document.querySelector(".again").style.display = "block";
                document.querySelector(".again").style.marginTop = "-68px";
            }
        } else if (stage === "role") {
            if (currentIndex < filteredPlayers.length) {
                no++;
                questionElement.innerHTML = `Is the player a ${filteredPlayers[currentIndex].role}?`;
                document.querySelector(".no").innerHTML = `Question no. ${no}`;
                document.querySelector(".question").style.height = "170px";
                
                document.querySelector(".question").style.height = "auto";
                if (currentIndex > 0 && currentIndex < filteredPlayers.length && filteredPlayers[currentIndex].role === filteredPlayers[currentIndex - 1].role) {
                    currentIndex++;
                    updateQuestion();
                    return;
                }
                // if (currentIndex > 0 && players[currentIndex].role === players[currentIndex - 1].role) {
                //     currentIndex++;
                //     updateQuestion();
                //     return;
                // }
                // if (currentIndex > 0 && filteredPlayers[currentIndex].role === filteredPlayers[currentIndex - 1].role) {
                //     currentIndex++;
                //     updateQuestion();
                //     return;
                // }
            } 
            else {
                questionElement.innerHTML = "No matching players found! Restarting...";
                btn1.style.display = "none";
                btn2.style.display = "none";
                document.querySelector(".again").style.display = "block";
                document.querySelector(".again").style.marginTop = "-68px";
            }
        } else if (stage === "player") {
            if (currentIndex < filteredPlayers.length) {
                
                questionElement.innerHTML = getFamousQuestion(filteredPlayers[currentIndex].name);
                document.querySelector(".question").style.height = "170px";
                no++;
                document.querySelector(".no").innerHTML = `Question no. ${no}`;
                document.querySelector(".question").style.height = "auto";
                // document.querySelector(".question").style.height = document.querySelector(".question").scrollHeight + "px"; 
            } else {
                questionElement.innerHTML = "Player not found! :(";
                btn1.style.display = "none";
                btn2.style.display = "none";
                document.querySelector(".again").style.display = "block";
                document.querySelector(".again").style.marginTop = "-68px";
            }
        }
    }

    function getFamousQuestion(playerName) {
        let questions = {
            "Babar Azam": "Is the player famous as King?",
            "Fakhar Zaman": "Is the player famous for playing well against New Zealand?",
            "Shaheen Afridi": "Is the player famous as the name of an eagle?",
            "Shadab Khan": "Is the player famous for being the best fielder in the Pakistani team?",
            "Imam ul Haq": "Is the player famous as the Friend of Babar Azam?",
            "Haris Rauf": "Is the player famous as the name of speed gun or six machine?",
            "Naseem Shah": "Is the player famous for his swing?",
            "Hasan Ali": "Is the player famous for dropping a catch in the T20 WC 2021?",
            "Shadab Khan": "Is the player famous for being the best fielder in the Pakistani team?",
            "Imad Wasim": "Did the player retire from cricket after a bad performance in T20 WC 2024?",
            "Iftikhar Ahmed": "Is the player trolled for his age?",
            "Salman Ali Agha": "Is the player good against spin and also the vice-captain of the T20 and ODI team?",
            "Saud Shakeel": "Is the player good against spin and also the vice-captain of the Pakistani team in Test?",
            "Mohammad Rizwan": "Is the player famous as a religious person?",
            "Usman Khan": "Is the player famous for leaving the UAE team?",
            "Abrar Ahmed": "Is the player famous as the mystery spinner?",
            "Sajid Khan": "Is the player famous for his aggression?",
            "Nouman Ali": "Is the player famous for being older than most teammates?",

            "Virat Kohli": "Is the player famous for chasing runs or as the name of King?",
            "Jasprit Bumrah": "Is the player famous for his unplayable yorkers?",
            "Rohit Sharma": "Is the player famous for his explosive batting and captaincy?",
            "Shubman Gill": "Is the youngster famous for his elegant stroke play and consistency?",
            "Rishabh Pant": "Is the player famous for his aggressive wicketkeeping and fearless batting?",
            "Ravindra Jadeja": "Is the player famous for his exceptional all-round skills and fielding?",
            "Mohammed Shami": "Is the player famous for his lethal seam bowling and reverse swing?",
            "Mohammad Siraj": "Is the player famous for his fiery pace and passionate celebrations especially aganist Sri Lanka?",
            "Ravichandran Ashwin": "Is the player famous for his off-spin variations and cricketing intellect?",
            "Axar Patel": "Is the player famous for his accurate left-arm spin and handy batting?",
            "Cheteshwar Pujara": "Is the player famous for his solid defensive technique and patience especially in BGT?",
            "KL Rahul": "Is the player famous for his versatility in all formats and wicketkeeping?",
            "Hardik Pandya": "Is the player famous for his good batting and fast bowling and also his recent breakup?",
            "Kuldeep Yadav": "Is the player famous for his left-arm wrist spin and googlies?",
            "Shreyas Iyer": "Is the player famous for his aggressive middle-order batting?",
            "Yashasvi Jaiswal": "Is the player  youngste and known for his fearless approach and attacking stroke play?",


            "Pat Cummins": "Is the player famous for leading Australia as a captain and his lethal bowling?",
            "David Warner": "Is the player famous for his aggressive batting as opener and explosive starts?",
            "Steve Smith": "Is the player famous for his unorthodox technique and consistency or he is also the part of fab 4?",
            "Marnus Labuschagne": "Is the player famous for his exceptional batting and love for Test cricket?",
            "Travis Head": "Is the player famous for his fearless batting in crucial matches or as the nightmare of India?",
            "Mitchell Marsh": "Is the player famous for his all-round abilities as fast bolwer and power hitting?",
            "Josh Hazlewood": "Is the player famous for his accuracy and line-length bowling?",
            "Mitchell Starc": "Is the player famous for his deadly yorkers and express pace?",
            "Nathan Lyon": "Is the player famous for being Australia's best off-spinner in Test cricket?",
            "Glenn Maxwell": "Is the player famous for his 360-degree batting and insane shot-making?",
            "Marcus Stoinis": "Is the player famous for his all-round abilities and finishing skills or his muscles?",
            "Alex Carey": "Is the player famous for his sharp wicketkeeping and batting skills?",
            "Adam Zampa": "Is the player famous for being Australia's lead leg-spinner in white-ball cricket?",
            "Cameron Green": "Is the player famous for his tall physique and all-round capabilities?",
            "Usman Khawaja": "Is the player famous for his classy batting and Test match resilience?",
            "Tim David": "Is the player famous for his power hitting in T20 cricket?",
            "Josh Inglis": "Is the player famous for his wicketkeeping and aggressive batting?",
            "Ashton Agar": "Is the player famous for his left-arm spin and handy batting?",
            "Matthew Wade": "Is the player famous for his clutch performances in big matches?",


            // Sri Lankan Players
            "Dasun Shanaka": "Is the player famous for his captaincy and all-round contributions?",
            "Kusal Mendis": "Is the player famous for his aggressive batting at the top order?",
            "Pathum Nissanka": "Is the player famous for his solid opening performances in white-ball cricket?",
            "Charith Asalanka": "Is the player famous for his ability to anchor and finish innings?",
            "Maheesh Theekshana": "Is the player famous for his mystery spin and unplayable carrom ball?",
            "Wanindu Hasaranga": "Is the player famous for being a top-ranked T20 spinner and hard-hitting batter?",
            "Dushmantha Chameera": "Is the player famous for his express pace and ability to bowl in death overs?",

            // Bangladesh Players
            "Shakib Al Hasan": "Is the player famous for being one of the best all-rounders in cricket history?",
            "Tamim Iqbal": "Is the player famous for his aggressive opening batting?",
            "Liton Das": "Is the player famous for his stylish stroke play and consistency?",
            "Mushfiqur Rahim": "Is the player famous for his experience and reliability in the middle order?",
            "Taskin Ahmed": "Is the player famous for his raw pace and energy in the fast-bowling department?",
            "Mustafizur Rahman": "Is the player famous for his deadly off-cutters and variations?",
            "Mehidy Hasan Miraz": "Is the player famous for his off-spin and handy batting?",

            // New Zealand Players
            "Kane Williamson": "Is the player famous for his calm captaincy and textbook batting?",
            "Devon Conway": "Is the player famous for his adaptability and consistency?",
            "Daryl Mitchell": "Is the player famous for his big-match performances and powerful hitting?",
            "Trent Boult": "Is the player famous for his ability to swing the ball both ways?",
            "Tim Southee": "Is the player famous for his leadership in bowling and clever variations?",
            "Matt Henry": "Is the player famous for his disciplined bowling in all formats?",
            "Mitchell Santner": "Is the player famous for his economical left-arm spin and lower-order batting?",
            "Glenn Phillips": "Is the player famous for his excellent fielding in ground?",
            "Michael Bracewell": "Is the player famous for his all-round abilities as spinner and power hitter and calmness under pressure ?",

            // South African Players
            "Temba Bavuma": "Is the player famous for his solid technique and leadership?",
            "Quinton de Kock": "Is the player famous for his aggressive stroke play as a wicketkeeper?",
            "David Miller": "Is the player famous for his destructive finishing in limited-overs cricket?",
            "Kagiso Rabada": "Is the player famous for his express pace and lethal bouncers?",
            "Anrich Nortje": "Is the player famous for his extreme speed and accuracy?",
            "Lungi Ngidi": "Is the player famous for his ability to take wickets at crucial moments?",
            "Marco Jansen": "Is the player famous for his all-round potential as a tall left-arm pacer?",

            // England Players
            "Jos Buttler": "Is the player famous for his explosive hitting and innovative shots?",
            "Joe Root": "Is the player famous for his consistency and classical batting style?",
            "Ben Stokes": "Is the player famous for his match-winning all-round performances?",
            "Jonny Bairstow": "Is the player famous for his aggressive batting and sharp wicketkeeping?",
            "Jofra Archer": "Is the player famous for his raw pace and deadly short-pitched deliveries?",
            "Mark Wood": "Is the player famous for his express pace and ability to bowl 150+ km/h?",
            "Adil Rashid": "Is the player famous for his tricky leg-spin and ability to take crucial wickets?",

            // West Indies Players
            "Nicholas Pooran": "Is the player famous for his power-hitting and explosive T20 batting?",
            "Rovman Powell": "Is the player famous for his hard-hitting and leadership skills?",
            "Shimron Hetmyer": "Is the player famous for his aggressive left-handed batting?",
            "Alzarri Joseph": "Is the player famous for his express pace and wicket-taking ability?",
            "Jason Holder": "Is the player famous for his all-round abilities and calm leadership?",
            "Andre Russell": "Is the player famous for his six-hitting ability and athleticism?",

            // Afghanistan Players
            "Rashid Khan": "Is the player famous for being one of the best T20 spinners?",
            "Mohammad Nabi": "Is the player famous for his all-round contributions and experience?",
            "Rahmanullah Gurbaz": "Is the player famous for his explosive batting in the powerplay?",
            "Ibrahim Zadran": "Is the player famous for his steady batting at the top order?",
            "Mujeeb Ur Rahman": "Is the player famous for his mystery spin and variations?",
            "Fazalhaq Farooqi": "Is the player famous for his left-arm swing bowling?"


        };
        return questions[playerName] || `Is the player ${playerName}?`;
    }

    document.querySelector(".btn1").addEventListener("click", function () {
        if (stage === "team") {
            let teamNames = Object.keys(teams);
            selectedTeam = teamNames[currentIndex];
            filteredPlayers = teams[selectedTeam];
            currentIndex = 0;
            stage = "role";
        } else if (stage === "role") {
            selectedRole = filteredPlayers[currentIndex].role;
            filteredPlayers = filteredPlayers.filter(player => player.role === selectedRole);
            currentIndex = 0;
            stage = "player";
        } else if (stage === "player") {
            document.querySelector(".top5").innerHTML = `The player is ${filteredPlayers[currentIndex].name}`;
            document.querySelector(".top5").style.display = "block";
            document.querySelector(".again").style.display = "flex";
            document.querySelector(".quest").style.display = "none";
            document.querySelector(".btn1").style.display = "none";
            document.querySelector(".btn2").style.display = "none";
            document.querySelector(".no").style.display = "none";
            document.querySelector(".question").style.padding = "100px 27px";
            document.querySelector(".question").style.height = "auto";
            
        }
        updateQuestion();
    });

    document.querySelector(".btn2").addEventListener("click", function () {
        currentIndex++;
        updateQuestion();
    });

    document.querySelector(".again").addEventListener("click", function () {
        document.querySelector(".again").style.display = "none";
        document.querySelector(".top5").style.display = "none";
        document.querySelector(".quest").style.display = "block";
        document.querySelector(".btn1").style.display = "flex";
        document.querySelector(".btn2").style.display = "flex";
        document.querySelector(".no").style.display = "block";
        document.querySelector(".top4").style.display = "block";
      
        document.querySelector(".btn1").style.display = "flex";
        document.querySelector(".btn2").style.display = "flex";
        document.querySelector(".btn2").style.justifyContent = "center";
        document.querySelector(".btn2").style.alignItems = "center";
        document.querySelector(".btn1").style.justifyContent = "center";
        document.querySelector(".btn1").style.alignItems = "center";
        document.querySelector(".btn1").style.textAlign = "center";
        document.querySelector(".btn2").style.textAlign = "center";
        document.querySelector(".btn1").style.display = "inline-block";
        document.querySelector(".btn2").style.display = "inline-block";
        document.querySelector(".btn1").style.marginRight = "125px";
        document.querySelector(".btn2").style.marginLeft = "10px";
        document.querySelector(".btn1").style.marginTop = "10px";
        document.querySelector(".btn2").style.marginTop = "10px";
        document.querySelector(".btn1").style.marginRight = "125px"; // Set the gap between the buttons
        document.querySelector(".btn2").style.marginLeft = "10px"; // Set the gap between the buttons  document.querySelector(".btn1").style.flexDirection = "row";
        document.querySelector(".question").style.padding = "22px 41px";
    
        // if (window.innerWidth > 769) {
            // document.querySelector(".btn1").style.display = "inline-block";
            // document.querySelector(".btn2").style.display = "inline-block";
        //     document.querySelector(".btn1").style.padding = "12px 30px";
        //     document.querySelector(".btn2").style.padding = "12px 30px";
        // }
        if (window.innerWidth < 800) {
            document.querySelector(".btn1").style.display = "block";
            document.querySelector(".btn2").style.display = "block";
            document.querySelector(".btn1").style.margin = "28px auto 10px";
            document.querySelector(".btn2").style.margin = "28px auto 10px";
            document.querySelector(".btn1").style.padding = "12px 30px";
            document.querySelector(".btn2").style.padding = "12px 30px";
            document.querySelector(".question").style.minheight  = "auto";
            document.querySelector(".question").style.height = "auto";
        }
        if (window.innerWidth < 327) {
            document.querySelector(".question").style.height = "auto";
            document.querySelector(".question").style.height = box.scrollHeight + "px";
        }
        stage = "team";
        selectedTeam = "";
        currentIndex = 0;
        selectedRole = "";
        filteredPlayers = [];

        updateQuestion();
    });

    updateQuestion();
});
// updateQuestion();