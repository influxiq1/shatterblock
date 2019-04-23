import { Component , OnInit} from '@angular/core';
declare const FB: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'shatterblock';
    ngOnInit() {
        FB.init({
            //    appId      : '906815096194208',
            appId      : '424821121628559',
            cookie     : false,
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5' // use graph api version 2.5
        });
    }
}
