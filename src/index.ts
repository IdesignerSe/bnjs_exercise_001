import fetchUser from "./githubAPI";
(async () => {
    const userData = await fetchUser('BjörnDenVännen')
    document.querySelector('h1').innerHTML = JSON.stringify
    (userData);   
}) ();
