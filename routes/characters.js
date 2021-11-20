const express = require('express');
// const { characters } = require('../data');
const router = express.Router();
const data = require('../data');
const charData = data.characters;


router.get('/:id', async (req, res) => {

  try{
  if(!req.params.id) throw "no id provided";
  if(typeof req.params.id !== "string") "id must be a string";
  let character = await charData.getCharacterById(req.params.id);
  let imgpath = character.data.results[0].thumbnail.path + '/portrait_xlarge.jpg';
  res.render('characters/byid', { character: character.data.results[0], title: character.data.results[0].name, image:imgpath});
  }

catch(e){

  res.status(404).render('characters/error', { error: e });
}
    
});

module.exports = router;