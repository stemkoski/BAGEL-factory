class Rectangle
{
	constructor(left=0, top=0, width=0, height=0)
	{
		this.setValues(left, top, width, height);
	}
	
	setValues(left, top, width, height)
	{
		this.left   = left;
		this.top    = top;
		this.width  = width;
		this.height = height;
		this.right  = left + width;
		this.bottom = top + height;
	}
	
	overlaps(other)
	{
		let noOverlap = (other.right <= this.left) 
		              || (this.right <= other.left) 
					  || (other.bottom <= this.top) 
					  || (this.bottom <= other.top);
		return !noOverlap;
	}
	
}


