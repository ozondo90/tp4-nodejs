const dico = {
  "manger" : "eat",
  "mangue" : "mangose",
  "lire" : "read",
  "banque" : "bank",
  "sac" : "bag",
  "love" : "aimer",
  "work" : "travailler",
  "roi" : "king",
  "ecole" : "school",
  "amis" : "friends",
  "femme" : "woman"
}

function getTranslation(dicoData , inputData){
  var translation = "";
  if(inputData.lang === "french"){
    console.log(inputData.lang)
     translation = dicoData[inputData.word]
  }else if(inputData.lang === "english"){
    translation = Object.keys(dicoData).find((key)=>{
      return dicoData[key] === inputData.word
    })
  }

  if(!translation){
    return "Le mots n'existe pas dans le dictionnaire"
  }else{
    return translation
  }
  
}

module.exports = {dico , getTranslation}