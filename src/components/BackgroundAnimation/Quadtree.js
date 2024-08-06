export class Rectangle {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
  
    contains(point) {
      return (
        point.x >= this.x - this.w &&
        point.x <= this.x + this.w &&
        point.y >= this.y - this.h &&
        point.y <= this.y + this.h
      );
    }
  
    intersects(range) {
      return !(
        range.x - range.w > this.x + this.w ||
        range.x + range.w < this.x - this.w ||
        range.y - range.h > this.y + this.h ||
        range.y + range.h < this.y - this.h
      );
    }
  }
  
  export class Quadtree {
    constructor(boundary, capacity) {
      this.boundary = boundary; // Rectangle
      this.capacity = capacity; // Number of points per quad
      this.points = [];
      this.divided = false;
    }
  
    subdivide() {
      const { x, y, w, h } = this.boundary;
      const nw = new Rectangle(x - w / 4, y - h / 4, w / 2, h / 2);
      const ne = new Rectangle(x + w / 4, y - h / 4, w / 2, h / 2);
      const sw = new Rectangle(x - w / 4, y + h / 4, w / 2, h / 2);
      const se = new Rectangle(x + w / 4, y + h / 4, w / 2, h / 2);
  
      this.northwest = new Quadtree(nw, this.capacity);
      this.northeast = new Quadtree(ne, this.capacity);
      this.southwest = new Quadtree(sw, this.capacity);
      this.southeast = new Quadtree(se, this.capacity);
      this.divided = true;
    }
  
    insert(point) {
      if (!this.boundary.contains(point)) {
        return false;
      }
  
      if (this.points.length < this.capacity) {
        this.points.push(point);
        return true;
      } else {
        if (!this.divided) {
          this.subdivide();
        }
  
        if (this.northwest.insert(point)) return true;
        if (this.northeast.insert(point)) return true;
        if (this.southwest.insert(point)) return true;
        if (this.southeast.insert(point)) return true;
      }
    }
  
    query(range, found) {
      if (!this.boundary.intersects(range)) {
        return;
      } else {
        for (let p of this.points) {
          if (range.contains(p)) {
            found.push(p);
          }
        }
        if (this.divided) {
          this.northwest.query(range, found);
          this.northeast.query(range, found);
          this.southwest.query(range, found);
          this.southeast.query(range, found);
        }
      }
    }
  }