# nativeScript-filter-select
# NativeScript filter select 

A NativeScript plugin to provide an listview widget to select AND filter items.


## Installation

##### NativeScript 3.x
- `tns plugin add nativescript-filter-select`


*Be sure to run a new build after adding plugins to avoid any issues
## Vanilla NativeScript

 <span style="color:red">IMPORTANT: </span>*Make sure you include `xmlns:FS="nativescript-filter-select"` on the Page element*

### XML
```XML
<Page xmlns:FS="nativescript-filter-select">
   <StackLayout>     
     <FS:FilterSelect 
     items="{{ countries }}"
     hint="Please select some countries" 
     modal_title="Countries" search_param="name" 
     primary_key="code" 
     onSelect="{{ onSelect }}"
     />
   </StackLayout>
</Page>
```


## Sample Screenshots

#### Android and ios

Sample 1 |  Sample 2
-------- | ---------
![Sample1](http://codeobia.com/screenshots/android-filter-select.gif) | ![Sample2](http://codeobia.com/screenshots/ios-filter-select.gif)

## Attributes

| Attribute |                               Description                    |Default 
| ------------- | ------------------------------------------------------- |--------
|   multiple    | to limit the options selected to one if set to false       | boolean : true
| selected_flag   | index of selected boolean flag to mark item as selected     | boolean : optional 
|search_param| index  of the string value in the items object to search on it  |string : name
|item_template|xml template for the listview items | string : `<Label col="0" text="{{ ${this._search_param} }}" textWrap="true" />`
|onSelect| on select function treger when select done | function : optional `onSelect(selectedArray,bindingcontextObject)`
|modal_title|title of the filter modal | String : `Please select items`
|hint|string to show when no items selected |`Please select some items`
|items|array of objects to populate the list of options | Array :[]
|primary_key|unique index of the items object | string : `id`
|selected|array of objects to mark some options as selected and it will be the result when select is done | Array: []

### CSS
```CSS
FilterSelect{
    border-style: solid;
    padding: 3;
    border-width: 1;
    border-color: #ccc;
    border-radius: 5; 
}
.btn-filter-select{
   vertical-align: middle;
   align-content: center;
   margin: 0;
   padding: 1;
}

.filter-select-tag-delete{
    padding: 0;
    margin: 0;
    background-color: white;
    height:20;
    width: 20;
    text-align: center;
    border-color: white;
    color:red;
}

.filter-select-tag label{
   height: 100;
}
.filter-select-tag{

    margin-left: 8;
    border-width: 1;
    border-color: #ccc;
    border-radius: 5;
    padding: 6;


}


.felter-select-list label{
  padding: 20;
}

.felter-select-list{
  margin: 2;
}
.filter-select-hint{
vertical-align: middle;
text-align: center;
margin-top: 8;
}

.item.filter-select-selected{
    border-width: 1;
    border-color: green;
}

```
### CSS core-theme styles if you dont have them just make your own 
```CSS

.action-bar-title{

}

.text-center{

}
.text-left{

}
.text-right{

}

.action-bar{

}

.p-10{

}

.hr-light{

}

.btn{

} 

.btn-primary{
    
}
```

### For contributing 
just do a pull request with description of your changes

## need help with [this issue](https://github.com/moayadnajd/nativescript-filter-select/issues/5)





