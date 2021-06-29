SynonymPlugin = function(){

};
SynonymPlugin.prototype.populateSynonymsResults = function(resultsArr){
    if(resultsArr && resultsArr.length > 0){
      var htmlStr='';
      resultsArr.forEach(function(result){
        htmlStr +=`<div class="synonym-result">${result.word}</div>`;
      });
      if(htmlStr) this.hasDataReady = true;
    }else if(resultsArr && resultsArr.length === 0){
      throw new Error ("No results found");
    }else throw new Error ("Invalid response format from Server");

};

SynonymPlugin.prototype.onsubmit = function(searchWord){
  if(searchWord){
    if(/^[a-zA-Z\s]*$/.test(searchWord)){
      this.canCallFetch = true;
    }else this.canCallFetch = false;
  }else if(searchWord.length===0){
    throw new Error ("search text cannot be empty");
  }
};