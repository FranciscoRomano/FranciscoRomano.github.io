//~~ Dependencies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~ Declarations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

class JsElement
{
    constructor(target)
    {
        // create element
        /** @type { String } */
        this.uuid = JsElement.GenerateUUID();
        /** @type { JsElement } */
        this.js_parent = null;
        /** @type { HTMLElement } */
        this.dom_element = target;
        /** @type { HTMLElement[] } */
        this.dom_children = [];
    };

    AppendChild(element)
    {
        // check if parent exists
        if (element.js_parent == null)
        {
            // set element's parent
            element.js_parent = this;
            
            // append element to target
            this.dom_children.push(element);
            this.dom_element.appendChild(element.dom_element);

            return true;
        }
        
        return false;
    };

    RemoveChild(element)
    {
        // check if parent exists
        if (element.js_parent == this)
        {
            // clear element's parent
            elem.js_parent = null;

            // remove element from target
            this.dom_element.removeChild(element.dom_element);
            this.dom_children.splice(this.dom_children.indexOf(element), 1);

            return true;
        }

        return false;
    };

    GetAttribute(name)
    {
        // get element's attribute value
        return this.dom_element.getAttribute(name);
    };

    SetAttribute(name, value)
    {
        // set element's attribute value
        return this.dom_element.setAttribute(name, value);
    };

    get Uri()
    {
        // get element's namepace uri
        return this.dom_element.namespaceURI;
    };

    get Rect()
    {
        // get element's client rect
        return this.dom_element.getBoundingClientRect();
    };

    get Style()
    {
        // get element's style
        return this.dom_element.style;
    };

    get Class()
    {
        // get element's class list
        return this.dom_element.classList;
    };

    get Parent()
    {
        return this.js_parent || new JsElement(this.dom_element.parentElement);
    }

    get Element()
    {
        return this.dom_element;
    };

    static SVG(tag)
    {
        return document.createElementNS("http://www.w3.org/2000/svg", tag);
    };
    
    static XHTML(tag)
    {
        return document.createElementNS("http://www.w3.org/1999/xhtml", tag);
    };

    static Query(selectors)
    {
        return document.querySelector(selectors);
    };

    static GenerateUUID()
    {
        // https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    };
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//