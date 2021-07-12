class Model
{
	constructor()
	{
		// ImageName -> List of Starfish Model Sprites
		this.modelGroupSet = {};
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
		console.log(this.modelGroupSet);
		for (let groupName of Object.keys(this.modelGroupSet) )
		{
			let group = this.modelGroupSet[groupName];
			code += group.exportCode();
		}
	}

	// Check for doubles later
	createGroup(groupName, textureWidth, textureHeight)
	{
		let someGroup = new ModelGroup();
		someGroup.imageName = groupName;
		someGroup.imageWidth = textureWidth;
		someGroup.imageHeight = textureHeight;

		this.modelGroupSet[groupName] = someGroup;
	}

	addSpriteToGroup(sprite)
	{
		let groupName = sprite.imageName;
		let group = this.modelGroupSet[groupName];
		group.modelSpriteList.push(sprite);
	}
}
