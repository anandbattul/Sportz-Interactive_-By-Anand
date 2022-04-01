import React from 'react';

export default function Card({item,no}) {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow 0.5 bw2 shadow-5' >
            <img src={`./player-images/${item.Id}.jpg`}  alt="profile_img_roboproject"/>
            <p>Name:-&nbsp;&nbsp;{item.PFName}</p>
            <p>Team:-&nbsp;&nbsp;{item.TName}</p>
            <p>Skill:-&nbsp;&nbsp;{item.SkillDesc}</p>
            <p>$:-&nbsp;&nbsp;{item.Value}</p>
            <p>Upcoming match:-&nbsp;&nbsp;{item.UpComingMatchesList[0].CCode} vs. {item.UpComingMatchesList[0].VsCCode}</p>
            <p>next match time:-&nbsp;&nbsp;{item.UpComingMatchesList[0].MDate}</p>
         </div>
    )
}
