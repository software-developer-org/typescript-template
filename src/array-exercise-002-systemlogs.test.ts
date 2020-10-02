import { getRandomLogs, Log, LogType, getLogsForType } from './array-exercise-002-systemlogs';
describe('Get system logs', () => {
  it('test 1', () => {
    const systemLogs: Log[] = [
      new Log('message1', LogType.Info),
      new Log('message2', LogType.Debug),
      new Log('message3', LogType.Debug),
      new Log('message4', LogType.Error),
      new Log('message5', LogType.Info),
      new Log('message6', LogType.Error),
    ];

    // test errors
    const errorLogs: Log[] = [new Log('message4', LogType.Error), new Log('message6', LogType.Error)];
    let logs = getLogsForType(systemLogs, LogType.Error);
    expect(logs).toEqual(errorLogs);

    // test info
    const infoLogs: Log[] = [new Log('message1', LogType.Info), new Log('message5', LogType.Info)];
    logs = getLogsForType(systemLogs, LogType.Info);
    expect(logs).toEqual(infoLogs);

    // test debug
    const debugLogs: Log[] = [new Log('message2', LogType.Debug), new Log('message3', LogType.Debug)];
    logs = getLogsForType(systemLogs, LogType.Debug);
    expect(logs).toEqual(debugLogs);
  });

  //   it('test 2', () => {
  //     getRandomLogs();
  //   });
});
