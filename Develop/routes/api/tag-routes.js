const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// Get all tags
router.get("/", async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [Product], // include associated Products
    });
    res.status(200).json(tags);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get a single tag by id
router.get("/:id", async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [Product], // include associated Products
    });
    if (!tag) {
      res.status(404).json({ message: "Tag not found" });
    } else {
      res.status(200).json(tag);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a new tag
router.post("/", async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update a tag by id
router.put("/:id", async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      res.status(404).json({ message: "Tag not found" });
    } else {
      await tag.update(req.body);
      res.status(200).json(tag);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete a tag by id
router.delete("/:id", async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      res.status(404).json({ message: "Tag not found" });
    } else {
      await tag.destroy();
      res.status(200).json({ message: "Tag deleted" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
