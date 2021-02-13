import React from 'react';
import { VolumeMute, VolumeOff } from '@material-ui/icons';

export default function FX({ fxEnabled, handleClick }) {
  return (
    <div className="fx">
      {fxEnabled 
        ? <div className="volume-mute">
            <VolumeMute style={{fontSize: "4vh"}} onClick={handleClick} />
          </div>
        : <div>
            <VolumeOff style={{fontSize: "4vh"}} onClick={handleClick} />
          </div>
      }
    </div>
  )
}