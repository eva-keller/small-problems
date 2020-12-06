//Write a function that extracts the language code from a locale. 
//A locale is a combination of a language code, a region, and usually also a character set, e.g en_US.UTF-8.

function extractLanguage(str) {
    return str.split('_')[1].split('.')[0];

}

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); 