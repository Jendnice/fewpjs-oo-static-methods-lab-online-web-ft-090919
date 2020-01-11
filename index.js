class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    // return string.replace(/[^A-Za-z0-9-']+/g, '')
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

//   static titleize(string) {
//     let s = string[0]
//     let capitalS = Formatter.capitalize(s)

//     let newString = (string.slice(1, (string.length))).split(' ')
//     let wordArray = []

//     newString.forEach(word => {
//       // if (word === "the" || word === "a" || word === "an" || word === "but" || word === "of" || word === "and" || word === "for" || word === "at" || word === "by" || word === "from") {
//       //   let w = Formatter.capitalize(word)
//       //   wordArray.push(w) 
//       // } else  {
//       //   let w = word 
//       //   wordArray.push(w)
//       // }
//       if (word === "the" || word === "a" || word === "an" || word === "but" || word === "of" || word === "and" || word === "for" || word === "at" || word === "by" || word === "from") {
//         let w = word 
//         wordArray.push(w)
//       } else  {
//         let w = Formatter.capitalize(word)
//         wordArray.push(w) 
//       }
//     })
//     wordArray[0] = capitalS + wordArray[0]
//     let finalString = wordArray.join(" ")
//     return finalString
//   }

static titleize(string) {
  let newString = string.split(' ')
  let wordArray = []

  newString.forEach(word => {
      if (word === "the" || word === "a" || word === "an" || word === "but" || word === "of" || word === "and" || word === "for" || word === "at" || word === "by" || word === "from") {
        let w = word 
        wordArray.push(w)
      } else  {
        let w = Formatter.capitalize(word)
        wordArray.push(w) 
      }
    })
    wordArray[0] = (Formatter.capitalize(wordArray[0]))
    let finalString = wordArray.join(" ")
    return finalString
  }


}




