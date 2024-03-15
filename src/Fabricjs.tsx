//** Import react
import { useEffect, useCallback } from 'react';
import * as fabric from '@boardxus/x-canvas';

import {
  Link,
} from "react-router-dom";


const Fabricjs = () => {

  /*
    const initializeCanvas = useCallback(async () => {
      console.log("### initializeCanvas ###")
      if (!document.getElementById('canvasContainer') || store.getState().board.initCanvas) return;
      document.getElementById('canvasContainer').innerHTML =
        ` <canvas
                    style={{
                      width: '100%',
                      height: '100%'
                    }}
                    id='icanvas'
                    
                  />`;
      if (canvas) {
        canvas.dispose();
        canvas = null;
        window.canvas = null;
      }
  
      canvas = await new fabric.Canvas('icanvas', {
        defaultCursor: 'default',
        renderOnAddRemove: false,
        imageSmoothingEnabled: false,
        skipOffscreen: true,
        preserveObjectStacking: true,
        selection: true,
        fireRightClick: true,
  
      });
  
      Boardx.Instance.board = canvas;
      window.canvas = canvas;
      canvas._initStatic();
      store.dispatch(handleSetInitCanvas(true));
      return canvas;
    }, []);
  
  
    
  
    canvas._initStatic();
    
    useEffect(() => {
      console.log("canvas");
    }, [canvas]);
  
  */

  return <>

    <Link to="/">Home</Link>
    <br />
    <Link to="/">Price</Link>

    <div>A canvas is below</div>
    <canvas
      style={{
        width: '300px', //'100%',
        height: '100%'
      }}
      id="icanvas"
    />

  </>



};


export default Fabricjs;


