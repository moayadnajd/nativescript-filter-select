import { Observable } from 'data/observable';
import * as fs from 'file-system';
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
export class HelloWorldModel extends Observable {

  private _countries: any[] = [];

  public get countries(): any[] {
    return this._countries;
  }

  public set countries(value: any[]) {
    this._countries = value;
  }

  public selected = [{ "name": "Afghanistan", "code": "AF" }, { "name": "Albania", "code": "AL" }];

  public item_template = '<GridLayout class="item" columns="100,*,100"> <IM:ImageCacheMedia  col="0" xmlns:IM="nativescript-image-cache-media" placeholder="~/icon.png" width="90" height="60" imageUri="{{ flags(code) }}"/>  <Label col="1" class="text-center" text="{{ name }}" textWrap="true" /> <Label col="2" class="text-center" text="{{ code }}" textWrap="true" /> </GridLayout>';

  public onSelect(selectedArray,slef) {
    console.log('selected array is => ' + JSON.stringify(selectedArray));
    console.log('selected array is => ' + JSON.stringify(slef.selected));
  }

  constructor() {
    super();
    FileReader.readJSON('countries.json').then((data: any) => {
      this.countries = data;
      this.Refresh('countries');
    });


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