class Sprite extends Entity
{
	constructor()
	{
		super();
		this.position = new Vector();
		this.texture  = new Texture();
		this.boundary = new Rectangle();
		this.width  = 0;
		this.height = 0;
		this.visible = true;
	}
	
	// basic methods
	
	setPosition(x, y)
	{
		this.position.setValues(x,y);
	}

	moveBy(dx, dy)
	{
		this.position.addValues(dx,dy);
	}	
	
	setTexture(tex)
	{
		this.texture = tex;
		// due to asynchronous image loading, 
		//   the values of width/height may not be initialized
		//   at this point in the code; use setSize(w,h) method
		// this.width   = tex.region.width;
		// this.height  = tex.region.height;
	}
	
	setSize(width, height)
	{
		this.width  = width;
		this.height = height;
	}
	
	// overrides function from Entity class
	draw(context)
	{
		
		context.setTransform(1,0, 0,1, this.position.x, this.position.y);
		
		// image, 4 source parameters, 4 destination parameters
        context.drawImage(this.texture.imageElement, 
            this.texture.region.left, this.texture.region.top, 
            this.texture.region.width, this.texture.region.height,
            -this.width/2, -this.height/2, 
            this.width, this.height);
	}
	
	
	
	
}


