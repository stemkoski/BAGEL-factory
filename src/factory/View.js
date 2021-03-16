class View
{
	constructor()
	{
		this.viewSpriteList = [];
		this.viewInstructionList = [];

		this.model = new Model();
	}

	createSprite(imageElementId, parentElementId)
	{
		let viewSprite = new ViewSprite(imageElementId, parentElementId);

		this.viewSpriteList.push( viewSprite );

		//this.model.modelSpriteList.push( viewSprite.modelSprite );
		this.model.addSpriteToGroup( viewSprite.modelSprite );
	}
}
