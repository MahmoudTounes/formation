import React from 'react';
import Interformation from './Interformation';
import Initiationapp from './listeFormation/Initiationapp';
function formations() {
    return (
        <div className="drawer-content">
            <Interformation />
            <Initiationapp />
          
        </div>
    );
}

export default formations;