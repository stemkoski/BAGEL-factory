class ModelSprite
{
	constructor()
	{
		this.x = null;
		this.y = null;
		this.width = null;
		this.height = null;
		// Image name is used to create group name
		this.imageName = null;
	}

	exportCode()
	{
		let code = "";

		// using Javascript "template literal" syntax
		code += `let ${this.imageName}Sprite = new Sprite(); \n`;
		code += `${this.imageName}Sprite.setTexture(${this.imageName}Texture); \n`;
		code += `${this.imageName}Sprite.setPosition( ${this.x}, ${this.y} ); \n`;
		code += `${this.imageName}Sprite.setSize( ${this.width}, ${this.height} ); \n`;
		code += `this.${this.imageName}Group.add(${this.imageName}Sprite); \n`


		return code;
	}
}
