import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {XngModule} from "@dalencar/angular-extjs-modern";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        XngModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
