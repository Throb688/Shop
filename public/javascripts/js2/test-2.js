$(function(){
    Array.from(document.getElementsByClassName('details')).forEach(i=>{
        i.onclick =function(){
            let id = i.getAttribute('data-id')
            $.ajax({
                url:'/manage/dispose/'+id,
                type:'get',
                success:function(data){
                    if(data == 'success'){
                        alert('成功处理')
                        $(i).parent().parent().remove()
                    }
                }
            })
        }
    })
})

