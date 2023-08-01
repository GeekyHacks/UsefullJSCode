setInterval(displayDate, 1000);

// es6
// const myFunction = () => {
//   let d = new Date();
//   document.getElementById('demo').innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
// };

//Es5
function myFunction() {
  const d = new Date();
  document.getElementById('demo').innerHTML =
    d.toLocaleString() + ',' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
}

// or t=with better format
function displayDate() {
  const stringDate = new Date();
  const date = stringDate.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const time = stringDate.toLocaleTimeString();
  document.getElementById('demo').innerHTML = `${date} ${time}`;
}
