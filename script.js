alert('Hello!');

const nouns = ["dog", "cat", "car", "tree", "house", "computer", "apple", "book", "city", "river"];

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    let modifiedText = element.textContent;
    
    // Replace coronavirus with rainbow text
    modifiedText = modifiedText.replace(/(coronavirus)/gi, '<span class="rainbow">$1</span>');
    
    // Replace nouns
    nouns.forEach(noun => {
      const regex = new RegExp(`\\b${noun}\\b`, 'gi');
      modifiedText = modifiedText.replace(regex, `<span class="noun">${noun}</span>`);
    });
    
    if (modifiedText !== element.textContent) {
      const newElement = document.createElement('span');
      newElement.innerHTML = modifiedText;
      element.replaceWith(newElement);
    }
  }
}

replaceText(document.body);

// Show "Now Covid Free" message after red flashing stops, then apply monochrome filter
setTimeout(() => {
  alert('Now Covid Free');
  document.body.style.animation = 'none';
  document.body.style.backgroundColor = 'transparent';
  document.body.classList.add('monochrome');
}, 30000);