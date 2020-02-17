$(document).ready(function(){

    const key = 'qww4Qdu3s2zsKCNl0AFU';
    let headers = new Headers();
    headers.set('x-api-key', key);
    
    const limit = '2';
    const url = 'https://the-one-api.herokuapp.com/v1/book' + limit;
    
    let output = '';
    
    $.getJSON(url, function(data){
         for(i = 0; i < data.length; i++) {
            output += '<book src="'+data[i].url+'"/>';
         }
        
         $('#content').append(output);
    
         $('book').click(function(){
            alert("You clicked!");
        });
    });
    
    });