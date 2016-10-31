import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular App</h1>
        <h2>{{hero}} details!</h2>
    `
})

export class AppComponent { }

