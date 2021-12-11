import { debounce } from 'lodash-es';
import React, { useCallback, useEffect, useRef } from 'react';
import { MAIN_ID } from '../../constants';
import { Vectors } from '../vector-collection';
import * as style from './style.module.css';

function Wrapper(props) {
  const elementRef = useRef();

  const handleResize = useCallback(() => {
    /** @type {HTMLElement} */
    const element = elementRef.current;
    const height = window.innerHeight;

    if (element) element.style.setProperty('--vh', `${height}px`);
  }, [elementRef]);
  const handleResizeDebounced = debounce(handleResize, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResizeDebounced);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResizeDebounced);
    };
  }, [handleResize, handleResizeDebounced]);

  return (
      <div className={style.wrapper} style={{ '--vh': '100vh' }} ref={elementRef}>
        <Vectors/>
        <a href={`#${MAIN_ID}`} className="skip-to-content">Skip to main content</a>
        {props.children}

        {/*<Splash/>*/}
      </div>
  );
}

export { Wrapper };
