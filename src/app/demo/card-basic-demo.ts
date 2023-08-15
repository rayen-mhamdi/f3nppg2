import { Component } from '@angular/core';

@Component({
  selector: 'card-basic-demo',
  templateUrl: './card-basic-demo.html',
})
export class CardBasicDemo {
  widgets = [
    {
      id: 1,
      title: 'Widget 1',
      row: 1,
      width: 4,
      offset: 0,
      content: 'this is content 1',
      background: '#a15d74',
    },
    {
      id: 2,
      title: 'Widget 2',
      row: 1,
      width: 4,
      offset: 2,
      content: 'this is content 2',
      background: '#b3ecec',
    },
    {
      id: 3,
      title: 'Widget 3',
      row: 2,
      width: 12,
      offset: 0,
      content: 'this is content 3',
      background: '#f2d658',
    },
  ];
}
