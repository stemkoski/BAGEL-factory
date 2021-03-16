let view = new View();

// apply jQuery style to corresponding element types
$("button").button();
$("select").selectmenu();

// when input field points to a new file, load file
$("#inputOpenFile").on("change",
	(inputEvent) =>
	{
		let file = inputEvent.target.files[0];
		let name = file.name;

		// remove extension from file name
		name = name.substr(0, name.lastIndexOf('.'));

		let reader = new FileReader();
		reader.addEventListener("load",
			readerEvent =>
			{
				// store image in new hidden element
				let img = $("<img style='display: none;' />");
				img.attr("src", readerEvent.target.result);
				img.attr("id", name);
				img.appendTo("body");

				// add image name to select list
				let option = $("<option></option>");
				option.text( name );
				$("#spriteNames").append( option );
				// Update Model
				view.model.createGroup(name);
			}
		);
		reader.readAsDataURL(file);
	}
);

$("#buttonLoadImage").on( "click",
	(event, ui) =>
	{
		$("#inputOpenFile").click();
	}
);

$("#buttonCreateSprite").on( "click",
	(event, ui) =>
	{
		let imageID = $("#spriteNames option:selected").text();
		view.createSprite(imageID, "layout");
	}
);

$("#buttonExportCode").on( "click",
	(event, ui) =>
	{
		let code = view.model.exportCode();
		$("#codeArea").text( code );
	}
);
