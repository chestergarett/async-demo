console.log('Before');

// getUser(1)
//     .then(user => getRepositories(user))
//     .then(repos => getCommits(repos))
//     .then(commits => console.log(commits))
//     .catch(err => console.log(err.message));

//async and await
async function displayCommits(){
    try{
        const user = await getUser(1);
        const repos = await getRepositories(user);
        const commits = await getCommits(repos[0]);
        console.log(commits);    
    }
    catch(err){
        console.log('Error', err.message);
    }
}

displayCommits();

console.log('After');

function getRepositories(user){
    return new Promise( (resolve, reject) => {
        setTimeout( ()=>{
            console.log('Calling Github API...');
            // resolve(['repo1', 'repo2', 'repo3']);
            reject(new Error('Could not get repos.'))
        }, 2000)
    });
}
function getCommits(repos){
    return new Promise( (resolve, reject) => {
        setTimeout( ()=>{
            console.log('Calling repos...');
            resolve(['commit']);
        }, 2000)
    });
}

function getUser (id) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'Chester' })
        }, 2000);
    })
}