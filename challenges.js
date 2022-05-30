//Alter the event handler on line 4 to run when the form is submitted, not just when the submit button has been clicked. Leave the callback function empty for now.

const form = document.querySelector('form');
const submitButton = form.querySelector('[type=Submit]');

form.addEventListener('submit', () => {
  
});

//There are three list items in the index.html file. We want to be able to enter a 0, 1 or 2 in the text field to embolden the list item with the corresponding index. Can you figure out what condition to put into the if statement to make this code work?
//Key word to look for: Corresponding index, meaning it is looking for the matching index. and Condition, knowing that we have to have it in a conditional to match

//Answer:
const laws = document.getElementsByTagName('li');
const indexText = document.getElementById('boldIndex');
const button = document.getElementById('embolden');

button.addEventListener('click', (e) => {
    const index = parseInt(indexText.value, 10);
  
    for (let i = 0; i < laws.length; i += 1) {
       let law = laws[i];
  
       // replace 'false' with a correct test condition on the line below
       if (i === index) {
  
           law.style.fontWeight = 'bold';
       } else {
           law.style.fontWeight = 'normal';
       }
    }
});
//This code should create a sequence of div elements that each hold a headline above and a link below. Currently only the headlines display, and the links do not. Can you figure out how to fix this to make the links display under each headline?

//key words: Currently only the headlines display, and the links do not
const languages = ['Python', 'JavaScript', 'PHP', 'Ruby', 'Java', 'C'];
const section = document.getElementsByTagName('section')[0];

// Accepts a language name and returns a wikipedia link
function linkify(language) {
  const a = document.createElement('a');
  const url = 'https://wikipedia.org/wiki/' + language + '_(programming_language)';
  a.href = url;
  return a;
}

// Creates and returns a div
function createDiv(language) {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const link = linkify(language);
  
  h2.textContent = language;
  p.textContent = 'Information about ' + language;
  link.appendChild(p);
  
  div.appendChild(h2);
  
  // Your code below
  div.appendChild(link);
  
  // end
  
  return div;
}

for (let i = 0; i < languages.length; i += 1) {
  let div = createDiv(languages[i]);
  
  section.appendChild(div);
}
