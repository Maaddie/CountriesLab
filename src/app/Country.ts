//This a model done with typescript 

import { HostBinding } from "@angular/core";

//This is the same idea as a C# model 
export class Country {
    name: string;
    lang: string;
    flagURL: string;
    president: string;
    
    textColor:string;
    colors:string[];


    constructor(name: string, lang: string, flagURL: string, president: string, colors:string[]) {
        this.name = name;
        this.lang = lang;
        this.flagURL = flagURL;
        this.president = president;
        this.colors = colors;
        this.textColor = colors[0];

    }

    // colors = [];
}