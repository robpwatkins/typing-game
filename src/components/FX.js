import React from 'react';
import { VolumeMute, VolumeOff } from '@material-ui/icons';

export default function FX({ fxEnabled, handleClick }) {
  return (
    <div className="fx">
      {fxEnabled 
        ? <VolumeMute style={{fontSize: "4vh", marginLeft: "-3.5%"}} onClick={handleClick} />
        : <VolumeOff style={{fontSize: "4vh"}} onClick={handleClick} />
      }
    </div>
  )
}