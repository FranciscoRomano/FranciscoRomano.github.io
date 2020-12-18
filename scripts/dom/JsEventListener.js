//~~ Dependencies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// https://www.w3schools.com/jsref/obj_dragevent.asp
//https://www.w3schools.com/jsref/obj_mouseevent.asp
//~~ Declarations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

class JsEventListener
{
    constructor(element, type, method, ...args)
    {
        // create event
        this.args = args;
        this.type = type;
        this.target = element.dom_element || element;
        this.method = method;
    };

    Bind()
    {
        // check if handle exists
        if (!this.handle)
        {
            // create new event listener
            this.target.addEventListener(this.type, this.method, ...this.args);
            this.handle = true;
        }

        return this;
    };

    Reset()
    {
        // reset event listener
        return this.Unbind().Bind();
    };

    Unbind()
    {
        // check if handle exists
        if (this.handle)
        {
            // remove event listener
            this.target.removeEventListener(this.type, this.method, ...this.args);
            delete this.handle;
        }
        
        return this;
    };
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//