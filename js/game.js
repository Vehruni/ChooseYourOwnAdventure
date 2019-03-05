// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across an empty store",
            choices: [
                {
                    text: "Go left",
                    nextLevel: "Left,
                },

                {
                    text: "Go right",
                    nextLevel: "Right",
                },
            ]
        },

        Left: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across the bakery section!",
            choices: [
                {
                    text: "Start eating ",
                    nextLevel: "Tour around the bakery section",
                },
            ]
        },

        Right: {
            message: "You get hit by a car",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
