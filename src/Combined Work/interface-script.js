// Normal Script inside Starfish StarfishCollector
// Seperating it from HTML to avoid clutter
class StarfishCollector extends Game
{
	create()
	{
		this.ocean = new Sprite();
		this.ocean.setTexture( new Texture("water", 800,600) );
		this.ocean.setPosition(400,300);
		this.ocean.setSize(800,600);
		this.group.add(this.ocean);

		this.turtle = new Sprite();
		this.turtle.setTexture( new Texture("turtle", 96,96) );
		this.turtle.setPosition(100,100);
		this.turtle.setSize(96,96);
		this.group.add(this.turtle);
	}

	update()
	{

	}
}

let game = new StarfishCollector(800,600);

game.run();
