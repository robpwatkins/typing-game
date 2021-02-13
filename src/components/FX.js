import React from 'react';
import { VolumeMute, VolumeOff } from '@material-ui/icons';

export default function FX({ fxEnabled, handleClick }) {
  return (
    <>
      {fxEnabled 
        ? <div>
            <VolumeMute style={{fontSize: "4vh"}} onClick={handleClick} />
          </div>
        : <div>
            <VolumeOff style={{fontSize: "4vh"}} onClick={handleClick} />
          </div>
      }
    </>
  )
}