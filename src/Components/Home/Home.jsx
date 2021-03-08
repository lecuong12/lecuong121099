import React from 'react';

function Home(props) {
    function openNav() {
        document.getElementById("menunav").style.width = "350px";
    }

    function closeNav() {
        document.getElementById("menunav").style.width = "0";
    }
    return (
        <>
            <div className="containerr">
                <div className="tab-bar" style={{ backgroundColor: 'rgba(8, 34, 45, 1)' }}>
                    <span style={{ fontSize: 30, cursor: 'pointer', color: 'antiquewhite' }} onClick={() => {openNav()}}>&#9776;</span>
                    <span>Epen</span>
                    <span style={{ cursor: 'pointer' }}><i className="fa fa-search" aria-hidden="true"></i></span>

                </div>
                <div id="menunav" className="menunav-bar">
                    <a href="javascript:void(0)" className="closebtn" onClick={()=>{closeNav()}}>&times;</a>
                    <a href="#">Browse</a>
                    <a href="#">Accounts</a>
                    <a href="#">add a ClassName</a>
                    <a href="#">ClassNameroom</a>
                    <br />
                    <a href="#">Change Password</a>
                    <a href="#">Log out</a>
                </div>
            </div>
            <div className="main">
                <div className="content">
                    <div className="cart">
                        <img className="img-fluid" src="http://dsho445x5pqu1.cloudfront.net/Vendor/Workbooks/f212ff5b-0a89-4e82-a7ea-0d4f413deea0/cover.jpg" alt="Math" />
                    </div>
                    <div className="cart">
                        <img className="img-fluid" src="http://dsho445x5pqu1.cloudfront.net/Vendor/Workbooks/560725c8-ddfe-46d1-861a-8d2e7c8f420b/cover.jpg" alt="Math" />
                    </div>
                </div>
            </div>
            <div className="bottom">
            <button>
                <i className="fa fa-upload" aria-hidden="true"></i>
            </button>
        </div>
        </>
    );
}

export default Home;