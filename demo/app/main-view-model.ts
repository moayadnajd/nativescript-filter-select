import {Observable} from 'data/observable';
import {FilterSelect} from 'nativescript-filter-select';

export class HelloWorldModel extends Observable {
  public message: string;
  private filterSelect: FilterSelect;

  constructor() {
    super();

    this.filterSelect = new FilterSelect();
    this.message = this.filterSelect.message;
  }
}