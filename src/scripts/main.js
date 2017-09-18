// Import a couple modules for testing.
import { sayHelloTo } from './modules/mod1';
import addArray from './modules/mod2';

// Import a logger for easier debugging.
import debug from 'debug';
const log = debug('app:log');

// Enable the logger.
debug.enable('*');
log('Logging is enabled!');

// Run some functions from our imported modules.
const result1 = sayHelloTo('Jason');
const result2 = addArray([1, 2, 3, 4]);

// Print the results on the page.
const printTarget = document.getElementsByClassName('debug__output')[0];

printTarget.innerText = `sayHelloTo('Jason 123 34545') => ${result1}\n\n`;
printTarget.innerText += `addArray([1, 2, 3, 4]) => ${result2}`;
