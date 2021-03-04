$("#pills-code-tab").on( "click",
	(event, ui) =>
	{
		let code = view.model.exportCode();
		$("#codeArea").text( code );
	}
);
