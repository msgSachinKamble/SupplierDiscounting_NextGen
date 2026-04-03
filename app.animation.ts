import { trigger, transition, style, animate, query, stagger, state, keyframes } from "@angular/animations";

export let SlideIn = trigger('SlideIn', [
    state('in', style({transform:'translateX(0%)', opacity: '1'})),
    transition('* => in', [
        style({ transform: 'translateX(100%)', opacity: '0' }),
        animate(500)
    ]),
])


export let SlideOut = trigger('SlideOut', [
    state('out', style({ transform: 'translateX(100%)', opacity: '0' })),
    transition('* => out', [
        style({ transform: 'translateX(0%)', opacity: '1', background: '#fbabab' }),
        animate(500)
    ]),
])

export let SlideInOut = trigger('SlideInOut', [
     state('in', style({transform: 'translateX(0)',opacity: '1', background: 'transparent'})),
     state('out', style({transform: 'translateX(100%)', opacity: '0'})),
    transition('* => in', [
        style({ transform: 'translateX(100%)', opacity: '0' }),
        animate(500)
    ]),
    transition('* => out', [
        style({ transform: 'translateX(0%)', opacity: '1', background: '#fbabab' }),
        animate(500)
    ])
])

export let BounceIn = trigger('BounceIn', [
     state('in', style({ opacity: '1', transform: 'scale3d(1, 1, 1)' })),
    transition('* => in', [
        style({ transform: 'scale3d(1, 1, 1)', opacity: '0', background: '#fbabab' }),
        animate('1000ms cubic-bezier(0.215, 0.61, 0.355, 1)', keyframes([
            style({ opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0 }),
            style({  transform: 'scale3d(1.2, 1.2, 1.2)', offset: 0.2 }),
            style({  transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.4}),
            style({ opacity: '1', transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.6 }),
            style({ transform: 'scale3d(0.97, 0.97, 0.97)', offset: 0.8 }),
            style({ opacity: '1', transform: 'scale3d(1, 1, 1)', offset: 1.0})
        ]))
    ])
]) 

export let BackgroundColorChangeToRed = trigger('BackgroundColorChangeToRed',[
    state('SetBackGroundRed', style({ opacity: '1' })),
    transition('* => SetBackGroundRed',[
        style({background:'#fbabab'}),
        animate(2000)
    ])
])

export let FadeIn =  trigger('in', [ 
    transition('* => in', [
      style({ opacity: 0 }), 
      animate(1000, style({opacity: 1}))
    ]) 
  ])

export let FadeOut =  trigger('out', [ 
    transition('* => out', [
      style({ opacity: 1 }), 
      animate(1000, style({opacity: 0}))
    ]) 
  ])

export let ZoomOutAnimation =  trigger('ZoomOutAnimation', [ 
    transition('* => in', [
      style({transform: 'scale3d(1, 1, 1)'}), 
      animate(500, keyframes([
        style({  transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5}),
        style({  transform: 'scale3d(1, 1, 1)', offset: 1.0 }),
    ]))
    ]) 
  ])