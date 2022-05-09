const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include:[Product]
  }).then((allCategories)=>{
    res.json(allCategories)
  }).catch((err)=>{
    res.status(500).json(err)
  })
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk(req.params.id,{
include:[Product]
  }).then((oneCategory)=>{
    res.json(oneCategory)
  }).catch((err)=>{
    res.status(500).json(err)
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new 
  Category.create(req.body)
  .then((newCategory)=>{
    res.status(200).json(newCategory)
  }).catch((err)=>{
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  // put is an update a category by its `id` value
  Category.update(req.body, {
    where:{id:req.params.id}
  })
  .then((updateCategory)=>{
    res.status(200).json(updateCategory)
}).catch ((err)=>{
    res.status(500).json(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{id:req.params.id}
  })
  .then((deleteCategory)=>{
    res.status(200).json(deleteCategory)
    
  }).catch ((err)=>{
    res.status(500).json(err)
  })
});

module.exports = router;
