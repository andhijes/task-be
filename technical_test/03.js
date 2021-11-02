/** 03. Please refactor the code below to make it more concise, efficient and readable with
good logic flow. Note: not allowed to use Regex

function findFirstStringInBracket(str) {
    if (str.length > 0) {
      let indexFirstBracketFound = str.indexOf("(");
      if (indexFirstBracketFound >= 0) {
        let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
        if (wordsAfterFirstBracket) {
          wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
          let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
          if (indexClosingBracketFound >= 0) {
            return wordsAfterFirstBracket.substring(0,
  
              indexClosingBracketFound);
  
          } else {
            return '';
          }
        } else {
          return '';
        }
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

=================================================

*/

function findFirstStringInBracket(str) {
    if (!str.length) {
      return '';
    }
  
    const pairList = '()';
    const leftBracket = '(';
    let indexFirstBracketFound;
    let wordsInsideBrackets = '';
  
    for (let i in str) {
      if (!indexFirstBracketFound && str[i] === leftBracket) {
        indexFirstBracketFound = i;
      }
  
      if (indexFirstBracketFound >= 0) {
        if (leftBracket + str[i] === pairList) {
          return wordsInsideBrackets;
        }
  
        if (indexFirstBracketFound !== i) {
          wordsInsideBrackets += str[i];
        }
      }
    }
    return '';
}