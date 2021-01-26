//~~ Dependencies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
/// <reference path="GeometryIndexBuffer.js"/>
/// <reference path="GeometryVertexBuffer.js"/>
//~~ Declarations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

class GeometryGrid
{
    constructor(cols, rows)
    {
        // set grid cell division
        this.cols = Math.max(2.0, cols + 1.0);
        this.rows = Math.max(2.0, rows + 1.0);

        // calculate grid cell size
        const dx = 2.0 / (this.cols - 1.0);
        const dy = 2.0 / (this.rows - 1.0);
        
        let indices = [];
        let vertices = [];

        // iterate through cell grid rows
        for (let y = 0; y < this.rows; y++)
        {    
            // iterate through cell grid rows
            for (let x = 0; x < this.cols; x++)
            {
                vertices.push(-1.0 + (x * dx), -1.0 + (y * dy));

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

        this.ibo = new GeometryIndexBuffer(GL_UNSIGNED_INT, GL_STATIC_DRAW);
        this.ibo.Bind().SetData(indices).Unbind();

        this.vbo = new GeometryVertexBuffer(0, GL_FLOAT_VEC2, GL_STATIC_DRAW);
        this.vbo.Bind().SetData(vertices).Unbind();

        this.size = indices.length;
    };

    Draw()
    {
        this.vbo.Bind();
        glEnableVertexAttribArray(0);
        glVertexAttribPointer(0, 2, GL_FLOAT, false, 0, 0);

        this.ibo.Bind();
        glDrawElements(GL_TRIANGLES, this.size, GL_UNSIGNED_INT, 0);
        this.ibo.Unbind();

        glDisableVertexAttribArray(0);
        this.vbo.Unbind();

        return this;
    };
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//