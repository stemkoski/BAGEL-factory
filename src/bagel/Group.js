class Group extends Entity
{
	constructor()
	{
		super();
		// using arrays rather than sets, because draw order is important.
		this.entityList = [];
	}
	
	add(entity)
	{
		this.entityList.push(entity);
	}
	
	remove(entity)
	{
		let index = this.entityList.indexOf(entity);
		if (index > -1)
		{
			this.entityList.splice(index, 1);
		}
	}
	
	// returns shallow copy of list
	// use to avoid errors from add/remove while iterating over list
	list()
	{
		return this.entityList.slice();
	}
	
	draw(context)
	{
		for (let entity of this.list())
			entity.draw(context);
	}
	
}
