import { html, css, LitElement } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'

@customElement('collapsible-text')
export class CollapsibleText extends LitElement {
  static styles = css`
    :host{
        --ct-radius: 5px;
        --ct-border-size: 1px;
        --ct-border-style: solid;
        --ct-border-color: #D6D6D6;
        --ct-padding: 10px;
        --ct-icon-size: 20px;
        --ct-bg-color: #fff;
    }
    
    .collapsible-item{
        list-style: none;
        border: var(--ct-border-size) var(--ct-border-style) var(--ct-border-color);
        background: var(--ct-bg);
        padding: var(--ct-padding);
        border-radius: var(--ct-radius);
    }
    
    .collapsible-heading{
        display: flex;
        align-items: center;
        transition: all 0.2s cubic-bezier(.25,.8,.25,1);
        position: relative;
        cursor: pointer;
    }
    
    .collapsible-heading.icon-left{
        flex: row reverse;
    }
    
    .collapsible-content{
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out;
    }
    
    .collapsible-button{
      margin-left: auto;
      max-width: var(--ct-icon-size);
      appearance: none;
    }
    .collapsible-button:before{
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
    }
    .collapsible-icon{
      width: 100%;
      display: inline-block;
      transition: transform 0.2s cubic-bezier(.25,.8,.25,1);
    }
    .collapsible-icon.active{
      transform: rotate(180deg);
    } 
  `

  @query('.collapsible-content')
  private _content!: HTMLDivElement;

  @property({ type: Boolean })
  collapsed = false;

  @property({ type: Number })
  maxHeight = 0;

  render() {
    return html`
      <li class="collapsible-item ${this.collapsed ? 'active': ''}" part="list-item">
        <div class="collapsible-heading">
            <slot name="heading"></slot>
            <button type="button" class="collapsible-button" @click=${this._toggleCollapse} part="button">
              <span class="collapsible-icon ${this.collapsed ? 'active': ''}">
                <slot name="icon"></slot>
              </span>  
            </button>
        </div>
        <div class="collapsible-content" part="contents" style="max-height:${this.maxHeight}px">
            <slot name="content"></slot>
        </div>
    </li>
    `
  }

  private _toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.maxHeight = this.collapsed === true ? this._content.scrollHeight : 0;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'collapsible-text': CollapsibleText
  }
}
