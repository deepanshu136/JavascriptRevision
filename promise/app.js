// Promises in JavaScript are used to handle asynchronous operations and provide a more structured way to work with asynchronous code.

//the callback version
const fakeRequestCallback = (url, sucess, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      sucess(`This is the response from ${url}`);
    }
  }, delay);
};

//The Promise Verion
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500 + 500);
    setTimeout(() => {
      if (delay > 4000) {
        reject("connection Timeout :(");
      } else {
        resolve(`Here is Your fake data from${url}`);
      }
    }, delay);
  });
};

// fakeRequestCallback(
//   "book.com/page1",
//   function (response) {
//     console.log("It worked");
//     console.log(response);
//     fakeRequestCallback(
//       "book.com/page2",
//       function (resopnse) {
//         console.log("And it worked again!");
//         console.log(resopnse);
//       },
//       function (err) {
//         console.log("But this time it failed");
//         console.log(err);
//       }
//     );
//   },
//   function (err) {
//     console.log("ERROR!!");
//     console.log(err);
//   }
// );



// fakeRequestPromise("yelp.com/api/coofee/page1")
//   .then(() => {
//     console.log("It worked page 1");
//     fakeRequestCallback("yelp.com/api/coofee/page2")
//       .then(() => {
//         console.log("It worked page 2");
//       })
//       .catch(() => {
//         console.log("Error page 2");
//       });
//   })
//   .catch(() => {
//     console.log("error page1");
//   });


// fakeRequestPromise('yelp.com/api/coffee/page1')
// .then((data)=>{
//     console.log("It worked page 1")
//     console.log(data)
//      return fakeRequestPromise('yelp.com/api/coffee/page2')
    
// })
// .then((data)=>{
//     console.log("It worked page ")
//     console.log(data)
//      return fakeRequestPromise('yelp.com/api/coffee/page3')
// })
// .catch((err)=>{
//     console.log(err)
//     console.log("OH no , A REQUEST IS FAILED")
// })



const makeRequest=async()=>{
    try{
        const response1= await fakeRequestPromise("book.com/page1")
        console.log("It Worked");
        console.log(response1);
        const response2=await fakeRequestPromise("book.com/page2")
        console.log("It worked again");
        console.log(response2);
    }catch(error){
        console.log("Error!!");
        console.log(error);
    }
};
makeRequest();