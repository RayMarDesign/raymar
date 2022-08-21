import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'raymar-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss'],
})
export class SuggestionsComponent {
  @ViewChild('list')
  list!: MatSelectionList;

  // readonly suggestions: string[] = [
  //   'First',
  //   'Second',
  //   'Third',
  //   'Fourth',
  //   'Fifth'
  // ];

  readonly suggestions: string[] = Array.from({length: 10000}).map((_, i) => `Item #${i}`);

  selection = new SelectionModel<string>(false);

  get selected(): string {
    return this.selection.selected[0];
  }

  onSelectionChange(selection: MatSelectionListChange) {
    this.selection.select(selection.options[0].value);
    console.log(this.selection.selected);
  }

  openSuggestionModal() {
    console.log(`I've been clicked!!!`);
  }
}
