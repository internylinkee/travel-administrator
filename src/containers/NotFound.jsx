import React from 'react';

export default function notFound(props) {
  return (
    <div className="outer-wrapper">
      <div className="inner">
        <div className="four-wrapper">
          <div className="leg-1" />
          <div className="leg-2" />
          <div className="leg-3" />
        </div>

        <div className="zero-wrapper">
          <div className="zero-wrapper__middle" />
        </div>

        <div className="four-wrapper">
          <div className="leg-1" />
          <div className="leg-2" />
          <div className="leg-3" />
        </div>
      </div>

      <h1>Page not found</h1>
    </div>
  );
}

notFound.displayName = 'NotFound';
