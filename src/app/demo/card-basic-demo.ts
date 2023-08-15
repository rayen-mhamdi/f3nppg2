import { Component } from '@angular/core';

@Component({
  selector: 'card-basic-demo',
  templateUrl: './card-basic-demo.html',
})
export class CardBasicDemo {
  
  widgets_rows1 = [
    {
      row_id : "1",
      width : 12,
      cols : [
        {
          id: 1,
          title: 'Widget 1',
          width: 4,
          height : 40,
          offset: 0,
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu maximus justo. Donec accumsan luctus urna, a gravida sapien commodo et. Sed eget dapibus justo. Suspendisse vitae velit dolor. Cras aliquet velit in ex volutpat pretium. Integer tempus scelerisque enim eu aliquet. Sed egestas sit amet lectus at scelerisque. Phasellus nec orci eu mi lacinia hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sodales quam ut metus laoreet vestibulum. Etiam feugiat dui eu lorem interdum porttitor. Mauris est augue, hendrerit eu elit id, iaculis eleifend ex. Donec risus ipsum, vulputate ut consequat suscipit, rhoncus ut arcu. Vivamus eu vehicula neque.

          Morbi cursus dui metus, at sollicitudin erat egestas ut. Nulla finibus, dui vel mollis aliquam, nisi massa iaculis elit, et bibendum justo nulla vel est. Maecenas convallis augue vel lectus elementum eleifend. Nam id bibendum magna. Sed porta, diam ut euismod dignissim, ex tellus condimentum sapien, in tristique ligula tortor a dolor. Donec vel ante id turpis aliquet imperdiet eu quis lectus. Nullam felis sem, hendrerit vel ligula et, viverra dapibus elit. Nullam suscipit finibus risus, ut eleifend eros tristique vitae. Nunc vulputate tempus mattis. Aliquam quis sem scelerisque, sodales leo quis, gravida lorem. Aenean eu tellus sit amet odio luctus dignissim eu quis neque. Vivamus interdum id dolor a venenatis. Proin eget malesuada neque, iaculis dictum ipsum.
          
          Nam consectetur a sem placerat pharetra. In commodo mattis augue at accumsan. Nullam id eros vel est ullamcorper hendrerit. Vivamus id sapien nulla. Sed non euismod nisi. Ut id efficitur eros, vel euismod nisl. Quisque posuere bibendum tellus quis finibus.
          
          Aenean leo sem, sodales quis fringilla semper, maximus at leo. Donec tortor nisi, ultricies sed maximus ut, aliquet id lacus. Mauris feugiat porta neque ut auctor. Aliquam sed odio eget turpis commodo vehicula non eget ante. Pellentesque suscipit viverra orci. Aliquam erat volutpat. Curabitur nec varius enim. Nunc id elit nibh. Mauris dapibus finibus mi eget posuere. Duis quis ligula vitae eros pretium viverra. Morbi maximus mauris arcu, at vulputate sem porttitor vitae. Ut dolor mauris, feugiat eget ex in, venenatis hendrerit eros. Maecenas consequat, felis sed finibus accumsan, odio elit suscipit sem, quis pretium massa diam eget ipsum. In molestie accumsan odio non pharetra.`,
          background: '#a15d74',
        },
        {
          id: 2,
          title: 'Widget 2',
          width: 4,
          height : 40,
          offset: 4,
          content: "this is content 2",
          background: '#b3ecec',
        }
      ]
    },
    {
      row_id : "2",
      width : 12,
      cols : [
        {
          id: 3,
          title: 'Widget 3',
          width: 12,
          height : 40,
          offset: "",
          content: 'this is content 3',
          background: '#f2d658',
        }
      ]
    },
  ]




  widgets_rows2 = [
    {
      row_id : "1",
      width : 8,
      cols : [
        {
          id: 1,
          title: 'Widget 1',
          width: 4,
          height : 30,
          offset: 0,
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu maximus justo. Donec accumsan luctus urna, a gravida sapien commodo et. Sed eget dapibus justo. Suspendisse vitae velit dolor. Cras aliquet velit in ex volutpat pretium. Integer tempus scelerisque enim eu aliquet. Sed egestas sit amet lectus at scelerisque. Phasellus nec orci eu mi lacinia hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sodales quam ut metus laoreet vestibulum. Etiam feugiat dui eu lorem interdum porttitor. Mauris est augue, hendrerit eu elit id, iaculis eleifend ex. Donec risus ipsum, vulputate ut consequat suscipit, rhoncus ut arcu. Vivamus eu vehicula neque.

          Morbi cursus dui metus, at sollicitudin erat egestas ut. Nulla finibus, dui vel mollis aliquam, nisi massa iaculis elit, et bibendum justo nulla vel est. Maecenas convallis augue vel lectus elementum eleifend. Nam id bibendum magna. Sed porta, diam ut euismod dignissim, ex tellus condimentum sapien, in tristique ligula tortor a dolor. Donec vel ante id turpis aliquet imperdiet eu quis lectus. Nullam felis sem, hendrerit vel ligula et, viverra dapibus elit. Nullam suscipit finibus risus, ut eleifend eros tristique vitae. Nunc vulputate tempus mattis. Aliquam quis sem scelerisque, sodales leo quis, gravida lorem. Aenean eu tellus sit amet odio luctus dignissim eu quis neque. Vivamus interdum id dolor a venenatis. Proin eget malesuada neque, iaculis dictum ipsum.
          
          Nam consectetur a sem placerat pharetra. In commodo mattis augue at accumsan. Nullam id eros vel est ullamcorper hendrerit. Vivamus id sapien nulla. Sed non euismod nisi. Ut id efficitur eros, vel euismod nisl. Quisque posuere bibendum tellus quis finibus.
          
          Aenean leo sem, sodales quis fringilla semper, maximus at leo. Donec tortor nisi, ultricies sed maximus ut, aliquet id lacus. Mauris feugiat porta neque ut auctor. Aliquam sed odio eget turpis commodo vehicula non eget ante. Pellentesque suscipit viverra orci. Aliquam erat volutpat. Curabitur nec varius enim. Nunc id elit nibh. Mauris dapibus finibus mi eget posuere. Duis quis ligula vitae eros pretium viverra. Morbi maximus mauris arcu, at vulputate sem porttitor vitae. Ut dolor mauris, feugiat eget ex in, venenatis hendrerit eros. Maecenas consequat, felis sed finibus accumsan, odio elit suscipit sem, quis pretium massa diam eget ipsum. In molestie accumsan odio non pharetra.`,
          background: '#aeadce',
        },
        {
          id: 2,
          title: 'Widget 2',
          width: 4,
          height : 20,
          offset: 4,
          content: 'this is content 2',
          background: '#ff8f6a',
        },
         {
          id: 3,
          title: 'Widget 3',
          width: 6,
          height : 20,
          offset: 0,
          content: 'this is content 3',
          background: '#468499',
        },
        {
          id: 4,
          title: 'Widget 4',
          width: 6,
          height : 50,
          offset: 0,
          content: 'this is content 4',
          background: '#8a9b0f',
        }
      ]
    },
    {
      row_id : "2",
      width: 4,
      cols : [
        {
          id: 5,
          title: 'Widget 5',
          width: 12,
          height : 80,
          offset: 0,
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu maximus justo. Donec accumsan luctus urna, a gravida sapien commodo et. Sed eget dapibus justo. Suspendisse vitae velit dolor. Cras aliquet velit in ex volutpat pretium. Integer tempus scelerisque enim eu aliquet. Sed egestas sit amet lectus at scelerisque. Phasellus nec orci eu mi lacinia hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sodales quam ut metus laoreet vestibulum. Etiam feugiat dui eu lorem interdum porttitor. Mauris est augue, hendrerit eu elit id, iaculis eleifend ex. Donec risus ipsum, vulputate ut consequat suscipit, rhoncus ut arcu. Vivamus eu vehicula neque.

          Morbi cursus dui metus, at sollicitudin erat egestas ut. Nulla finibus, dui vel mollis aliquam, nisi massa iaculis elit, et bibendum justo nulla vel est. Maecenas convallis augue vel lectus elementum eleifend. Nam id bibendum magna. Sed porta, diam ut euismod dignissim, ex tellus condimentum sapien, in tristique ligula tortor a dolor. Donec vel ante id turpis aliquet imperdiet eu quis lectus. Nullam felis sem, hendrerit vel ligula et, viverra dapibus elit. Nullam suscipit finibus risus, ut eleifend eros tristique vitae. Nunc vulputate tempus mattis. Aliquam quis sem scelerisque, sodales leo quis, gravida lorem. Aenean eu tellus sit amet odio luctus dignissim eu quis neque. Vivamus interdum id dolor a venenatis. Proin eget malesuada neque, iaculis dictum ipsum.
          
          Nam consectetur a sem placerat pharetra. In commodo mattis augue at accumsan. Nullam id eros vel est ullamcorper hendrerit. Vivamus id sapien nulla. Sed non euismod nisi. Ut id efficitur eros, vel euismod nisl. Quisque posuere bibendum tellus quis finibus.
          
          Aenean leo sem, sodales quis fringilla semper, maximus at leo. Donec tortor nisi, ultricies sed maximus ut, aliquet id lacus. Mauris feugiat porta neque ut auctor. Aliquam sed odio eget turpis commodo vehicula non eget ante. Pellentesque suscipit viverra orci. Aliquam erat volutpat. Curabitur nec varius enim. Nunc id elit nibh. Mauris dapibus finibus mi eget posuere. Duis quis ligula vitae eros pretium viverra. Morbi maximus mauris arcu, at vulputate sem porttitor vitae. Ut dolor mauris, feugiat eget ex in, venenatis hendrerit eros. Maecenas consequat, felis sed finibus accumsan, odio elit suscipit sem, quis pretium massa diam eget ipsum. In molestie accumsan odio non pharetra.`,
          background: '#f2d658',
        }
      ]
    },
  ]



}
