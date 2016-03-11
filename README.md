# tm-log

> A simple yet versatile commandline logger with a prefixed timestamp or modulename.

## Get started

- Install latest version via npm `npm install tm-log --save`.
- Clone this repo `git clone https://github.com/tcdevs/tm-log`.

## Usage

```js
var log = require('tm-log');

log('a normal log message');
// [13:55:62] a normal log message

log.error('oh no a error message!');
// [13:55:62] oh no a error message!

log.warning('oh no a warning message!');
// [13:55:62] oh no a warning message!

log.info('oh no a info message!');
// [13:55:62] oh no a info message!

log.Log('a normal log message');
// [package-name] a normal log message

log.Error('oh no a error message!');
// [package-name] oh no a error message!

log.Warning('oh no a warning message!');
// [package-name] oh no a warning message!

log.Info('oh no a info message!');
// [package-name] oh no a info message!

var my_json = {"name":"John", "Lastname":"Doo"};
log.json(my_json);
// {
//   "name":"John",
//   "Lastname":"Doo"
// }

```

## API

### `log(msg...)`

Logs the message as if you called `console.log` but prefixes the output with the
current time in HH:MM:ss format.

### `log.error(msg...)`

Logs the message as if you called `console.error` but prefixes the output with the
current time in HH:MM:ss format.

### `log.warning(msg...)`

Logs the message as if you called `console.warning` but prefixes the output with the
current time in HH:MM:ss format.

### `log.info(msg...)`

Logs the message as if you called `console.info` but prefixes the output with the
current time in HH:MM:ss format.

### `log.Log(msg...)`

Logs the message as if you called `console.log` but prefixes the output with the
current parent node module name.

### `log.Error(msg...)`

Logs the message as if you called `console.error` but prefixes the output with the
current parent node module name.

### `log.Warning(msg...)`

Logs the message as if you called `console.warning` but prefixes the output with the
current parent node module name.

### `log.Info(msg...)`

Logs the message as if you called `console.info` but prefixes the output with the
current parent node module name.

### `log.json(JSON)`

Logs a JSON object by stringify it and displays it wthindetation of 2 spaces. 

## License

MIT