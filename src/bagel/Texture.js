// assumes texture has been loaded into image with given ID

class Texture
{
	constructor(imageID, width, height)
	{
		this.imageID = imageID;
		this.imageElement = document.getElementById(imageID);
		this.region  = new Rectangle(0,0, width,height);
	}
	
	setImageID(imageID)
	{
		this.imageID = imageID;
		this.imageElement = document.getElementById(imageID);
	}

	setDrawRegion(left, top, width, height)
	{
		this.region.setValues(left, top, width, height);
	}
}


