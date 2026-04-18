export const analyzeText = (text) => {
    return {
      characters: text.length,
      charactersNoSpaces: text.replace(/\s/g, '').length,
      words: text.trim() === '' ? 0 : text.trim().split(/\s+/).length,
      sentences: text.split(/[.!?]+/).filter(s => s.trim()).length,
      paragraphs: text.split(/\n\n+/).filter(p => p.trim()).length,
      readingTime: Math.ceil(text.trim().split(/\s+/).length / 200)
    };
  };
  
  export const convertToUpperCase = (text) => text.toUpperCase();
  
  export const convertToLowerCase = (text) => text.toLowerCase();
  
  export const convertToTitleCase = (text) => 
    text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  
  export const cleanWhitespace = (text) => 
    text.replace(/\s+/g, ' ').trim();
  
  export const reverseText = (text) => text.split('').reverse().join('');
  
  export const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };