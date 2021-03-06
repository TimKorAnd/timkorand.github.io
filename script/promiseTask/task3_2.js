'use strict';
/* ******************* Task3_2:
2) Rewrite as async/await pattern
function callApi(){
    return fetch('url/to/api/endpoint') //some amazing endpoint
        .then(resp => resp.json())
        .then(data => {
// datas }).catch(err => {
// errors
        })
}*/
const fetch = require('node-fetch');
const testUser = {name: 'TimKorAnd'}
let objectEqualiter;
try {
    objectEqualiter = require('../arrayAndObjctsTasks/task3/scriptTask13')
} catch (err) {
    console.warn('Some modules does`t required, full functionality may be unavailable.')
} finally {
    console.log('But still all must works correct!');
}

/**
 * get user data from amazing github endpoint via promise syntax
 * @param username
 * @returns {Promise<any>}
 */
function callApi(username) {
    return fetch(`https://api.github.com/users/${username}`) //some amazing endpoint
        .then(resp => resp.json())
        .then(data => {
           console.log(data);
            return data;
        }).catch(err => {
// errors
        })
}

const userObject1 = callApi(testUser.name);

/**
 * get user data from amazing github endpoint via async/await syntax
 * @param username
 * @returns {Promise<void>}
 */
async function callApiViaAsyncAwait(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`); //some amazing endpoint
        const user = await response.json();
        console.log(user);
        return user;
    } catch (err) {
        // errors
    }
}
const userObject2 = callApiViaAsyncAwait(testUser.name);
(async () => {
    if (objectEqualiter) {
        console.log('Does fetched users equals (deep compare)? ' + objectEqualiter.isEqual(await userObject1, await userObject2));
    } else {
        console.log('Does fetched users equals? (shallow compare) ' + (JSON.stringify(await userObject1) === JSON.stringify(await userObject2)));
    }
})();


