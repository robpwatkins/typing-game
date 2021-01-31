import React from 'react';

export default function Floor({ missedKeystrokes }) {
  return (
    <div className="floor" style={{height: `${missedKeystrokes * 10}px`}}>
    </div>
  )
}