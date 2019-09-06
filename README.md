# Shatterblock

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve -c=development` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production server

Run `ng serve -c=prod` OR ` ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Angular Material installation process


At first you install angular material [Angular Material] (https://material.angular.io/guide/getting-started/).


 ** Angular Devkit 6+
Using the Angular CLI ng add command will update your Angular project with the correct dependencies, perform configuration changes and execute initialization code.

Run `ng add @angular/material`.


## lib-listing npm installation process


IF you use Linux or Mac open the terminal and Run `sudo npm install angular7-listing@latest` AND If you use Windows open the cmd and Run `npm install angular7-listing@latest` .

## How to implement lib-listing

This is the array => status_gretterthan_zero = result ;  Insert all data 

 


<lib-listing *ngIf="status_gretterthan_zero!=null && status_gretterthan_zero.length>0"      // chacking the condition
             [datasource]="status_gretterthan_zero"                                         // Insert all data into datasource
             [skip]="status_gretterthan_zero_skip"                                          // Skip The Table Header 
             [modify_header_array]="status_gretterthan_zero_modify_header"                  // Modify The Table Header
             [jwttoken]="_apiService.jwttoken"                                              // Insert The JWT Token
             [sourcedata]="tablename"                                                       // Insert The database collection OR view name
             [updateendpoint]="updateurl"                                                   // Insert The Update Data Endpoint
             [statusarr]="statusarray"                                                      // Insert The Status Array
             [custombutton]="custombutton"                                                  // This is use for Custombutton Add 
             [apiurl]="_apiService.domain"                                                  // This is the Main Server Url
             [deleteendpoint]="delurl"                                                      // Insert The Delete Data Endpoint
             [detail_datatype]="status_gretterthan_zero_detail_datatype"                    // Use for Table Detail inside the modal image path and etc
             [detail_skip_array]="status_gretterthan_zero_detail_skip"                      // Use for Table Detail Field Skip

             [editroute]="editroute1"                                                       // use for edit any field Navigate that page And you should be import                                                                                // the app-routing.module.ts   ex:- {path: 'editroute/:id',                                                                                          // component: < "Write the class name"> },
             [url]="custom_link"                                                            // Use for Download the PDF 
             [date_search_source]="date_search_source"                                      // This is a database collection or view name
             [date_search_endpoint]="date_search_endpoint"                                  // Thi is use for date search endpoint
             [search_settings]="search_settings"                                            // Insert All Type Of Search Array
             [click_to_add_ananother_page]="click_to_add_ananother_page"                    // Use for click to another page routing path
             [emailarray]="emailarray"                                                      // Use for ststic email search
             [grab_link]="grab_link"                                                        // Use for grab the link
             [pdf_link]="_apiService.Pdf_link">                                             // Download PDF link
</lib-listing>


