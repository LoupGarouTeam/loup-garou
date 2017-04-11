import { Component, Input } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: `./list.html`,

})

export class list {
  @Input() personn:Object;
};
