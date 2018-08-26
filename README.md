# simple-color-print

Prints out different colors to the console. Use this for console printing in the backend. It also
prints out the full object so you don't end up with "[Object object]". Also includes TypeScript declaration
file. 

created by Sean Maxwell June 25, 2018.


- `cerr('hello world')` <-- prints red

- `cinfo('hello world')` <-- prints green

- `cwarn('hello world')` <-- prints yellow

- `cimp('hello world')` <-- prints blue and underlined

- example: 

            import { cerr, cinfo, cwarn, cimp } from 'simple-color-print'
            
            if(err) { 
                cerr(err) 
            }
            else if(good) {
                cinfo(message)
            }
