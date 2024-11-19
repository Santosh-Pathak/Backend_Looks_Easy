import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());



app.get("/api", (req, res) => {
  res.send("Basic Server is Created");
});


app.get("/api/contact", (req, res) => {
    res.send("Basic Contact is Created");
  });

app.get("/api/jokes" , (req,res) =>{
    const jokes = [
        { 
            id: 1, 
            title: "Atomic Humor", 
            joke: "Why don't scientists trust atoms? Because they make up everything!" 
        },
        { 
            id: 2, 
            title: "Eyebrow Surprise", 
            joke: "I told my wife she was drawing her eyebrows too high. She looked surprised." 
        },
        { 
            id: 3, 
            title: "Scarecrow’s Award", 
            joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" 
        },
        { 
            id: 4, 
            title: "Anti-Gravity Book", 
            joke: "I'm reading a book on anti-gravity. It's impossible to put down!" 
        },
        { 
            id: 5, 
            title: "Bicycle Trouble", 
            joke: "Why did the bicycle fall over? It was two-tired!" 
        },
        { 
            id: 6, 
            title: "Parallel Lines", 
            joke: "Parallel lines have so much in common… it’s a shame they’ll never meet." 
        },
        { 
            id: 7, 
            title: "Negative Numbers", 
            joke: "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them!" 
        },
        { 
            id: 8, 
            title: "Penguin’s House", 
            joke: "How does a penguin build its house? Igloos it together!" 
        },
        { 
            id: 9, 
            title: "Mugged Coffee", 
            joke: "Why did the coffee file a police report? It got mugged!" 
        },
        { 
            id: 10, 
            title: "Piano Skills", 
            joke: "I used to play piano by ear, but now I use my hands." 
        },
        { 
            id: 11, 
            title: "Fishy Sushi", 
            joke: "I would avoid the sushi if I was you. It’s a little fishy." 
        },
        { 
            id: 12, 
            title: "Moses' Coffee", 
            joke: "How does Moses make his coffee? Hebrews it." 
        },
        { 
            id: 13, 
            title: "Computer Break", 
            joke: "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats." 
        },
        { 
            id: 14, 
            title: "Janitor’s Surprise", 
            joke: "What did the janitor say when he jumped out of the closet? Supplies!" 
        },
        { 
            id: 15, 
            title: "Skeleton Fight", 
            joke: "Why don’t skeletons fight each other? They don’t have the guts." 
        }
    ];
    // res.send("Jokes is Created");
    res.send(jokes);
})

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
})
