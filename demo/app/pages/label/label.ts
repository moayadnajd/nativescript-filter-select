import * as observable from 'data/observable';
import * as pages from 'ui/page';
import {LabelModel} from './label-view-model';


export function pageLoaded(args: observable.EventData) {
    let page = <pages.Page>args.object;
    page.bindingContext = new LabelModel();
}

