class Game
{
	// can use divID to create game within a pre-existing div element
	// if divID is null, a new div will be created
	constructor(width, height, divID=null)
	{
		this.width = width;
		this.height = height;

		if (divID)
		{
			this.div = document.getElementById(divID);
		}
		else
		{
			this.div = document.createElement("div");
			this.div.id = "canvasDiv";
			// add to bottom of page
			document.body.appendChild(this.div);
		}

		// ??? should div contents be cleared -- remove pre-existing canvas?
		// ??? should canvasID be passed instead of divID?

		this.canvas = document.createElement("canvas");
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.div.appendChild( this.canvas );
		this.context = this.canvas.getContext("2d");

		//this.input = new Input(this.canvas);
		this.group = new Group();
		//this.deltaTime = 1.0/60.0;

	}

	// override by extending classes
	create()
	{  }

	// override by extending classes
	update()
	{  }

	run()
	{
		// gameloop runs from setInterval; "this" is the wrong context.
		let self = this;

		this.create();

		this.intervalID = setInterval(
			function()
			{
				self.gameloop();
			},
			17
		);
	}

	gameloop()
	{
		// process input
		//  this.input.update();

		// update game state
		// this.group.act(this.deltaTime);
		this.update();

		// render images to screen
		this.context.fillStyle = "#337";
		this.context.fillRect(0,0, this.width,this.height);
		this.group.draw(this.context);
	}

	quit()
	{
		clearInterval(this.intervalID);
	}

}
