class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d', {willReadFrequently: true});
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let framebuffer = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(framebuffer);
                break;
            case 1:
                this.drawSlide1(framebuffer);
                break;
            case 2:
                this.drawSlide2(framebuffer);
                break;
            case 3:
                this.drawSlide3(framebuffer);
                break;
        }

        this.ctx.putImageData(framebuffer, 0, 0);
    }

    // framebuffer:  canvas ctx image data
    drawSlide0(framebuffer) {
        // TODO: draw at least 2 Bezier curves
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        
        // Following line is example of drawing a single line
        // (this should be removed after you implement the curve)
        //this.drawLine({x: 100, y: 100}, {x: 600, y: 300}, [255, 0, 0, 255], framebuffer);
        this.drawBezierCurve({x: 150, y: 500}, {x: 200, y: 100}, {x: 400, y:500}, {x: 520, y: 200}, this.num_curve_sections, [255, 0, 0, 255], framebuffer);
        this.drawBezierCurve({x: 200, y: 500}, {x: 270, y: 150}, {x: 400, y:550}, {x: 570, y: 200}, this.num_curve_sections, [255, 165, 0, 255], framebuffer);
        this.drawBezierCurve({x: 240, y: 500}, {x: 290, y: 180}, {x: 420, y:560}, {x: 590, y: 200}, this.num_curve_sections, [255, 0, 0, 255], framebuffer);

        
    }


    // framebuffer:  canvas ctx image data
    drawSlide1(framebuffer) {
        // TODO: draw at least 2 circles
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        this.drawCircle({x: 200 , y: 160}, 75, this.num_curve_sections, [0, 0, 255, 255], framebuffer);
        this.drawCircle({x: 410 , y: 160}, 75, this.num_curve_sections, [0, 0, 255, 255], framebuffer);
        this.drawCircle({x: 620 , y: 160}, 75, this.num_curve_sections, [0, 0, 255, 255], framebuffer);
        this.drawCircle({x: 200 , y: 160}, 50, this.num_curve_sections, [0, 0, 255, 255], framebuffer);
        this.drawCircle({x: 410 , y: 160}, 50, this.num_curve_sections, [0, 0, 255, 255], framebuffer);
        this.drawCircle({x: 620 , y: 160}, 50, this.num_curve_sections, [0, 0, 255, 255], framebuffer);

        this.drawCircle({x: 305 , y: 330}, 75, this.num_curve_sections, [0, 255, 0, 255], framebuffer);
        this.drawCircle({x: 520 , y: 330}, 75, this.num_curve_sections, [0, 255, 0, 255], framebuffer);
        this.drawCircle({x: 305 , y: 330}, 50, this.num_curve_sections, [0, 255, 0, 255], framebuffer);
        this.drawCircle({x: 520 , y: 330}, 50, this.num_curve_sections, [0, 255, 0, 255], framebuffer);
        
        this.drawCircle({x: 410 , y: 500}, 75, this.num_curve_sections, [255, 0, 0, 255], framebuffer);
        this.drawCircle({x: 410 , y: 500}, 50, this.num_curve_sections, [255, 0, 0, 255], framebuffer);
    
    
    }

    // framebuffer:  canvas ctx image data
    drawSlide2(framebuffer) {
        // TODO: draw at least 2 convex polygons (each with a different number of vertices >= 5)
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        this.drawConvexPolygon([{x: 500, y: 80}, {x: 530, y: 100}, {x: 520, y: 165}, {x: 495, y: 180}, {x: 480, y: 110}], [255, 0, 0, 255], framebuffer);
        this.drawConvexPolygon([{x: 150, y: 75}, {x: 240, y: 65}, {x: 320, y: 125}, {x: 255, y: 210}, {x: 165, y: 250}, {x: 95, y: 220}, {x: 70, y: 135}], [128, 0, 200, 255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide3(framebuffer) {
        // TODO: draw your name!
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        //The name is 'Andrew Yang'
        let point_A= [{x: 60, y: 300}, {x: 140, y: 300}, {x: 200, y: 400}, {x: 150, y: 450}, {x: 150, y: 450}, {x: 110, y: 440}, {x: 170, y: 350}, {x: 200, y: 300}, {x: 143, y: 340}, {x: 175, y: 340}];
        let point_n= [{x: 235, y: 300}, {x: 230, y: 350}, {x: 232, y: 330}, {x: 240, y: 350}, {x: 270, y: 370}, {x: 265, y: 300}];
        let point_d= [{x: 330, y: 400}, {x: 330, y: 300}, {x: 330, y: 350}, {x: 290, y: 340}, {x: 285, y: 280}, {x: 340, y: 310}];
        let point_r= [{x: 370, y: 350}, {x: 370, y: 300}, {x: 370, y: 330}, {x: 375, y: 360}, {x: 385, y: 360}, {x: 390, y: 350}];
        let point_e= [{x: 420, y: 320}, {x: 480, y: 330}, {x: 480, y: 340}, {x: 460, y: 350}, {x: 460, y: 350}, {x: 400, y: 355}, {x: 390, y: 320}, {x: 460, y: 300}]
        let point_w= [{x: 500, y: 350}, {x: 510, y: 280}, {x: 530, y: 280}, {x: 550, y: 350}, {x: 550, y: 350}, {x: 560, y: 280}, {x: 580, y: 280}, {x: 600, y: 350}];
        let point_Y= [{x: 265, y: 250}, {x: 255, y: 200}, {x: 305, y: 200}, {x: 330, y: 250}, {x: 330, y: 250}, {x: 290, y: 250}, {x: 270, y: 150}, {x: 270, y: 110}, {x: 270, y: 110}, {x: 280, y: 110}, {x: 320, y: 120}, {x: 350, y: 160}];
        let point_aa= [{x: 350, y: 160}, {x: 310, y: 110}, {x: 370, y: 120}, {x: 380, y: 160}, {x: 380, y: 160}, {x: 390, y: 130}, {x: 400, y: 120}, {x: 400, y: 150}];
        let point_nn= [{x: 400, y: 150}, {x: 405, y: 180}, {x: 440, y: 190}, {x: 435, y: 150}];
        let point_g= [{x: 480, y: 180}, {x: 435, y: 170}, {x: 435, y: 110}, {x: 490, y: 160}, {x: 490, y: 160}, {x: 475, y: 100}, {x: 435, y: 90}, {x: 430, y: 100}, {x: 430, y: 100}, {x: 455, y: 120}, {x: 465, y: 110}, {x: 600, y: 160}];
        //'A'
        this.drawBezierCurve(point_A[0], point_A[1], point_A[2], point_A[3], this.num_curve_sections, [0, 0, 0, 255], framebuffer);
        this.drawBezierCurve(point_A[4], point_A[5], point_A[6], point_A[7], this.num_curve_sections, [0, 0, 0, 255], framebuffer);
        this.drawLine(point_A[8], point_A[9], [0, 0, 0, 255], framebuffer);
        //'n'
        this.drawLine(point_n[0], point_n[1], [0, 0, 0, 255], framebuffer);
        this.drawBezierCurve(point_n[2], point_n[3], point_n[4], point_n[5], this.num_curve_sections, [0, 0, 0, 255], framebuffer);
        //'d'
        this.drawLine(point_d[0], point_d[1], [0, 0, 0, 255], framebuffer);
        this.drawBezierCurve(point_d[2], point_d[3], point_d[4], point_d[5], this.num_curve_sections, [0, 0, 0, 255], framebuffer);
        //'r'
        this.drawLine(point_r[0], point_r[1], [0, 0, 0, 255], framebuffer);
        this.drawBezierCurve(point_r[2], point_r[3], point_r[4], point_r[5], this.num_curve_sections, [0, 0, 0, 255], framebuffer);
        //'e'
        this.drawBezierCurve(point_e[0], point_e[1], point_e[2], point_e[3], this.num_curve_sections, [0, 0, 0, 255], framebuffer);
        this.drawBezierCurve(point_e[4], point_e[5], point_e[6], point_e[7], this.num_curve_sections, [0, 0, 0, 255], framebuffer);
        //'w'
        this.drawBezierCurve(point_w[0], point_w[1], point_w[2], point_w[3], this.num_curve_sections, [0, 0, 0, 255], framebuffer);
        this.drawBezierCurve(point_w[4], point_w[5], point_w[6], point_w[7], this.num_curve_sections, [0, 0, 0, 255], framebuffer);

        //'Y'
        this.drawBezierCurve(point_Y[0], point_Y[1], point_Y[2], point_Y[3], this.num_curve_sections, [0, 0, 0, 255], framebuffer);
        this.drawBezierCurve(point_Y[4], point_Y[5], point_Y[6], point_Y[7], this.num_curve_sections, [0, 0, 0, 255], framebuffer);
        this.drawBezierCurve(point_Y[8], point_Y[9], point_Y[10], point_Y[11], this.num_curve_sections, [0, 0, 0, 255], framebuffer);
        //'a'
        this.drawBezierCurve(point_aa[0], point_aa[1], point_aa[2], point_aa[3], this.num_curve_sections, [0, 0, 0, 255], framebuffer);
        this.drawBezierCurve(point_aa[4], point_aa[5], point_aa[6], point_aa[7], this.num_curve_sections, [0, 0, 0, 255], framebuffer);
        //'n'
        this.drawBezierCurve(point_nn[0], point_nn[1], point_nn[2], point_nn[3], this.num_curve_sections, [0, 0, 0, 255], framebuffer);
        //'g'
        this.drawBezierCurve(point_g[0], point_g[1], point_g[2], point_g[3], this.num_curve_sections, [0, 0, 0, 255], framebuffer);
        this.drawBezierCurve(point_g[4], point_g[5], point_g[6], point_g[7], this.num_curve_sections, [0, 0, 0, 255], framebuffer);
        this.drawBezierCurve(point_g[8], point_g[9], point_g[10], point_g[11], this.num_curve_sections, [0, 0, 0, 255], framebuffer);
    }

    // p0:           object {x: __, y: __}
    // p1:           object {x: __, y: __}
    // p2:           object {x: __, y: __}
    // p3:           object {x: __, y: __}
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawBezierCurve(p0, p1, p2, p3, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a Bezier curve
        
        let bc = [];

        function pointTo(t){
            let bx = (((1 - t)**3 * p0.x) + (3 * (1 - t)**2 * t * p1.x) + (3 * (1 - t) * t**2 * p2.x) + (t**3 * p3.x));
            let by = (((1 - t)**3 * p0.y) + (3 * (1 - t)**2 * t * p1.y) + (3 * (1 - t) * t**2 * p2.y) + (t**3 * p3.y));
            return {bx, by};
        }

        num_edges = Math.max(1, Math.floor(num_edges));

        let previous = pointTo(0);
        bc.push({x: Math.round(previous.bx), y: Math.round(previous.by)});  

        for(let i = 1; i <= num_edges; i++){
            let t = i / num_edges;
            let current = pointTo(t);
            this.drawLine({x: Math.round(previous.bx), y: Math.round(previous.by)}, {x: Math.round(current.bx), y: Math.round(current.by)}, color, framebuffer);
            bc.push({x: Math.round(current.bx), y: Math.round(current.by)});
            previous = current;
        }

        if(this.show_points) {
            for(const points1 of bc){
                this.drawVertex(points1, [0, 0, 0, 255], framebuffer);
            }

            for(const points2 of [p0, p1, p2, p3]){
                this.drawVertex(points2, [0, 0, 0, 255], framebuffer);
            }

        }
        
    }

    

    // center:       object {x: __, y: __}
    // radius:       int
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawCircle(center, radius, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a circle
        let v = [];
        
        for(let i = 0; i < num_edges; i++){
            let angle = (2 * Math.PI * i) / num_edges;
            let cx = center.x + (radius * Math.cos(angle));
            let cy = center.y + (radius * Math.sin(angle));
            v.push({x: Math.round(cx), y: Math.round(cy)});
        }

        for(let c = 0; c < num_edges; c++){
            let v1 = v[c];
            let v2 = v[(c + 1) % num_edges];
            this.drawLine(v1, v2, color, framebuffer);
        }

        if(this.show_points) {
            for(const points of v){
                this.drawVertex(points, [0, 0, 0, 255], framebuffer);
            }
        }
    }
    
    // vertex_list:  array of object [{x: __, y: __}, {x: __, y: __}, ..., {x: __, y: __}]
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawConvexPolygon(vertex_list, color, framebuffer) {
        // TODO: d
        // raw a sequence of triangles to form a convex polygon
        for(let i = 1; i < vertex_list.length - 1; i++){
            this.drawTriangle(vertex_list[0], vertex_list[i], vertex_list[i + 1], color, framebuffer);
        }

        if(this.show_points) {
            for(const v of vertex_list){
                this.drawVertex(v, [0, 0, 0, 255], framebuffer);
            }
        }
        
    }
    
    // v:            object {x: __, y: __}
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawVertex(v, color, framebuffer) {
        // TODO: draw some symbol (e.g. small rectangle, two lines forming an X, ...) centered at position `v`
        const cx = Math.round(v.x);
        const cy = Math.round(v.y);
        for(let jy = -2; jy <=2; jy++){
            for(let jx = -2; jx <= 2; jx++){
                const vx = cx + jx;
                const vy = cy + jy;
                if(vx >= 0 && vx < framebuffer.width && vy >= 0 && vy < framebuffer.height) {
                    this.setFramebufferColor(color, vx, vy, framebuffer);
                } 
            }
        }
    }
    
    /***************************************************************
     ***       Basic Line and Triangle Drawing Routines          ***
     ***       (code provided from in-class activities)          ***
     ***************************************************************/
    pixelIndex(x, y, framebuffer) {
	    return 4 * y * framebuffer.width + 4 * x;
    }
    
    setFramebufferColor(color, x, y, framebuffer) {
	    let p_idx = this.pixelIndex(x, y, framebuffer);
        for (let i = 0; i < 4; i++) {
            framebuffer.data[p_idx + i] = color[i];
        }
    }
    
    swapPoints(a, b) {
        let tmp = {x: a.x, y: a.y};
        a.x = b.x;
        a.y = b.y;
        b.x = tmp.x;
        b.y = tmp.y;
    }

    drawLine(p0, p1, color, framebuffer) {
        if (Math.abs(p1.y - p0.y) <= Math.abs(p1.x - p0.x)) { // |m| <= 1
            if (p0.x < p1.x) {
                this.drawLineLow(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineLow(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
        else {                                                // |m| > 1
            if (p0.y < p1.y) {
                this.drawLineHigh(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineHigh(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
    }
    
    drawLineLow(x0, y0, x1, y1, color, framebuffer) {
        let A = y1 - y0;
        let B = x0 - x1;
        let iy = 1; // y increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            iy = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let y = y0;
        for (let x = x0; x <= x1; x++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                y += iy;
            }
        }
    }
    
    drawLineHigh(x0, y0, x1, y1, color, framebuffer) {
        let A = x1 - x0;
        let B = y0 - y1;
        let ix = 1; // x increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            ix = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let x = x0;
        for (let y = y0; y <= y1; y++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                x += ix;
            }
        }
    }
    
    drawTriangle(p0, p1, p2, color, framebuffer) {
        // Deep copy, then sort points in ascending y order
        p0 = {x: p0.x, y: p0.y};
        p1 = {x: p1.x, y: p1.y};
        p2 = {x: p2.x, y: p2.y};
        if (p1.y < p0.y) this.swapPoints(p0, p1);
        if (p2.y < p0.y) this.swapPoints(p0, p2);
        if (p2.y < p1.y) this.swapPoints(p1, p2);
        
        // Edge coherence triangle algorithm
        // Create initial edge table
        let edge_table = [
            {x: p0.x, inv_slope: (p1.x - p0.x) / (p1.y - p0.y)}, // edge01
            {x: p0.x, inv_slope: (p2.x - p0.x) / (p2.y - p0.y)}, // edge02
            {x: p1.x, inv_slope: (p2.x - p1.x) / (p2.y - p1.y)}  // edge12
        ];
        
        // Do cross product to determine if pt1 is to the right/left of edge02
        let v01 = {x: p1.x - p0.x, y: p1.y - p0.y};
        let v02 = {x: p2.x - p0.x, y: p2.y - p0.y};
        let p1_right = ((v01.x * v02.y) - (v01.y * v02.x)) >= 0;
        
        // Get the left and right edges from the edge table (lower half of triangle)
        let left_edge, right_edge;
        if (p1_right) {
            left_edge = edge_table[1];
            right_edge = edge_table[0];
        }
        else {
            left_edge = edge_table[0];
            right_edge = edge_table[1];
        }
        // Draw horizontal lines (lower half of triangle)
        for (let y = p0.y; y < p1.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) { 
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
        
        // Get the left and right edges from the edge table (upper half of triangle) - note only one edge changes
        if (p1_right) {
            right_edge = edge_table[2];
        }
        else {
            left_edge = edge_table[2];
        }
        // Draw horizontal lines (upper half of triangle)
        for (let y = p1.y; y < p2.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) {
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
    }
};

export { Renderer };
