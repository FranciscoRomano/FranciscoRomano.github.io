//~~ Dependencies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
/// <reference path="JsEventInterval.js"/>
/// <reference path="JsEventListener.js"/>
/// <reference path="JsEventTimeout.js"/>
//~~ Declarations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

class JsEventGroup extends Array
{
    Bind()
    {
        // bind all event types
        this.forEach(e => e.Bind());

        return this;
    };

    Reset()
    {
        // reset all event types
        return this.Unbind().Bind();
    };

    Unbind()
    {
        // unbind all event types
        this.forEach(e => e.Unbind());

        return this;
    };

    Timeout(method, timeout)
    {
        // create new event timeout
        let obj = new JsEventTimeout(method, timeout);

        // push event to list
        this.push(obj);

        return obj;
    };

    Interval(method, timeout)
    {
        // create new event interval
        let obj = new JsEventInterval(method, timeout);

        // push event to list
        this.push(obj);

        return obj;
    };

    Listener(element, type, method, ...args)
    {
        // create new event listener
        let obj = new JsEventListener(element, type, method, ...args);

        // push event to list
        this.push(obj);

        return obj;
    };

    EventGroup()
    {
        // create new event group handle
        let obj = new JsEventGroup();

        // push event to list
        this.push(obj);

        return obj;
    };
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//