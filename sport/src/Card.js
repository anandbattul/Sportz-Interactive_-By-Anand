import React from 'react';

export default function Card({user}) {
    return (

        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5' >
            <img src={`../src/player-images/${user.playList[0].Id}.jpg`} alt="profile_img_roboproject"/>
            <div>
                <h2>{user}</h2>
                <p>{}</p>
            </div>
        </div>
    )
}
