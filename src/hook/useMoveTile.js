import { useEffect } from "react";
import { addKeyObserver } from "../util/keyboard";

export default function useMoveTile({ tileList, setTileList }) {
  function moveAndAdd({ x, y }) {
    const newTileList = moveTile({ tileList, x, y });
    const newTile = makeTile(newTileList);
    newTileList.push(newTile);
    setTileList(newTileList);
  }

  function moveUp() {
    moveAndAdd({ x: 0, y: -1 });
  }

  function moveDown() {
    moveAndAdd({ x: 0, y: 1 });
  }

  function moveLeft() {
    moveAndAdd({ x: -1, y: 0 });
  }

  function moveRight() {
    moveAndAdd({ x: 1, y: 0 });
  }

  useEffect(() => {
    addKeyObserver('up', moveUp);
    addKeyObserver('down', moveDown);
    addKeyObserver('left', moveLeft);
    addKeyObserver('right', moveRight);
    return () => {
      removeKeyObserver('up', moveUp);
      removeKeyObserver('down', moveDown);
      removeKeyObserver('left', moveLeft);
      removeKeyObserver('right', moveRight);
    }
  });
}