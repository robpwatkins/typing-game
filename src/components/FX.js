import React from 'react';
import { VolumeMute, VolumeOff } from '@material-ui/icons';

export default function FX({ fxEnabled, handleClick }) {
  return (
    <div className="fx">
      {fxEnabled 
        ? <VolumeMute style={{fontSize: "50px", paddingTop: "5px"}} onClick={handleClick} />
        : <VolumeOff style={{fontSize: "55px", paddingLeft: "10px"}} onClick={handleClick} />
      }
    </div>
  )
}