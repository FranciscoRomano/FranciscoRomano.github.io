//~~ Dependencies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
/// <reference path="dom/JsElement.js"/>
//~~ Declarations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

class JsCanvas extends JsElement
{
    constructor(width, height)
    {
        // create canvas element
        super(JsElement.XHTML("canvas"));
        this.SetAttribute("width", width);
        this.SetAttribute("height", height);
        this.Style.backgroundColor = "#2244cc"
    };

    get Width()
    {
        return this.GetAttribute("width");
    };
    
    set Width(value)
    {
        this.SetAttribute("width", value);
    };

    get Height()
    {
        return this.GetAttribute("height");
    };
    
    set Height(value)
    {
        this.SetAttribute("height", value);
    };
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//