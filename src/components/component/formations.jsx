import React from 'react';
import Interformation from './Interformation';
import Initiationapp from './listeFormation/Initiationapp';
import Bureautiqueapps from './listeFormation/Bureautiqueapps'
function formations() {
    return (
        <div className="drawer-content">
            <Interformation />
            <Initiationapp />
            <Bureautiqueapps/>
          
        </div>
    );
}

export default formations;