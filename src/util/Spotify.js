const cliendId = '1cfec0972f3e4543b38d62f7cd97a56a';
const redirectUri ='http://localhost:3000'
let accessToken;
const Spotify={

    getAccessToken(){
        if(accessToken){
            return accessToken;
        }

        const accessTokenMatch =window.location.href.match(/acces_toke=([^&]*)/);
        const expiresInMatch=window.location.href.match(/expires_in=([^&]*)/);


        if(accessTokenMatch && expiresInMatch){
            accessToken =accessTokenMatch[1];
            const expiresIN = Number(expiresInMatch[1]);

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');

            return accessToken
        }else{
            const  accessUrl= `https://accounts.spotify.com/authorize?client_id=${cliendId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
            window.location= accessUrl
        }

    }

}

export default Spotify;