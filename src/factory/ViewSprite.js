class ViewSprite
{
	constructor(imageElementId, parentElementId)
	{
		// related HTML elements
		this.$parent = $("#" + parentElementId);
		this.$image = $("#" + imageElementId);

		// create HTML elements used iby this object
		this.$div = $("<div style='position: absolute;'></div>");

		this.$img = $("<img />");	
		this.$img.attr("src", this.$image.attr("src") );
		this.$img.attr("id", "asdf");

		// add new elements to page
		this.$parent.append( this.$div );
		this.$div.append( this.$img );
		
		// link to model data
		this.modelSprite = new ModelSprite();
		// set image name
		this.modelSprite.imageName = imageElementId;
		// set other values
		this.updateModelData();

		// add element functionality
		this.$div.draggable({
			containment: this.$parent, 
			drag: (event, ui) => 
			{ 
				this.updateModelData();
			}
		});

		this.$img.resizable({
			containment: this.$parent,
			aspectRatio: false,
			handles: "se",
			resize: (event, ui) => 
			{ 
				this.updateModelData(); 
			}
		});

		console.log("created view sprite: " + imageElementId);
	}

	updateModelData()
	{
		let parentOffset = this.$parent.offset();
		let spriteOffset = this.$div.offset();

		this.modelSprite.x = Math.round( spriteOffset.left - parentOffset.left );
		this.modelSprite.y = Math.round( spriteOffset.top  - parentOffset.top  );

		this.modelSprite.width  = Math.round( this.$div.width() );
		this.modelSprite.height = Math.round( this.$div.height() );

		console.log("updated model data");
		console.log(this.modelSprite);
	}
}