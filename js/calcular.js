$(document).ready(function()
{
	$('#calcular').click(function()
	{
		// set up defaults
		var min = 0;
		var max = 1000;

		// get the values
		var p1 = $('#p1').val();
		var p2 = $('#p2').val();
		var carga1 = $('#carga1').val();
		var carga2 = $('#carga2').val();

		resetErrors();

		if
		(
			(isValidEntry(p1, min, max) === true) &&
			(isValidEntry(p2, min, max) === true) &&
			(isValidEntry(carga1, min, max) === true) &&
			(isValidEntry(carga2, min, max) === true)
		)
		{
			// calcular
			var pResult = parseInt(p1) + parseInt(p2);
			var cargaResult = parseInt(carga1) + parseInt(carga2);

			$('#pResult').html(pResult);
			$('#cargaResult').html(cargaResult);

			$('#details').slideUp();
			$('#results').slideDown();

		}
		else
		{
			if(!(isValidEntry(p1, min, max) === true))
			{
				$('#p1Error').html(isValidEntry(p1, min, max));
				$('#control-group-p1').addClass('error');
			}

			if(!(isValidEntry(p2, min, max) === true))
			{
				$('#p2Error').html(isValidEntry(p2, min, max));
				$('#control-group-p2').addClass('error');
			}

			if(!(isValidEntry(carga1, min, max) === true))
			{
				$('#carga1Error').html(isValidEntry(carga1, min, max));
				$('#control-group-carga1').addClass('error');
			}

			if(!(isValidEntry(carga2, min, max) === true))
			{
				$('#carga2Error').html(isValidEntry(carga2, min, max));
				$('#control-group-carga2').addClass('error');
			}
		}
	});

	function isValidEntry(num, min, max)
	{
		if(isValidInt(num, min, max))
		{
			return true;
		}

		return 'Deve ser um numero inteiro entre ' + min + ' e ' + max;
	}

	// adapted from [http://stackoverflow.com/questions/10834796/validate-that-a-string-is-a-positive-integer]
	function isValidInt(num, min, max)
	{
    	var n = ~~Number(num);
    	return String(n) === num && n >= min && n <= max;
	}

	function resetErrors()
	{
		// remove the error class
		$('#control-group-p1').removeClass('error');
		$('#control-group-p2').removeClass('error');
		$('#control-group-carga1').removeClass('error');
		$('#control-group-carga2').removeClass('error');

		// reset the error messages
		$('#p1Error').html('');
		$('#p2Error').html('');
		$('#carga1Error').html('');
		$('#carga2Error').html('');
	}
});