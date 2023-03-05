const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [Product],
    });
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// find one category by its `id` value
// be sure to include its associated Products

router.get("/:id", async (req, res) => {
  try {
    const findCategory = await Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [Product], // include associated Products
    });
    res.json(findCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const { Category_name } = req.body; // extract category name from request body
    const newCategory = await Category.create({ Category_name }); // create new category with name
    res.json(newCategory); // send the created category as a JSON response
  } catch (error) {
    res.status(500).json(error); // send error response with status code 500 and error object as JSON
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedCategory) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    res.json({ message: "Category updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete Update!" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const rowsDeleted = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (rowsDeleted === 0) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    res.json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete category" });
  }
});

module.exports = router;
