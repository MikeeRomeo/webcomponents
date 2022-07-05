const template = document.createElement('template');

template.innerHTML = `
    <style>
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
            cursor: pointer;
            border: var(--ct-border-size) var(--ct-border-style) var(--ct-border-color);
            background: var(--ct-bg);
            padding: var(--ct-padding);
            border-radius: var(--ct-radius);
        }
        
        .collapsible-heading{
            display: flex;
            align-items: center;
            transition: all 0.2s cubic-bezier(.25,.8,.25,1);
        }
        
        .collapsible-heading.icon-left{
            flex: row reverse;
        }
        
        .collapsible-content{
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
        }
        
        .collapsible-icon{
            margin-left: auto;
            max-width: var(--ct-icon-size);
            transition: transform 0.2s cubic-bezier(.25,.8,.25,1);
        }
        
        .collapsible-item.active .collapsible-icon{
            transform: rotate(180deg);
        } 
    </style>

    <li class="collapsible-item">
        <div class="collapsible-heading">
            <slot name="heading"></slot>
            <span class="collapsible-icon">
                <slot name="icon"></slot>
            </span>
        </div>
        <div class="collapsible-content">
            <slot name="content"></slot>
        </div>
    </li>
`;

class collapsibleText extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    toggleCollapse(){
        const item = this.shadowRoot.querySelector('.collapsible-item');
        const content = this.shadowRoot.querySelector('.collapsible-content');

        item.classList.toggle('active');

        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    }

    // Lifecycle hook voor wanneer de component is geladen
    connectedCallback(){
        this.shadowRoot.querySelector('.collapsible-item').addEventListener('click', () => {
            this.toggleCollapse();
        });

        if(this.getAttribute('icon_side') === 'left'){
            this.shadowRoot.querySelector('.collapsible-item').classList.add('icon-left');
        }
    }
}



window.customElements.define('collapsible-text', collapsibleText);