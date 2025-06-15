import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

export interface Device {
  image: string,
  cols: number,
  rows: number,
  name: string
}


@Component({
  selector: 'app-devices-selection',
  imports: [ MatGridListModule ],
  templateUrl: './devices_selection.component.html',
  styleUrl: './devices_selection.component.scss'
})


export class DevicesSelectionComponent {
  devices: Device[] = [
    {name: 'אנדימד', cols: 2,rows: 1 ,  image: 'https://picsum.photos/id/238/400/300'},
    {name: 'אנ   דימד', cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300'},
    {name: 'אנ   דימד', cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300'},

    {name: 'אנדימד', cols: 2,rows: 1 ,  image: 'https://picsum.photos/id/238/400/300'},
    {name: 'אנ   דימד', cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300'},
    {name: 'אנ   דימד', cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300'},

    {name: 'אנדימד', cols: 2,rows: 1 ,  image: 'https://picsum.photos/id/238/400/300'},
    {name: 'אנ   דימד', cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300'},
    {name: 'אנ   דימד', cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300'},

    {name: 'אנדימד', cols: 2,rows: 1 ,  image: 'https://picsum.photos/id/238/400/300'},
    {name: 'אנ   דימד', cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300'},
    {name: 'אנ   דימד', cols: 2 ,rows: 1 ,image:'https://picsum.photos/id/238/400/300'},
    
  ]
}
