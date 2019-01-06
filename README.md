# test-angular-spy-lifecycle-hooks

:ledger: Test app to display all lifecycle hooks in Angular component

## Demo 🎉

<https://piecioshka.github.io/test-angular-spy-lifecycle-hooks/>

## Features

* :white_check_mark: Display lifecycle hooks on any component

## Step by step 👣

<details>

* `ng generate directive SpyLifecycleHooks`
* Create in directive class methods:
    + `ngOnInit`
    + `ngOnChanges`
    + `ngDoCheck`
    + `ngAfterContentInit`
    + `ngAfterContentChecked`
    + `ngAfterViewInit`
    + `ngAfterViewChecked`
    + `ngOnDestroy`
* Attach directive `appSpyLifecycleHooks` in any tag, ex.
    ```html
    <p appSpyLifecycleHooks></p>
    ```

</details>
