import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadsComponent } from './downloads.component';
import { DownloaderComponent } from '../components/downloader/downloader.component';

const routes: Routes = [
  {
    path: '',
    component: DownloadsComponent,
    children: [
      { path: 'download', component: DownloaderComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownloadsRoutingModule {}
