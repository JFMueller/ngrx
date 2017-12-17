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
    const microseconds = DateUtils.padWithZeros(('' + (window.performance.now() - startUp)).split('.').pop().substr(0, 5), 5);
    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}:${millis}.${microseconds}`;
  }

  private static getMonth(date: Date): string {
    return this.padWithZeros(date.getMonth() + 1, 2);
  }

  private static getDay(date: Date): string {
    return this.padWithZeros(date.getDate(), 2);
  }

  private static padWithZeros(target: string | number, desiredLength: number): string {
    const diff = desiredLength - target.toString().length;
    let pad = '';
    if (diff > 0) {
      for (let i = 0; i < diff; i = i + 1) {
        pad = pad + '0';
      }
    }
    return pad + '' + target;
  }
}
