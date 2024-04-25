import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: 'reverse'
})
export class ReversePipe implements PipeTransform {
	transform(value: any[], options: { makeUpper: boolean }) {
		if (!value) {
			return;
		}

		if (options.makeUpper) {
			value = value.map(item => item.toUpperCase());
		}

		return value.reverse();
	}
}