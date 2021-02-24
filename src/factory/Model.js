class Model
{
	constructor()
	{
		this.modelSpriteList = [];
		this.modelInstructionList = [];
	}

	exportCode()
	{
		let code = "";

		for (let modelSprite of this.modelSpriteList) 
		{
  			code += modelSprite.exportCode();
		}
		return code;
	}
}



