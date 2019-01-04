# simple-color-print

4 functions to print out different colors to the console. Use this for console printing in NodeJS. 
It prints out the full object so you don't end up with "[Object object]". Also includes TypeScript 
declaration file so it works with "no-implicity-any" in tsconfig.json. No configuration required. 

created by Sean Maxwell June 25, 2018.


- `cerr('hello world')` <-- prints red

- `cinfo('hello world')` <-- prints green

- `cwarn('hello world')` <-- prints yellow

- `cimp('hello world')` <-- prints blue and underlined


TypeScript example: 

```typescript
import { cerr, cinfo, cwarn, cimp } from 'simple-color-print';

if (err) {
    cerr(err);
} else if (info) {
    cinfo(info);
}
```


- JavaScript example: 

```javascript
let scp = require('simple-color-print');

if (warning) {
    scp.cwarn(warn);
} else if (info) {
    scp.cimp('All is well!');
}
```


