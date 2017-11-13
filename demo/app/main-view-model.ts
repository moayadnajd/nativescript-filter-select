import { Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import * as fs from 'file-system';
import frameModule = require("tns-core-modules/ui/frame");
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
public remote_countries :ObservableArray<any> = new ObservableArray([]);
  public get countries(): any[] {
    return this._countries;
  }

  public set countries(value: any[]) {
    this._countries = value;
  }

  public selected = [{ "name": "Afghanistan", "code": "AF" }, { "name": "Albania", "code": "AL" }, { "name": "United Kingdom", "code": "GB" }, { "name": "Tunisia", "code": "TN" }, { "name": "Tanzania, United Republic of", "code": "TZ" }];

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
    console.log('selected array is => ' +JSON.stringify( args.selected));
  }

  constructor() {
    super();
    FileReader.readJSON('countries.json').then((data: any) => {
      this.countries = data;
      this.Refresh('countries');
    });
  }

  init(){
    setTimeout(()=>{
      FileReader.readJSON('countries.json').then((data: any) => {
        data.forEach((item)=>{
          this.remote_countries.push(item);
        });
      });
    },3000)
    
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


  public openpage(args){
    var navigationEntry = {
      moduleName: args.object.pageName,
      context: this,
      animated: true
  };
  
  frameModule.topmost().navigate(navigationEntry);
  }

}