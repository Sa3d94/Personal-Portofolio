import { animate, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { bounceInDown, rubberBand, slideInLeft, slideInRight, tada, wobble } from 'ng-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations : [
    trigger('bounceInDown1', [transition('* => *', useAnimation(bounceInDown ,{
      params: { timing: 4, delay: 0.2 }
    })) , transition('* => *', animate('300ms ease-in'))]),
    trigger('bounceInDown2', [transition('* => *', useAnimation(bounceInDown ,{
      params: { timing: 4, delay: 0.4 }
    })) , transition('* => *', animate('300ms ease-in'))]),
    trigger('bounceInDown3', [transition('* => *', useAnimation(bounceInDown ,{
      params: { timing: 4, delay: 0.6 }
    })) , transition('* => *', animate('300ms ease-in'))]),

    trigger('slideInLeft', [transition('* => *', useAnimation(slideInLeft,{
      params: { timing: 1, delay: 0.5  }
    })), transition('* => *', animate('300ms ease-in'))]),
    trigger('slideInRight', [transition('* => *', useAnimation(slideInRight,
    {      params: { timing: 1, delay: 0.5  }}))]),
    trigger('tada', [transition('* => *', useAnimation(tada,{
      params: { timing: 0.9, delay: 0.2  }
    }
    ) ), transition('* => *', animate('300ms ease-in'))]),
    trigger('rubberBand', [transition('* => *', useAnimation(rubberBand,{
      params: { timing: 0.9, delay: 0.2 }
    }
    ))]),
    trigger('wobble', [transition('* => *', useAnimation(wobble,{
      params: { timing: 0.9, delay: 0.2 }
    }
    ))]),
    
  ]
})
export class HomeComponent implements OnInit {
  title = 'Home';
  isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
