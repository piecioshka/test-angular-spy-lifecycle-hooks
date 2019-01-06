import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpyLifecycleHooksDirective } from './spy-lifecycle-hooks.directive';

@NgModule({
  declarations: [
    AppComponent,
    SpyLifecycleHooksDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
