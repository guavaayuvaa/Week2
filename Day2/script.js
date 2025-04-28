function countWords(text) {
    const words = text.trim().split(/\s+/);
    return words.filter(word => word.length > 0).length;
  }

  function countCharacters(text) {
    return text.length;
  }

  function countSubstring(text, substring) {
    if (substring.length === 0) return 0;
    let count = 0;
    let pos = 0;
    while ((pos = text.indexOf(substring, pos)) !== -1) {
      count++;
      pos += substring.length;
    }
    return count;
  }

  function analyzeText() {
    const text = document.getElementById('textInput').value;
    const substring = document.getElementById('substringInput').value;

    const wordCount = countWords(text);
    const charCount = countCharacters(text);
    const substringCount = countSubstring(text, substring);

    document.getElementById('results').innerHTML = `
      <p><strong>Word Count:</strong> ${wordCount}</p>
      <p><strong>Character Count:</strong> ${charCount}</p>
      <p><strong>Occurred "<span class="text-blue-500">${substring}</span>":</strong> ${substringCount}</p>
    `;
  }