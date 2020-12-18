//~~ Dependencies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~ Declarations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

class JsEventTimeout
{
    constructor(method, timeout)
    {
        // create event
        this.method = method;
        this.timeout = timeout;
    };

    Bind()
    {
        // check if handle exists
        if (!this.handle)
        {
            // create new event timeout
            this.handle = window.setTimeout(this.method, this.timeout);
        }
        
        return this;
    };

    Reset()
    {
        // reset event timeout
        return this.Unbind().Bind();
    };

    Unbind()
    {
        // check if handle exists
        if (this.handle)
        {
            // destroy event timeout
            window.clearTimeout(this.handle);
            delete this.handle;
        }

        return this;
    };
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//