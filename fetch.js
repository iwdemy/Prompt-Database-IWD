const formData = new FormData();
formData.append('text', 'Test prompt extraction');

console.log("SENDING REQUEST AT " + Date.now());

fetch('http://127.0.0.1:3000/api/extract-prompts', {
  method: 'POST',
  body: formData
})
  .then(res => res.text())
  .then(text => console.log('Response:', text.slice(0, 500)))
  .catch(console.error);
