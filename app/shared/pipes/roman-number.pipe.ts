import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'roman',
    pure: true
})
export class RomanNumberPipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {

        // http://stackoverflow.com/a/32851198

        let num = value; // short, long
        if (!+num) {
            return '';
        }
        var digits = String(+num).split(""),
            key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                "","I","II","III","IV","V","VI","VII","VIII","IX"],
            roman = "",
            i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("") + 1).join("M") + roman;

    }

}