class ModelSprite
{
	constructor()
	{
		this.x = null;
		this.y = null;
		this.width = null;
		this.height = null;
		this.imageName = null;
		this.imageHeight = null;
		this.imageWidth = null;
	}

	exportCode()
	{
		let code = "";

		// using Javascript "template literal" syntax
		code += `let ${this.imageName}Sprite = new Sprite(); \n`;
		code += `let ${this.imageName}Texture = new Texture("${this.imageName}"); \n`;
		code += `${this.imageName}Sprite.setTexture(${this.imageName}Texture, ${this.imageWidth},${this.imageHeight}); \n`;
		code += `${this.imageName}Sprite.setPosition( ${this.x}, ${this.y} ); \n`;
		code += `${this.imageName}Sprite.setSize( ${this.width}, ${this.height} ); \n`;


		return code;
	}
}
