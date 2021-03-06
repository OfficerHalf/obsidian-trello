import { App } from 'obsidian';
import { TrelloBoard } from '../interfaces';
import { AbortSuggestModal } from './abort-suggest-modal';

export class BoardSuggestModal extends AbortSuggestModal<TrelloBoard> {
  constructor(app: App) {
    super(app);
    this.setInstructions([{ command: '', purpose: 'Select a Trello board' }]);
  }

  getSuggestions(query: string): TrelloBoard[] {
    const term = query.toLowerCase();
    return this.options.filter((board) => board.name.toLowerCase().includes(term));
  }

  renderSuggestion(value: TrelloBoard, el: HTMLElement): void {
    el.setText(value.name);
  }
}
