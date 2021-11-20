const axios = require('axios');

        const md5 = require('blueimp-md5');
        const publickey = '25fd5a30dd9d0216ced990ef149ea338';
        const privatekey = '7caf34dc688fd11ff8a483625b40290cb733bd9b';
        const ts = new Date().getTime();
        const stringToHash = ts + privatekey + publickey;
        const hash = md5(stringToHash);
        const baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
        // const url = baseUrl + '?ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;

        async function getCharacterById(id){
        if(!id || id === '') throw "id not provided or just empty spaces passed";
        if(!(typeof id === 'string')) throw "id should be of type string ";
        const url = baseUrl + '/'+id+ '?ts=' + ts + '&apikey=' + publickey + '&hash=' + hash +'&limit=20';
        const {data} = await axios.get(url);
        // console.log(url);
        return data;
      }   
      async function getCharactersBySearchTerm(keyword){
        if(!keyword || keyword === '') throw "keyword not provided or contains empty spaces passed";
        // console.log(keyword.searchTerm);
        const url = baseUrl + '?nameStartsWith='+keyword.searchTerm+ '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash +'&limit=20';
        const {data} = await axios.get(url);
        // console.log(url);
        return data;
      }   

module.exports = {
  getCharacterById,
  getCharactersBySearchTerm}

