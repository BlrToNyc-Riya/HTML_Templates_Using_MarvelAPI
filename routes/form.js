const express = require('express');
// const { characters } = require('../data');
const router = express.Router();
const data = require('../data');
const charData = data.characters;

router.get('/', async (req, res) => {
    res.render('characters/form', { title:"Character Finder" });
  });
router.post('/search', async (req, res) => {
  try{
    let keyword = req.body;
    if(keyword.searchTerm === " " || !keyword.searchTerm ) 
     throw "No search term provided, enter a search term" ;
    let characters = await charData.getCharactersBySearchTerm(keyword);
   
      res.render('characters/bysearchterm', { characters: characters.data.results, title: "Characters Found", searchTerm: keyword.searchTerm});
  }
  catch(e){
    res.render('characters/form',{error:e, title: "Characters Found", hasErrors: true} )
  }
    

});

  module.exports = router;