/**
 04.Anagram adalah istilah dimana suatu string jika dibolak balik ordernya maka akan
    sama eg. 'aku' dan 'kua' adalah Anagram, 'aku' dan 'aka' bukan Anagram.
    Dibawah ini ada array berisi sederetan Strings.
    ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
    Silahkan kelompokkan/group kata-kata di dalamnya sesuai dengan kelompok
    Anagramnya,
    Catatan: tidak boleh menggunakan syntax es6 map, reduce, find, filter
    # Expected Outputs
    [
        ["kita", "atik", "tika"],
        ["aku", "kua"],
        ["makan"],
        ["kia"]
    ]
 */

function sortedString(string) {
    return string.split('').sort().join('')
}
  
function anagrams(strList = []) {
    let anagramMap = new Map();
    let anagramList = [];
    let temporaryAnagram = [];
    
    for (let i in strList) {
        const str = strList[i].replace(/[^\w]/g, '').toLowerCase();
        const sortedStr = sortedString(str)
        temporaryAnagram = anagramMap.get(sortedStr) || [];
        temporaryAnagram.push(strList[i])
        anagramMap.set(sortedStr, temporaryAnagram)
    }
    
    for (let anagram of anagramMap.values()) {
        anagramList.push(anagram)
    }
    return anagramList;

  }
console.log(anagrams(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']))