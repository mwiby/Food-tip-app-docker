const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Get recipes of search
app.get("/search", async (req, res) => {
  const search = req.query.search || "Chicken"; // default

  const response = await axios.get(
    `https://www.food2fork.com/api/search?key=7ff50a97db12eb24c2a4f8c6a37a52db&q=${search}`
  );
  res.json({ data: response.data.recipes });
});

// Get Id recipe
app.get("/id", async (req, res) => {
  const id = req.query.id;
  const response = await axios.get(
    `https://www.food2fork.com/api/get?key=7ff50a97db12eb24c2a4f8c6a37a52db&rId=${id}`
  );

  res.json({ data: response.data.recipe });
});

// get top ranked recipes
app.get("/topRanked", async (req, res) => {
  const response = await axios.get(
    "https://www.food2fork.com/api/search?key=7ff50a97db12eb24c2a4f8c6a37a52db&sort=r"
  );

  res.json({ data: response.data.recipes });
});

// get nutrition of one ingredient
app.get("/nutrition", async (req, res) => {
  const ing = req.query.nutr;

  ID = "ac643563";
  KEY = "6d322b181f44c88c93473339831e0a8d";

  const response = await axios.get(
    `https://api.edamam.com/api/nutrition-data?app_id=${ID}&app_key=${KEY}&ingr=${ing}`
  );

  res.json({ data: response.data });
});

// get wine reco
app.get("/getWine", async (req, res) => {
  const food = req.query.food;

  KEY = "6205f844b8474259a2b2c50ab49950b8";

  try {
    /*Here I had to split the string, because recipe label can be long.
      And there are only a few words that are approved by the API, which is why it is called for words until it succeeds  */
    const array = food.split(" ");
    let wines = "";
    for (i = 0; i < array.length; i++) {
      const response = await axios.get(
        `https://api.spoonacular.com/food/wine/pairing?apiKey=${KEY}&food=${array[i]}`
      );
      if (response.data.pairedWines) {
        wines += response.data.pairedWines.toString();
      }
    }

    res.json({ data: wines });
  } catch (error) {
    console.log(error);
  }
});

app.listen(4000, () => {
  console.log("Server running");
});
