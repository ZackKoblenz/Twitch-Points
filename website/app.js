//"http://localhost/?code=vkneh1mjnz7gccqnc6qja2tahqtjhm&scope=bits%3Aread+channel%3Aread%3Aredemptions+channel%3Aread%3Asubscriptions"
//"vkneh1mjnz7gccqnc6qja2tahqtjhm"

    //fetch('https://api.twitch.tv/zack_ko/bits/leaderboard')


// let response = fetch('https://api.twitch.tv/helix/bits/leaderboard?count=2&period=week', {
//     method: 'GET',
//     headers: {
//       'Authorization': 'Bearer vkneh1mjnz7gccqnc6qja2tahqtjhm',
//       'Client-Id': '9wi5buthub8vb69nho94sn8s2bhewo'
//     }
//   });

    // fetch('https://api.twitch.tv/zack_ko/bits/leaderboard')
    // .then(data => {
    // return data.json();
    // })
    // .then(post => {
    // console.log(data);
    // });

//console.log(response)



// let clinetId = "9wi5buthub8vb69nho94sn8s2bhewo";
// let clinetSecret = "ejnvl8lbo58hip5je45htvu8ynq06w";

// function getTwitchAuthorization() {
//     let url = `https://id.twitch.tv/oauth2/token?client_id=${clinetId}&client_secret=${clinetSecret}&grant_type=client_credentials`;

//     fetch(url, {
//     method: "POST",
//     })
//     .then((res) => res.json())
//     .then((data) => handleAuthorization(data));
// }

// function handleAuthorization(data) {
//     let { access_token, expires_in, token_type } = data;
//     document.write(`${token_type} ${access_token}`);
// }
// getTwitchAuthorization();


// let clinetId = "9wi5buthub8vb69nho94sn8s2bhewo";
// let clinetSecret = "ejnvl8lbo58hip5je45htvu8ynq06w";

// function getTwitchAuthorization() {
//     let url = `https://id.twitch.tv/oauth2/token?client_id=${clinetId}&client_secret=${clinetSecret}&grant_type=client_credentials`;

//     return fetch(url, {
//     method: "POST",
//     })
//     .then((res) => res.json())
//     .then((data) => {
//         return data;
//     });
// }

// async function getStreams() {
//     const endpoint = "https://api.twitch.tv/helix/streams";

//     let authorizationObject = await getTwitchAuthorization();
//     let { access_token, expires_in, token_type } = authorizationObject;

//     //token_type first letter must be uppercase    
//     token_type =
//     token_type.substring(0, 1).toUpperCase() +
//     token_type.substring(1, token_type.length);

//     let authorization = `${token_type} ${access_token}`;

//     let headers = {
//     authorization,
//     "Client-Id": clinetId,
//     };

//     fetch(endpoint, {
//     headers,
//     })
//     .then((res) => res.json())
//     .then((data) => renderStreams(data));
// }

// function renderStreams(data) {
//     document.body.innerHTML = `
// ${JSON.stringify(data)}
// `;
// }

// getStreams();

import { StaticAuthProvider } from '/@twurple/auth';
import { ApiClient } from '/@twurple/api';

const clientId = '9wi5buthub8vb69nho94sn8s2bhewo';
const accessToken = 'vkneh1mjnz7gccqnc6qja2tahqtjhm';

const authProvider = new StaticAuthProvider(clientId, accessToken);


const apiClient = new ApiClient({ authProvider });
