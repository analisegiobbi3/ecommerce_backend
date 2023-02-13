const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//get request for grabbing all categories, including their products 
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({include: [{ model: Product, attributes: ['id', 'product_name', 'price', 'stock', 'category_id'] }]});
    res.status(200).json(categoryData)
  }catch (err) {
    res.status(500).json(err)
  }
});

//get request for categories based on id. This will only grab the category with the id you requested
router.get('/:id', async (req, res) => {
  try { 
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product, attributes: ['id', 'product_name', 'price', 'stock', 'category_id']}],
    })
    if (!categoryData){
      res.status(404).json({ message: 'No categories found with this id'})
    }
    res.status(200).json(categoryData)
  }catch (err){
    res.status(500).json(err)
  }
});

//allow you to post new categories to the dataset
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body.category_name);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//allows you to update categories in the dataset based on id
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    )
    res.status(200).json(categoryData)
  }catch (err){
    res.status(500).json(err)
  }
});

//allows you to delete categories in the dataset based on id
router.delete('/:id', async(req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(categoryData)

    if (!categoryData) {
      res.status(404).json({ message: 'there is no category associated with this id' })
    }
  }catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
