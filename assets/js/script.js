$(document).ready(function (){
    $('#names').tagify({
        duplicates : false,
        placeholder: 'Enter names...',
        delimiters: ",",
        pasteAsTags:true,
        trim:true,
    });

    $('#saveNames').on('click', function (){
        if($('#names').val() == '') {
            displayError('Enter some names');
            return false;
        }
        let names_obj = JSON.parse($('#names').val());
        let names_str = names_obj.map(({value}) => value).toString();
        let names_arr = names_str.split(',');
        if(names_arr.length > 1){
            displayName(names_arr[Math.floor(Math.random() * names_arr.length)]);
        }
        else {
            displayError('Enter atleast two names');
            return false;
        }
    });
});

function displayError(error_message)
{
    $('.error_message').text(error_message);
    $('.error-alert-box').removeClass('d-none');
    $(".error-alert-box").css("display", "block")
    setTimeout(function(){
        $(".error-alert-box").fadeTo(2000, 200).slideUp(200, function(){
            $(".error-alert-box").slideUp(200);
            $('.error-alert-box').addClass('d-none');
            $('.error_message').text('');
        });
    }, 3000);
}

function displayName(name)
{
    Swal.fire({
        title: 'Hurray!',
        text: '👉 '+name+' 👈',
        imageUrl: 'https://c.tenor.com/Pxb5QTcT4cwAAAAC/minion-congrats.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Congrats',
    });
}

$("#autoFill").on("click", function(){
    let autoFill =[
        {"value":"Abdul Mannan"},
        {"value":"Huzaif"},
        {"value":"Ibrahim"},
        {"value":"Ashish"},
        {"value":"Yusuf"},
        {"value":"Akash"},
        {"value":"Abis"},
        {"value":"Zaid"},
        {"value":"Zayd"},
    ];
    $("#names").val(JSON.stringify(autoFill));
});