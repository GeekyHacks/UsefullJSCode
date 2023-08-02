// Basic Syntax
async function myDisplay() {
  let myPromise = new Promise((resolve, reject) => {
    resolve('I love You !!');
    // to make the function waite use the settimeOut
    setTimeout(resolve('I love You !!'), 3000);
  });
  document.getElementById('demo').innerHTML = await myPromise;
}

// The two arguments (resolve and reject) are pre-defined by JavaScript.
// We will not create them, but call one of them when the executor function is ready.
// Very often we will not need a reject function.

myDisplay();
