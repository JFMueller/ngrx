export class DateUtils {

  static hourlyLogFormat(startUp: number) {
    const date = new Date();
    const hours = DateUtils.padWithZeros(date.getHours(), 2);
    const minutes = DateUtils.padWithZeros(date.getMinutes(), 2);
    const seconds = DateUtils.padWithZeros(date.getSeconds(), 2);
    const millis = DateUtils.padWithZeros(date.getMilliseconds(), 3);
    const microseconds = DateUtils.padWithZeros(('' + (window.performance.now() - startUp)).split('.').pop().substr(0, 5), 5);
    return `${hours}:${minutes}:${seconds}:${millis}.${microseconds}`;
  }

  static dailyLogFormat(startUp: number) {
    const date = new Date();
    const day = DateUtils.getDay(date);
    const month = DateUtils.getMonth(date);
    const year = date.getFullYear();
    const hours = DateUtils.padWithZeros(date.getHours(), 2);
    const minutes = DateUtils.padWithZeros(date.getMinutes(), 2);
    const seconds = DateUtils.padWithZeros(date.getSeconds(), 2);
    const millis = DateUtils.padWithZeros(date.getMilliseconds(), 3);
    const microseconds = DateUtils.padWithZeros(('' + (window.performance.now() - startUp)).split('.').pop().substr(0, 5), 5, true);
    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}:${millis}.${microseconds}`;
  }

  static duration(duration: number, humanReadable: boolean): string {
    if (humanReadable) {
      const milliSecondsInMinute = 60000;
      const milliSecondsInHours = 3600000;

      const hours = duration >= milliSecondsInHours ? parseInt(((duration / (milliSecondsInHours)) % 24) + '', 10) : 0;
      const minutes = duration >= milliSecondsInMinute ? parseInt(((duration / (milliSecondsInMinute)) % 60) + '', 10) : 0;
      const seconds = duration >= 1000 ? parseInt(((duration / 1000) % 60) + '', 10) : 0;
      const milliSeconds = ('' + (duration - (seconds * 1000) - (minutes * milliSecondsInMinute) - (hours * milliSecondsInHours)));
      const millisAndMicros = milliSeconds.split('.');

      const hoursReadable = DateUtils.padWithZeros(hours, 2);
      const minutesReadable = DateUtils.padWithZeros(minutes, 2);
      const secondsReadable = DateUtils.padWithZeros(seconds, 2);
      const milliSecondsReadable = DateUtils.padWithZeros(millisAndMicros.shift(), 3);
      const microSecondsReadable = DateUtils.padWithZeros((millisAndMicros.length ? millisAndMicros.pop() : '0').substr(0, 5), 5, true);

      return `${hoursReadable}:${minutesReadable}:${secondsReadable}:${milliSecondsReadable}.${microSecondsReadable}`;
    } else {
     return '' + duration;
    }
  }

  private static getMonth(date: Date): string {
    return this.padWithZeros(date.getMonth() + 1, 2);
  }

  private static getDay(date: Date): string {
    return this.padWithZeros(date.getDate(), 2);
  }

  private static padWithZeros(target: string | number, desiredLength: number, append = false): string {
    const diff = desiredLength - target.toString().length;
    let pad = '';
    if (diff > 0) {
      for (let i = 0; i < diff; i = i + 1) {
        pad = pad + '0';
      }
    }
    if (append) {
      return target + '' + pad;
    } else {
      return pad + '' + target;
    }
  }
}
