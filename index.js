import express from 'express';
import axios from 'axios';
const app = express();
const port = 3000;

app.use(express.static("public"));
const API_URL = "https://dog.ceo/api/breeds/image/random";



app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        res.render("index.ejs", { 
            image: result.data.message,
      });
    } catch (error) {
        res.render("index", { image: null, error: "Failed to fetch image" });
        res.status(500);
    }
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});