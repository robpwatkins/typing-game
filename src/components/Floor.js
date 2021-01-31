import React, { useRef, useEffect } from 'react';

export default function Floor({ missedKeystrokes, setFloorHeight }) {

  const floorRef = useRef();

  useEffect(() => {
    missedKeystrokes && setFloorHeight(floorRef.current.scrollHeight);
  }, [missedKeystrokes, setFloorHeight])

  return (
    <div className="floor" style={{height: `${missedKeystrokes * 10}px`}} ref={floorRef}>
    </div>
  )
}