Chaining Multiple Promises
.then(blahdfdsbhs)
.then(Blkahhfsdfhsd)
.catch


Async functions
async function loadGame(userName) {
    try {
        const user = await login(userName); // dont goto next line until we habe a login
        const info = await getPlayerInfo (user.id);
        // load the game using the returned info
    }
    catch (error){
        throw error;
    }
}


Callbacks
function random(a,b,callback) {

    if (b === undefined) b = a, a = 1; // QUESTION: I have never seen this syntax before... what does it mean  when there is things outside the () and whats up with the semicolon before the next line?

        const result = Math.floor((b-a+1) * Math.random()) + a
    if(callback) {
        result = callback(result);
    }
    return result;
}



Returning functions
function closure() {
    const a = 1.8;
    const b = 32;
    return c => c * a + b; // this is an actual function...
}


Pure Functions
1 must take arguments
2 must return an argument
3 cant change anything else but the arguments


A clean AJAX API fetch
const url = 'https:example.com/data';
fetch(url)
.then((response) => {
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
})
.then( response => // do something with response )
.catch( error => console.log('There was an error!') )


How to send data back

const data = JSON.stringify(task);

create a request.. yes you make a request to post things

const request = new Request(url,
    {
        method: 'POST',
        header: headers,
        body: data
    }