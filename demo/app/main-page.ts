import * as observable from 'data/observable';
import * as pages from 'ui/page';
import {HelloWorldModel} from './main-view-model';

export function pageLoaded(args: observable.EventData) {
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
    page.bindingContext.init(); 
    page.bindingContext.page=page;
}

