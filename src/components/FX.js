import React from 'react';
import { VolumeUp, VolumeOff } from '@material-ui/icons';

export default function FX({ fxEnabled, handleClick }) {
  return (
    <div className="fx">
      {fxEnabled 
        ? <VolumeUp style={{fontSize: "4vh"}} onClick={handleClick} />
        : <VolumeOff style={{fontSize: "4vh"}} onClick={handleClick} />
      }
    </div>
  )
}