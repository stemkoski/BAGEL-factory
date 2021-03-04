class Model
{
	constructor()
	{
		// ImageName -> List of Starfish Model Sprites
		this.modelGroupSet = {};
		this.modelSpriteList = [];
		this.modelInstructionList = [];
	}

	// Old Export Code (Hopefully)
	/*exportCode()
	{
		let code = "";

		for (let modelSprite of this.modelSpriteList)
		{
  			code += modelSprite.exportCode();
		}
		return code;
	}*/

	exportCode()
	{
		let code = "";
		for (let groupName of this.modelGroupSet)
		{
			let spriteList = this.modelGroupSet[groupName];
			code += `let ${groupName}Group = new Group();\n`;
		}
	}

	addSpriteToGroup(groupName, spriteToGroup)
	{
		if(!(groupName in this.modelGroupSet))
		{
			this.modelGroupSet[groupName] = [];
		}

		this.modelGroupSet[groupName].push(spriteToGroup);
	}
}
