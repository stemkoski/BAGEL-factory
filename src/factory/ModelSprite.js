class ModelSprite
{
	constructor()
	{
		this.x = null;
		this.y = null;
		this.width = null;
		this.height = null;
		this.imageName = null;
	}

	exportCode()
	{
		let code = "";

		// using Javascript "template literal" syntax
		code += `let ${this.imageName}Sprite = new Sprite(); \n`;
		code += `${this.imageName}Sprite.setTexture(???); \n`;
		code += `${this.imageName}Sprite.setPosition( ${this.x}, ${this.y} ); \n`;
		code += `${this.imageName}Sprite.setTexture( ${this.width}, ${this.height} ); \n`;
		

		return code;
	}
}
