$('#search').keydown(function(){
    $.getJSON("data.json",function(data){
        var search = $('#search').val();
        var regex = new RegExp(search,'i');
        var output;
        $.each(data,function(key,val){
            if((val.item.search(regex) != -1) || (val.item.search(regex) != -1)){
            output += "<tr>";
            output += "<td id='"+key+"'>"+val.sno+"</td>";
            output += "<td id='"+key+"'>"+val.item+"</td>";
            output += "<td id='"+key+"'>"+val.quantity+"</td>";
            output += "<td id='"+key+"'>"+val.unit+"</td>";
            output += "<td id='"+key+"'>"+val.department+"</td>";
            output += "<td id='"+key+"'>"+val.notes+"</td>";
            output += "</tr>";
            }
        });
        $('tbody').html(output);
    });
})

