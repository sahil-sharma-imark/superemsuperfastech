$(document).ready(function () {
    $("#invoiceid").focus();
    $("#invoiceid").blur(function () {
        var invoiceid = $('#invoiceid').val();
        if (invoiceid.length == 0) {
            $('#invoiceid').next('div.red').remove();
			$('#invoiceid').addClass('red-border');
			
            $('#invoiceid').after('<div class="red">Invoice ID is required</div>');
        } else {
            $(this).next('div.red').remove();
			$("#invoiceid").removeClass('red-border');
            return true;
        }
    });

    $("#owner").blur(function () {
        var owner = $('#owner').val();
        if (owner.length == 0) {
            $('#owner').next('div.red').remove();
			$('#owner').addClass('red-border');
            $('#owner').after('<div class="red">Owner is required</div>');
            return false;
        } else {
            $('#owner').next('div.red').remove();
			$("#owner").removeClass('red-border');
            return true;
        }
    });
    $("#address").blur(function () {
        var address = $('#address').val();
        if (address.length == 0) {
            $('#address').next('div.red').remove();
			$('#address').addClass('red-border');
            $('#address').after('<div class="red">Address is required</div>');
            return false;
        } else {
            $('#address').next('div.red').remove();
			$("#address").removeClass('red-border');
            return true;
        }
    });
	
    $("#search").blur(function () {
        var search = $('#search').val();
        if (search.length == 0) {
            $('#search').next('div.red').remove();
			$('#search').addClass('red-border');
            $('#search').after('<div class="red">Attention To is required</div>');
            return false;
        } else {
            $('#search').next('div.red').remove();
			$("#search").removeClass('red-border');
            return true;
        }
    });
	
    $("#phone").blur(function () {
        var phone = $('#phone').val();
        if (phone.length == 0) {
            $('#phone').next('div.red').remove();
			$('#phone').addClass('red-border');
            $('#phone').after('<div class="red">Phone number is required</div>');
            return false;
        } else {
            $(phone).next('div.red').remove();
			$("#phone").removeClass('red-border');
            return true;
        }
    });
    $("#email").blur(function () {
        var email = $('#email').val();
        if (email.length == 0) {
            $('#email').next('div.red').remove();
            $('#email').addClass('red-border');
            $('#email').after('<div class="red">Please provide a valid email.</div>');
            return false;
        } else {
            $(email).next('div.red').remove();
			$(email).removeClass('red-border');
            return true;
        }
    });
    $("#duedate").blur(function () {
        var duedate = $('#duedate').val();
        if (duedate.length == 0) {
            $('#duedate').next('div.red').remove();
			$('#duedate').addClass('red-border');
            $('#duedate').after('<div class="red">Due date is required</div>');
            return false;
        } else {
            $(duedate).next('div.red').remove();
			$("#duedate").removeClass('red-border');
            return true;
        }
    });
    $("#installer").blur(function () {
        var installer = $('#installer').val();
        if (installer.length == 0) {
            $('#installer').next('div.red').remove();
			$('#installer').addClass('red-border');
            $('#installer').after('<div class="red">Installer is required</div>');
            return false;
        } else {
            $(installer).next('div.red').remove();
			$("#installer").removeClass('red-border');
            return true;
        }
    });
    $("#product").blur(function () {
        var product = $('#product').val();
        if (product.length == 0) {
            $('#product').next('div.red').remove();
			$('#product').addClass('red-border');
            $('#product').after('<div class="red">Product is required</div>');
            return false;
        } else {
            $(product).next('div.red').remove();
			$('#product').removeClass('red-border');
            return true;
        }
    });
    $("#quantity").blur(function () {
        var quantity = $('#quantity').val();
        if (quantity.length == 0) {
            $('#quantity').next('div.red').remove();
			$('#quantity').addClass('red-border');
            $('#quantity').after('<div class="red">Quantity is required</div>');
            return false;
        } else {
            $(quantity).next('div.red').remove();
			$('#quantity').removeClass('red-border');
            return true;
        }
    });
    $("#unit").blur(function () {
        var unit = $('#unit').val();
        if (unit.length == 0) {
            $('#unit').next('div.red').remove();
			$('#unit').addClass('red-border');
            $('#unit').after('<div class="red">Unit is required</div>');
            return false;
        } else {
            $(unit).next('div.red').remove();
			$('#unit').removeClass('red-border');
            return true;
        }
    });
    $("#price").blur(function () {
        var price = $('#price').val();
        if (price.length == 0) {
            $('#price').next('div.red').remove();
			$('#price').addClass('red-border');
            $('#price').after('<div class="red">Price is required</div>');
            return false;
        } else {
            $(price).next('div.red').remove();
			$('#price').removeClass('red-border');
            return true;
        }
    });
    $("#totalprice").blur(function () {
        var totalprice = $('#totalprice').val();
        if (totalprice.length == 0) {
            $('#totalprice').next('div.red').remove();
			$('#totalprice').addClass('red-border');
            $('#totalprice').after('<div class="red">Amount is required</div>');
            return false;
        } else {
            $(totalprice).next('div.red').remove();
			$('#totalprice').removeClass('red-border');
            return true;
        }
    });
	
	
	/*Quotation Validation*/
	$("#ro").focus();
    $("#ro").blur(function () {
        var ro = $("#ro").val();
        if (ro.length == 0) {
            $("#ro").next('div.red').remove();
			$('#ro').addClass('red-border');
            $("#ro").after('<div class="red">Quotation ID required</div>');
        } else {
            $(this).next('div.red').remove();
			$('#ro').removeClass('red-border');
            return true;
        }
    });
    $("#mobile").blur(function () {
        var mobile = $("#mobile").val();
        if (mobile.length == 0) {
            $("#mobile").next('div.red').remove();
			$('#mobile').addClass('red-border');
            $("#mobile").after('<div class="red">Mobile is required</div>');
        } else {
            $(this).next('div.red').remove();
			$('#mobile').removeClass('red-border');
            return true;
        }
    });

});
