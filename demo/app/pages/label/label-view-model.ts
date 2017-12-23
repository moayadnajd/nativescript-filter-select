import { Observable } from 'data/observable';
import * as fs from 'file-system';
import { Page } from 'ui/page';
var documents = fs.knownFolders.currentApp();

class FileReader {
  static readJSON(path: string) {
    var jsonFile = documents.getFile(path);
    return new Promise((resolve, reject) => {
      try {
        jsonFile.readText().then((content: string) => {
          let data = JSON.parse(content);
          resolve(data);
        });
      }
      catch (err) {
        reject(err);
      }
    });
  }
}
export class LabelModel extends Observable {
  public count = 0;
  private _countries: any[] = [];
  public hint = "please select ";

  public get countries(): any[] {
    return this._countries;
  }

  public set countries(value: any[]) {
    this._countries = value;
  }
  public selected = [{ "name": "Jordan", "code": "JO" }];

  public item_template = `
  <GridLayout class="item" columns="100,*,100"> 
  <IC:WebImage xmlns:IC="nativescript-web-image-cache" width="90" height="60" stretch="fill" row="0"
             col="0"  id="my-image-1" placeholder="~/icon.png" 
             src="{{ flags(code) }}">
             </IC:WebImage>
  <Label col="1" class="text-center" text="{{ name }}" textWrap="true" /> 
  <Label col="2" class="text-center" text="{{ code }}" textWrap="true" /> 
  </GridLayout>
  `;

  public onSelect(args) {
    console.log('selected array is => ' + JSON.stringify(args.selected));
  }

  constructor() {
    super();
    FileReader.readJSON('countries.json').then((data: any) => {
      this.countries = data;
      this.Refresh('countries');
    });



  }
  public init(page: Page) {
    let refreshLabel = page.getViewById('refreshLabel');
    this.changeText(refreshLabel);
  }
  public changeText(refreshLabel) {
    let self = this;
    console.log("please select => " + self.count);
    setInterval(function () {
      self.hint = "please select => " + self.count
      self.count = self.count + 1;
      self.Refresh('hint');
      console.log(self.hint);
      refreshLabel.refresh();
    }, 1000);

  }

  public Refresh(key = null) {
    var self = this;
    this.notify({
      object: self,
      eventName: Observable.propertyChangeEvent,
      propertyName: key,
      value: self[key]
    });


  }


}