import React, { useState } from 'react';
import { MAX_POS } from '../constants';
import { getInitialTileList } from '../util/tile';
import { times } from 'lodash'
import useMoveTile from '../hook/useMoveTile';

export default function Game() {
  const [tileList, setTileList] = useState(getInitialTileList);

  useMoveTile();

  return (
    <div className="game-container">
      <div className="grid-container">
        {times(MAX_POS, index =>
          <div key={index} className="grid-row">
            {times(MAX_POS, index2 =>
              <div key={index2} className="grid-cell"></div>
            )}
          </div>
        )}
      </div>

      <div className="tile-container">
        {tileList.map((item) =>
          <div key={item.key}
            className={`tile tile-${item.value} tile-position-${item.x}-${item.y}`}
          >
            <div key={item.key + 100} className="tile-inner">{item.value}</div>
          </div>
        )}

      </div>
    </div>
  );
}
