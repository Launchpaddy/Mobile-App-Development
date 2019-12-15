// Example POST method implementation:
async function main() {
    try {
        const data = await postData('https://scontent-sea1-1.xx.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/c1.0.294.154a/p296x100/77133127_23843830704450421_8212835767626498048_n.png.jpg?_nc_cat=1&_nc_ohc=z3MyWCCjLWQAQk6tsRl6VbYOOfH0aSNyTM3iLY6UDXGumANKxRdSHGn-g&_nc_ht=scontent-sea1-1.xx&oh=391b008fd731175d6d5ddc5dd843a2ed&oe=5E41CC4E');
        console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
      } catch (error) {
        console.error(error);
      }
      
      async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
      }
};

main()


  
