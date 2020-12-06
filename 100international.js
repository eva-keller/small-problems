function localGreet(locale) {
    let language = extractLanguage(locale); //write another function
    let region = extractRegion(locale); //write another function
  
    switch (region) {
      case 'US': return 'Hey!';
      case 'GB': return 'Hello!';
      case 'AU': return 'Howdy!';
      default: return greet(language);
    }
  }

console.log(localGreet("AU"));