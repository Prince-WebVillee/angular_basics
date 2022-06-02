import { MaterialSliderComponent } from './material-slider/material-slider.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CounterComponent } from './counter/counter.component';
import { LoopComponent } from './loop/loop.component';
import { NestedLoopComponent } from './nested-loop/nested-loop.component';
import { SwitchComponent } from './switch/switch.component';
import { DynamicStylesComponent } from './dynamic-styles/dynamic-styles.component';
import { HeaderComponent } from './header/header.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ToggleElementComponent } from './toggle-element/toggle-element.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    CounterComponent,
    CounterComponent,
    LoopComponent,
    NestedLoopComponent,
    SwitchComponent,
    DynamicStylesComponent,
    HeaderComponent,
    BasicFormComponent,
    ToggleElementComponent,
    MaterialSliderComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
