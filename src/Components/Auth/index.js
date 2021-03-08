import React,{useState} from 'react';
import Login from './Login';
import userApi from '../../Api/AuthApi/authApi'

function Home() {
    const [userToken, setUserToken] = useState("")
    const handleSubmit = async (values) => {
        userApi.login(values)
            .then((res) => {
                if (res.responseStatusCode === 200 && res.responseStatusMessage === "SUCCESS") {
                    console.log(res.content);
                    setUserToken(res.content.tokenId)
                    sessionStorage.setItem('tokenId',res.content.tokenId)
                } else {
                    console.log(res.responseStatusMessage);
                }
            })
    }

    console.log(userToken);
    return (
        <>
            <Login onSubmit={handleSubmit} />
        </>
    );
}

export default Home;