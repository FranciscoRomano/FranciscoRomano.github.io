//~~ Dependencies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~ Declarations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

class JsEventInterval
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
            // create new event interval
            this.handle = window.setInterval(this.method, this.timeout);
        }

        return this;
    };

    Reset()
    {
        // reset event interval
        return this.Unbind().Bind();
    };

    Unbind()
    {
        // check if handle exists
        if (this.handle)
        {
            // destroy event interval
            window.clearInterval(this.handle);
            delete this.handle;
        }

        return this;
    };
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//