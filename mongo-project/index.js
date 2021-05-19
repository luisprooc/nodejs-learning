const mongoose = require("mongoose");
const {MONGO_URI} = require("./config");
const axios = require("axios").default;
const cheerio = require("cheerio");
const  BreakingNew  = require("./models/breaking-new-model");
const cron = require("node-cron");


mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



// Executed each 2 hours
cron.schedule("0 */2 * * * *", async()=>{
    console.log("SCRAPPING NOTICES :)")
    const html = await axios.get("https://cnnespanol.cnn.com/");
    const $ = cheerio.load(html.data);
    const titles = $(".news__title");
    const breakingNewArray = [];
    titles.each((index, element) => {

        const breakingNew = new BreakingNew({
            title: $(element).text().trim(),
            link: $(element).children().attr("href")
        });

        breakingNewArray.push(breakingNew);
    });

    await BreakingNew.create(breakingNewArray);
    console.info("NOTICES SAVED 💦")

});

