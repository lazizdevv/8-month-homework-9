const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.static("uploads")); // Yuklangan fayllarni ochiq qilish

// Rasm yuklash uchun API route
app.post("/upload", upload.single("file"), (req, res) => {
  const tempPath = req.file.path;
  const targetPath = path.join(__dirname, `./uploads/${req.file.originalname}`);

  fs.rename(tempPath, targetPath, (err) => {
    if (err) return res.status(500).send(err);

    // URL qaytariladi
    res.json({ url: `http://localhost:3000/uploads/${req.file.originalname}` });
  });
});

// Serverni 3000 portida ishga tushirish
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
