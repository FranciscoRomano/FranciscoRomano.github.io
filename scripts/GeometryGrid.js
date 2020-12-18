//~~ Dependencies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
/// <reference path="dom/JsElement.js"/>
//~~ Declarations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

class GeometryGrid
{
    constructor(cols, rows)
    {
        // set grid cell division
        this.cols = Math.max(2.0, cols + 1.0);
        this.rows = Math.max(2.0, rows + 1.0);

        // calculate grid cell size
        const dx = 1.0 / (this.cols - 1.0);
        const dy = 1.0 / (this.rows - 1.0);
        
        let indices = [];
        let vertices = [];

        // iterate through cell grid rows
        for (let y = 0; y < this.rows; y++)
        {    
            // iterate through cell grid rows
            for (let x = 0; x < this.cols; x++)
            {
                vertices.push(-0.5 + (x * dx), -0.5 + (y * dy));

                if (y < (this.rows - 1) && x < (this.cols - 1))
                {
                    const i0 = ((y + 0.0) * this.rows + (x + 0.0));
                    const i1 = ((y + 1.0) * this.rows + (x + 0.0));
                    const i2 = ((y + 1.0) * this.rows + (x + 1.0));
                    const i3 = ((y + 0.0) * this.rows + (x + 1.0));

                    indices.push(i0, i1, i2, i2, i3, i0);
                }
            }
        }
        
        console.log(indices, vertices);

        this.ibo = new GLBuffer(GL_ELEMENT_ARRAY_BUFFER, GL_UNSIGNED_INT);
        this.ibo.Bind().SetData(indices, GL_STATIC_DRAW).Unbind();

        this.vbo = new GLBuffer(GL_ARRAY_BUFFER, GL_FLOAT);
        this.vbo.Bind().SetData(vertices, GL_STATIC_DRAW).Unbind();

        this.size = indices.length;
    };

    Draw()
    {
        this.vbo.Bind();
        glEnableVertexAttribArray(0);
        glVertexAttribPointer(0, 2, GL_FLOAT, false, 0, 0);
        this.ibo.Bind();
        this.ibo.Draw(GL_TRIANGLES, this.size, 0);
        this.ibo.Unbind();
        glDisableVertexAttribArray(0);
        this.vbo.Unbind();

        return this;
    };
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//