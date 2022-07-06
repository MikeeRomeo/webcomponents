import { LitElement } from 'lit';
export declare class CollapsibleText extends LitElement {
    static styles: import("lit").CSSResult;
    private _content;
    collapsed: boolean;
    maxHeight: number;
    render(): import("lit-html").TemplateResult<1>;
    private _toggleCollapse;
}
declare global {
    interface HTMLElementTagNameMap {
        'collapsible-text': CollapsibleText;
    }
}
