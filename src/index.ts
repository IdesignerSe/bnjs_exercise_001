import fetchUser from "./githubAPI";
(async () => {
    const userData = await fetchUser('IdesignerSe')
    document.querySelector('h1').innerHTML = JSON.stringify
    (userData);   
})();
