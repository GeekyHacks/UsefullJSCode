// promise Syntax
// let myPromise = new Promise((myResolve, myReject) => {
//   // "Producing Code" (May take some time)

//   myResolve(); // when successful
//   myReject(); // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   (value) => {
//     /* code if successful */
//   },
//   (error) => {
//     /* code if some error */
//   }
// );

// const myFunction = (message) => {
//   console.log(message);
// };
// // es6
// setTimeout(() => myFunction('I love You !!!'), 3000);

// es5
// setTimeout(function() { myFunction("I love You !!!"); }, 3000);

// this will be used as a callback function
displayedValue = (value) => {
  document.getElementById('demo').innerHTML = value;
};

getFile = (myCallback) => {
  let req = new XMLHttpRequest();
  req.open('GET', 'index.html');
  req.onload = () => {
    // 200 means that request is done and has been processed
    // this conditon is actullay the resolve condition
    if (req.status == 200) {
      myCallback(req.responseText);
    }
    // this conditon is actullay the reject
    else {
      myCallback(`Error: ${req.status}`);
    }
  };
  req.send();
};

getFile(displayedValue);
