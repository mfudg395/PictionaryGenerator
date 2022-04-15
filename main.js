document.addEventListener('DOMContentLoaded', function() {

    const allPlayWords = [
        "scrapbook", "youth", "soup", "appointment", "drama", "customer", "setting", "advice",
        "story", "artwork", "son", "event", "outfit", "student", "windmill", "department",
        "university", "inflation", "photo", "painting", "wealth", "protection", "graph paper",
        "virus", "video game", "crystal", "cursor", "jail", "surge protector", "stranger", 
        "skyscraper", "lasagna", "dental floss", "diving board", "swimming pool", "olympic games",
        "convection oven", "deep fryer", "glass", "condominium", "lumberjack", "evergreen tree",
        "adam and eve", "assault rifle", "radio", "fishing rod", "battle", "salmonella", "microsoft",
        "pencil crayon", "keyboard and mouse", "burger king", "strawberry shortcake", "soft drink",
        "cinnamon", "kosher salt", "grain of rice", "canned corn", "winter", "four seasons", "katana",
        "rocket ship", "romeo and juliet", "igloo", "bullet", "table tennis", "anchor", "anger", "locomotive",
        "eyeliner", "paper towl", "conductor", "candle", "family tree", "toddler", "newborn", "beanie",
        "sweater", "jean shorts", "mahjong", "billiards", "blindfold", "birdhouse", "prison cell", "raspberry jam",
        "magician", "birthday cake", "rosemary", "black pepper", "cheese grater", "laptop", "flannel", "eyepatch",
        "canal", "ink sac", "fireplace", "lump of coal", "jack-o'-lantern", "valentine", "envelope", "thursday",
        "birthday party", "graduation", "urn", "temple", "landslide", "castle", "red carpet", "thanksgiving"
    ]

    const difficultWords = [
        "newsletter", "coworker", "downpour", "shower curtain", "swing dancing", "eraser", "pharmacist",
        "monsoon", "flu", "government", "mystery", "yacht", "lung", "parking garage", "hut", "reduce, reuse, recycle",
        "predator", "suit", "steamboat", "philosopher", "carat", "standing ovation", "hobby", "director", "tribe",
        "profit", "stock market", "ice fishing", "stranger", "fragment", "big bang theory", "black hole", "gravity",
        "electron", "turret", "admire", "hypothermia", "rest stop", "language", "layover", "in-law", "slam dunk",
        "saltwater", "dangerous", "rival", "convenience store", "telepathy", "tarot cards", "sinus infection",
        "prime minister", "acre", "shipwreck", "summer solstice", "solar eclipse", "catacombs", "rock band", "tourist",
        "sand castle", "applause", "sunburn", "tundra", "multiplication", "ballistic missile", "nuclear", "periodic table",
        "chemistry", "potassium", "road trip", "competition", "isthmus", "mutiny", "hieroglyphs", "education", "spirit",
        "noah's ark", "whole grain", "instant message", "cartoon", "shoe polish", "leather", "eulogy", "ember", "ignition",
        "barricade", "lord of the flies"
    ]

    const actionWords = [
        "rap", "cleaning", "sprint", "clench", "erase", "destroy", "climb", "learn", "forget", "studying", "paint", "shop",
        "smell", "surprise", "promise", "thinking", "sail", "slip", "rock climb", "travel", "fly", "drive", "investigate",
        "type", "sing", "dance", "vow", "kneel", "slumber", "dream", "fight", "sucker punch", "dodge", "brawl", "baking",
        "accept", "anticipate", "bend", "blow", "bounce", "expand", "experiment", "hug", "manage", "push", "relax", "retire",
        "shrink", "ski", "vacuum", "write", "wish", "snore", "discuss", "operation", "grind", "watch", "brush", "ship", "digging",
        "glide", "farm", "throw away", "roll", "lift", "stomp"
    ]

    const personPlaceAnimalWords = [
        "jackal", "elephant", "red panda", "red fox", "james bond", "snowy owl", "snail", "superman", "elvis", "princess",
        "shiba inu", "tabby cat", "charlie brown", "australia", "new york city", "chichen itza", "thanos", "singapore",
        "prince edward island", "steven spielberg", "jurassic park", "western alps", "pacific ocean", "red sea", "walt disney",
        "hollywood", "big ben", "eiffel tower", "leaning tower of pisa", "burj khalifa", "desert", "tundra", "ostritch",
        "tortoise", "great white shark", "orangutan", "crane", "conure", "underworld", "heaven", "ninja", "madagascar",
        "pearl harbor", "squirrel", "anteater", "king", "camel", "emperor penguin", "giraffe", "amazon", "king arthur",
        "musician", "senior", "prisoner", "warden", "criminal", "nurse", "mailman", "wizard", "surgeon", "soldier", "rattlesnake",
        "reptile", "amphibian", "beluga whale", "southern hemisphere", "journalist"
    ]
    
    const objectWords = [
        "stethoscope", "camera", "stuffed animal", "water bottle", "sewing machine", "needle", "lampshade", "crown", "sofa",
        "office chair", "tulip", "sunflower", "backpack", "needle-nose pliers", "butter knife", "gavel", "screwdriver",
        "laundry basket", "video camera", "monocole", "can opener", "tire iron", "crowbar", "broadsword", "stroller",
        "mask", "sunglasses", "arcade cabinet", "onesie", "syringe", "jetpack", "fedora", "wheelchair", "mittens", "frying pan",
        "black belt", "semiconductor", "diary", "baseball bat", "deck of cards", "lightbulb", "hatchet", "litterbox", "helipad",
        "nail clippers", "scarf", "fax machine", "telephone booth", "bacon and eggs", "spaghetti and meatballs", "silverware",
        "notebook", "tripod", "scythe", "rope bridge"
    ]

    console.log("All-play words: " + allPlayWords.length);
    console.log("Difficult words: " + difficultWords.length);
    console.log("Action words: " + actionWords.length);
    console.log("Person, Place, Animal words: " + personPlaceAnimalWords.length);
    console.log("Object words: " + objectWords.length); 

    const generateButton = document.querySelector(".generate-button");
    const generatedWord = document.querySelector(".generated-word");
    const allPlayLabel = document.querySelector("#all-play-label");

    let allPlayCounter = 6 // number you mod by to check for all play; decreases each time there isn't an all-play
    generateButton.addEventListener('click', () => {
        const category = document.querySelector(".category-select-menu").value;
        let word = "";
        // will NOT be an all-play if the word index is divisible by a given number
        // i.e. higher given number = more likely to be all-play
        let isAllPlay = true; 

        switch(category) {
            case "allplay":
                word = getRandomArrayItem(allPlayWords)
                isAllPlay = true
                break;
            case "difficult":
                word = getRandomArrayItem(difficultWords)
                isAllPlay = difficultWords.indexOf(word) % 3 != 0
                break;
            case "action":
                word = getRandomArrayItem(actionWords)
                isAllPlay = actionWords.indexOf(word) % 4 != 0
                break;
            case "personplaceanimal":
                word = getRandomArrayItem(personPlaceAnimalWords)
                isAllPlay = personPlaceAnimalWords.indexOf(word) % 4 != 0
                break;
            case "object":
                word = getRandomArrayItem(objectWords)
                isAllPlay = objectWords.indexOf(word) % 4 != 0
                break;
            default:
                console.log("Fatal error!")
        }

        generatedWord.innerHTML = word.toUpperCase();
        if (isAllPlay) {
            allPlayLabel.innerHTML = "is"
        } else {
            allPlayLabel.innerHTML = "is not"
        }
    })

    function getRandomArrayItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

})