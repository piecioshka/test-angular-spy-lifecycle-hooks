import { Directive } from '@angular/core';

@Directive({
    selector: '[appSpyLifecycleHooks]'
})
export class SpyLifecycleHooksDirective {

    ngOnInit() {
        console.log('[spy] ngOnInit');
    }
    ngOnChanges() {
        console.log('[spy] ngOnChanges');
    }
    ngDoCheck() {
        console.log('[spy] ngDoCheck');
    }
    ngAfterContentInit() {
        console.log('[spy] ngAfterContentInit');
    }
    ngAfterContentChecked() {
        console.log('[spy] ngAfterContentChecked');
    }
    ngAfterViewInit() {
        console.log('[spy] ngAfterViewInit');
    }
    ngAfterViewChecked() {
        console.log('[spy] ngAfterViewChecked');
    }
    ngOnDestroy() {
        console.log('[spy] ngOnDestroy');
    }

}
