import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadsRoutingModule } from './downloads-routing.module';
import { DownloadsComponent } from './downloads.component';
import { DownloaderComponent } from '../components/downloader/downloader.component';


@NgModule({
  declarations: [
    DownloadsComponent,
    DownloaderComponent,
  ],
  imports: [
    CommonModule,
    DownloadsRoutingModule
  ]
})
export class DownloadsModule { }
