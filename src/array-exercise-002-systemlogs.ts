export enum LogType {
  Info = 0,
  Debug = 1,
  Error = 2,
}

export class Log {
  constructor(public message: string, public type: LogType) {}
}

/**
 * Source: https://stackoverflow.com/a/1349426/3437868
 * @param length
 */
function randomString(length: number) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function getRandomLogs(numberOfLogs: number = 100) {
  const logs = new Array(numberOfLogs).fill(undefined).map((_) => {
    const enumIndex = Math.floor(Math.random() * 10) % 3;
    const logType = (LogType[enumIndex] as any) as LogType;
    const log = new Log(randomString(10), logType);
    return log;
  });
  return logs;
}

export function getLogsForType(logs: Log[], type: LogType): Log[] {
  return undefined;
}
