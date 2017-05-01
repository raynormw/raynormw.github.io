//var sys = require('sys');
const fs = require('fs')

// actual conversion code starts here
function words_in_a_file(filename, limit) {
  let source = fs.readFileSync(filename,'utf8');
  let conjunction = ["", "ref", "its", "a", "the", "an", "is", 'of','was','were','from','to','both','either','nor','as','these','which','with','who','whose','whom','on','at','are','in','it','also','between','for','and','nor','but','or','yet','so','after','although','if','because','before','by','in','that','though'];
  let filterWord = source.replace(/[^a-zA-Z ]/g, " ").split(" ");
  let filterConjunction = filterWord.filter(value => conjunction.indexOf(value.toLowerCase()) === -1);
  let resultObject = {};
  let arrayResult = [];

  for (let i = 0; i < filterConjunction.length; i++) {
    if (filterConjunction[i].length > 2) {
      resultObject[filterConjunction[i]] = (resultObject[filterConjunction[i]] || 0) + 1;
    }
  }

  for (let word in resultObject) {
    arrayResult.push([word, resultObject[word]]);
  }

  arrayResult.sort((a, d) => d[1] - a[1]);

  for (let j = 0; j < limit; j++) {
    console.log(arrayResult[j][0] + ": " + arrayResult[j][1] + " occurrences");
  }

  //return arrayResult;
}

words_in_a_file("source.txt", 5);

module.exports = {
  words_in_a_file: words_in_a_file
}
