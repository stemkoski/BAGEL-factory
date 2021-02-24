class Vector
{
	constructor(x=0, y=0)
	{
		this.setValues(x,y);
	}

	setValues(x, y)
	{
		this.x = x;
		this.y = y;
	}
	
	addVector(other)
	{
		this.x += other.x;
		this.y += other.y;
	}

	addValues(dx, dy)
	{
		this.x += dx;
		this.y += dy;
	}

	multiply(scalar)
	{
		this.x *= scalar;
		this.y *= scalar;
	}
	
	getLength()
	{
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	
	getAngle()
	{
		// range: -180 to 180
		if (this.getLength() == 0)
			return 0;
		else
			return Math.atan2(this.y, this.x) * 180/Math.PI;
	}

	setLength(length)
	{
		let angleDegrees = this.getAngle();
		this.x = length * Math.cos(angleDegrees * Math.PI/180);
		this.y = length * Math.sin(angleDegrees * Math.PI/180);
	}	

	setAngle(angleDegrees)
	{
		let length = this.getLength();
		this.x = length * Math.cos(angleDegrees * Math.PI/180);
		this.y = length * Math.sin(angleDegrees * Math.PI/180);
	}

}