import { Observable } from 'data/observable';
import * as app from 'application';
import * as dialogs from 'ui/dialogs';

export class Common extends Observable {
  public message: string;

  constructor() {
    super();
    this.message = Utils.SUCCESS_MSG();
  }
}

export class Utils {
  public static SUCCESS_MSG(): string {
    let msg = `Your plugin is working on ${app.android ? 'Android' : 'iOS'}.`;

    setTimeout(() => {
      dialogs.alert(`${msg} For real. It's really working :)`).then(() => console.log(`Dialog closed.`));
    }, 2000);

    return msg;
  }
}

