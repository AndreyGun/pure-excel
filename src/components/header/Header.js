import { ExcelComponent } from '@core/ExcelComponent';

export class Header extends ExcelComponent {
    static className = 'excel__header';
    toHTML() {
        return `
            <input type="text" class="title-input" value="New table">
            <div class="container">
                <button>
                    <span class="material-icons">exit_to_app</span>
                </button>
                <button>
                    <span class="material-icons">delete_outline</span>
                </button>
            </div>
        `;
    }
}
