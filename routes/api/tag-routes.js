const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll()
    include: [{ model: Product, through: ProductTag, as: 'product_tag' }],

    res.status(200).json(tagData)
  }catch(err){
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: 'product_tag' }],
    })
    if (!tagData){
      res.status(404).json({ message: 'There are not tags associated with this id' })
    }
    res.status(200).json(tagData)
  }catch(err){
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  try{
    const tagData = await Tag.create(req.body.tag_name)
    res.status(200).json(tagData)
  }catch (err){
    res.status(500).json(err)
  }
});

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

router.delete('/:id', async(req, res) => {
  try {
    const tagData = await Tag.destroy({
        where: {
          id: req.params.id,
        },
      })
      if(!tagData){
        res.status(404).json({ message: 'There are no tags associated with this id' })
      }
  }catch (err){
    res.status(500).json(err)
  }
});

module.exports = router;
