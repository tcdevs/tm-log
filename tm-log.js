/**
 * tm-log
 * A simple yet versatile commandline logger with a prefixed timestamp or modulename
 * https://github.com/tcdevs/tm-log
 */
var pkg = require('./package.json'),
    chalk = require('chalk');

var mod = require('./tm-log.json'),
    now = new Date(),
    hrs = now.getHours(),
    mins = now.getMinutes(),
    secs = now.getSeconds(),
    time = ( ( hrs < 10 )  ? '0' + hrs : hrs ) + ':' + 
           ( ( mins < 10 ) ? '0' + mins : mins ) + ':' + 
           ( ( secs < 10 ) ? '0' + secs : secs ),
    nameBased = function(c){ return '[' + chalk[c]( mod.name ) + '] '; },
    timeBased = function(c){ return '[' + chalk[c]( time ) + '] '; };

function log(){
  process.stdout.write(timeBased('grey'));
  console.log.apply(console, arguments);
}

function error(){
  process.stdout.write( timeBased('red') );
  console.log.apply(console, arguments);
}

function info(){
  process.stdout.write( timeBased('cyan') );
  console.log.apply(console, arguments);
}

function warning(){
  process.stdout.write( timeBased('yellow') );
  console.log.apply(console, arguments);
}

function Log(){
  process.stdout.write( nameBased('grey') );
  console.log.apply(console, arguments);
}

function Error(){
  process.stdout.write( nameBased('red') );
  console.log.apply(console, arguments);
}

function Info(){
  process.stdout.write( nameBased('cyan') );
  console.log.apply(console, arguments);
}

function Warning(){
  process.stdout.write( nameBased('yellow') );
  console.log.apply(console, arguments);
}

function json(){
  console.log(JSON.stringify(arguments[0], null, "  "));
}

function setName(name){
  fs = require('fs');

  var cfg = { "name": name};

  var root_path = __dirname.slice(0, -19);
  console.log('root_path: ' + root_path);

  fs.writeFile(__dirname +'/tm-log.json', JSON.stringify(cfg),function(){
    console.log('cfg saved!');
    mod = require('./tm-log.json')
  });
}

module.exports = log;
module.exports.error = error;
module.exports.warning = warning;
module.exports.info = info;
module.exports.Log = Log;
module.exports.Error = Error;
module.exports.Warning = Warning;
module.exports.Info = Info;
module.exports.json = json;
module.exports.setName = setName;