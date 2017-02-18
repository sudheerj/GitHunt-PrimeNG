
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApolloModule } from 'angular2-apollo';
import { EmojifyModule } from 'angular2-emojify';
import {ButtonModule} from 'primeng/components/button/button';
import {DataListModule} from 'primeng/components/datalist/datalist';
import {TabMenuModule} from 'primeng/components/tabmenu/tabmenu';
import {MessagesModule} from 'primeng/components/messages/messages';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { FEED_DECLARATIONS } from './feed';
import { COMMENTS_DECLARATIONS } from './comments';
import { SHARED_DECLARATIONS } from './shared';
import { routes } from './routes';
import { provideClient } from './client';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    NewEntryComponent,
    ...FEED_DECLARATIONS,
    ...COMMENTS_DECLARATIONS,
    ...SHARED_DECLARATIONS
  ],
  entryComponents: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    DataListModule,
    MessagesModule,
    TabMenuModule,
    InputTextModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ApolloModule.withClient(provideClient),
    EmojifyModule,
    InfiniteScrollModule,
    RouterModule.forChild([
            {path:'',component: NavigationComponent}
        ])
  ],
    exports: [
        RouterModule
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
