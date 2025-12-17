import React from 'react';

// with JSX- clean and readable code


export const Card = () => {
    return (
        <div id='card'>
        <h2>Card Component</h2>
         <p>This is a simple card component created with JSX syntax.</p>
          <span style={{color:'blue'}}>Enjoy coding!</span>
          <button>Click Me</button>
        </div>
    )
}


// without JSX- more verbose and complex code
export const CardWithoutJSX = () => {
   return React.createElement(
    'div',
    React.createElement('h2',null,'Welcome'),
    React.createElement('p',null,'This is a'),
    React.createElement('span',{id:'hightlight'},'paragraph'),
    'with txt content'
   ),
   React.createElement('div',null,
    React.createElement('h2',null,'Card Component'),
    React.createElement('p',null,'This is a simple card component created without JSX syntax.'),
    React.createElement('span',{style:{color:'blue'}},'Enjoy coding!')
   );
}