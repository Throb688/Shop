$(function(){
    
    document.getElementById('shop').onclick=()=>{
        alert(1)
        window.location.href='/myself/shoptab'
        // $.ajax({
        //     url:'/myself/shoptab',
        //     type:'GET',
        //     success:function(data){
        //         document.getElementById('tab').innerHTML =
        //         data.map(i =>{
        //             `
        //             <tr>
        //             <td>商品名：<input type='text value= '${i.tb_name}'>
        //             <td><img  style="height:150px;width: 150px;" title=" " alt=" " src='${i.tb_image}' /> 
        //             <td>商品价格：<input type='text value= '${i.tb_price}'>
        //             `
        //         })
        //     }
        // })
    }

    document.getElementById('repaw').onclick=()=>{
        alert(2)
      
    }

})