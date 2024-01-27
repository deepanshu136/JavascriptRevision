// app.mjs

import axios from "axios";

axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
        console.log(response.data);
        console.log("Working perfectly fine");
    })
    .catch((error) => {
        console.error(error);
        console.log("Not Working");
    });
