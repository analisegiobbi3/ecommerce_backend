const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Allows you to get all products
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: { model: Product, attributes: ['product_name', 'price', 'stock', 'category_id'], through: ProductTag }

    })
    res.status(200).json(tagData)
  }catch(err){
    res.status(500).json(err)
  }
});

//allows you to get tags based on id
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: { model: Product, attributes: ['product_name', 'price', 'stock', 'category_id'], through: ProductTag  }
    })
    if (!tagData){
      res.status(404).json({ message: 'There are not tags associated with this id' })
    }
    res.status(200).json(tagData)
  }catch(err){
    res.status(500).json(err)
  }
});

//allows you to create new tags
router.post('/', async (req, res) => {
  try{
    const tagData = await Tag.create(req.body)
    res.status(200).json(tagData)
  }catch (err){
    res.status(500).json(err)
  }
});

//allows you to update tags based on id
router.put('/:id', async(req, res) => {
  try {
    const tagData = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    )
    res.status(200).json(tagData)
  }catch(err){
    res.status(500).json(err)
  }
});

//allows you to delete tags based on id
router.delete('/:id', async(req, res) => {
  try {
    const tagData = await Tag.destroy({
        where: {
          id: req.params.id,
        },
      })
      res.status(200).json(tagData)
      if(!tagData){
        res.status(404).json({ message: 'There are no tags associated with this id' })
      }
  }catch (err){
    res.status(500).json(err)
  }
});

module.exports = router;
