const log4js = require('log4js');

log4js.configure(
{
  appenders:
  {
    console:
    {
        type: 'console',
    },
    datelog:
    {
        type: 'dateFile',
        filename: 'logs/mylog',
        pattern: ".yyyy-MM-dd.txt",
        // alwaysIncludePattern: true,
        // maxLogSize: 10, // 无效
        // backups: 5, // 无效
        compress: true,
        daysToKeep: 2,
    },
    datelog2:
    {
        type: 'dateFile',
        filename: 'logs/youlog',
        pattern: ".yyyy-MM-dd.txt",
        compress: true,
        daysToKeep: 2,
    },
    // more...
  },
  categories:
  {
      default:
      {
          appenders: ['console'],
          level: 'debug',
      },
      datelog:
      {
          // 指定为上面定义的appender，如果不指定，无法写入
          appenders: ['console', 'datelog'],
          level: 'debug', // 指定等级
      },
      datelog2:
      {
          appenders: ['console', 'datelog2'],
          level: 'debug',
      },
      // more...
  },
  
  // for pm2...
  pm2: true,
  disableClustering: true, // not sure...
}
);


function getLogger(type)
{
    return log4js.getLogger(type);
}

module.exports = {
    getLogger,
}