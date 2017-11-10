Multimaps
=========

A small library that extends the JavaScript `Map` built-in class, to give it similar capabilities as Google Guava's `ArrayListMultimap` and `SetMultimap`.

In addition, instances of these classes can be rendered as JSON when serialized.

## Installation

  `npm install multimaps`

## Usage
```js
    const { ListMultimap, SetMultimap } = require('multimaps');

    const lmap = new ListMultimap;
    lmap.set('abc', 2);
    lmap.get('abc'); //=> [2]
    
    lmap.set('xyz', 3)
        .set('xyz', 4);
    lmap.get('xyz'); //=> [3,4]
    
    JSON.stringify(lmap); //=> { "abc": [2], "xyx": [3,4] }
    
    const smap = new SetMultimap;
    smap.set('abc', 2)
        .set('abc', 2);
    smap.get('abc'); //=> [2]
    
    smap.set('abc', 3);
    smap.get('abc'); //=> [2, 3]
    
    JSON.stringify(smap); //=> { "abc": [2,3] }
```

The rest of the API and functionality is the same as the `Map` built-in. 

`Multimaps` is written in ES6/ES 2015 class syntax, and requires Node 6.5+.  

This library is not transpiled, as transpilation can't accurately imitate the extension of built-in classes and are not as performant.

## Tests

  `npm test`

## Contributing

- In lieu of a formal style guide, take care to maintain the existing coding style. 
- Add unit tests for any new or changed functionality. 
- Lint and test your code.