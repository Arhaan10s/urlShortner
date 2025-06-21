const Url = require("../models/url");
const crypto = require("crypto");

const createUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    const shortCode = crypto.randomBytes(4).toString("hex"); 

    const url = await Url.create({
      originalUrl,
      shortUrl: shortCode, 
    });

    res.json({
      originalUrl: url.originalUrl,
      shortUrl: shortCode, 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const redirectUrl = async (req, res) => {
  try {
    const { shortUrl } = req.params;
    const url = await Url.findOne({ where: { shortUrl } });

    if (!url) return res.status(404).json({ message: "URL not found" });

    url.clicks += 1;
    await url.save();

    return res.redirect(url.originalUrl);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createUrl, redirectUrl };
