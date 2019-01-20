
// eslint-disable-next-line no-console
abstract class Department {

  protected constructor(public name: string) {
  }

  public printName(): void {
    console.log('Department name: ' + this.name);
  }

  public abstract printMeeting(): void; // 必须在派生类中实现
}

export { Department }


/* eslint-enable */
