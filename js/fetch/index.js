const fetch = require('node-fetch');
async function fetchText() {
  let response = await fetch('https://api.github.com/users/jiangyanghe');
  console.log(response.status); 
  console.log(response.statusText);
  console.log(response.ok);
  console.log(response.type);
  // console.log('response.text==', response.text());
  console.log('response.json==', response.json());
  // console.log(response.type);
  // console.log(response.type);
}

fetchText();