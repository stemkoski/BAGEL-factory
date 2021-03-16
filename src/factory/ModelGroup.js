class ModelGroup
{
  constructor()
  {
    this.imageName = null;
		this.imageHeight = null;
		this.imageWidth = null;
    this.modelSpriteList = [];
  }

  exportCode()
  {
    let code = "";

		// using Javascript "template literal" syntax
		code += `this.${this.imageName}Group = new Group(); \n`;
		code += `let ${this.imageName}Texture = new Texture("${this.imageName}", ${this.imageWidth}, ${this.imageHeight}); \n`;
    for(let i = 0; i < this.modelSpriteList.length; i++)
    {
      code += this.modelSpriteList[i].exportCode();
    }
		code += `this.group.add(this.${this.imageName}Group); \n`;


		return code;
  }
}
