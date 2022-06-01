$(function(){
    Array.from(document.getElementsByClassName('sub')).forEach(i =>{
        i.onclick = () =>{
           let id = i.getAttribute('data-id');
           $.ajax({
               url:'/shop/sub/'+id,
               type:"POST",
               success: function(data){
                   if(data =="success"){
                       alert('添加成功')
                   }
               }
           })
        }
    })


    // document.getElementsByClassName("search")[0].onclick = ()=>{
    //     let mes = document.getElementById('Search1').value;
    //     $.ajax({
    //         url:'/shop/search/'+mes,
    //         type:'POST',
    //         success:function(data){
    //             response.render('products',{shop:data,count:0,page:page})
    //         }
    //     })
    // }
})