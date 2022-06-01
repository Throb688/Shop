$(function (){
    $('.find').click(()=>{
      let message = document.getElementById("departName").value
      $.ajax({
          url:"/manage/table/"+message,
          type:'get',
          success: (data) =>{
              document.getElementById('tUser').innerHTML =
              data.map(i =>
              `
              <tr>
												<td><input name="chks" value="27" type="checkbox"></td>
												<td>${i.name}</td>
												<td>${i.image}</td>
												<td>${i.ori_price}</td>
												<td>${i.price}</td>
												<td>
                                                <div class="am-btn-toolbar">
                                                <div class="am-btn-group am-btn-group-xs"><button type="button" id="depart_27" class="am-btn am-btn-default am-btn-xs am-text-secondary btnedit  update" data-id1=${i.id} ><span class="am-icon-pencil-square-o"></span>修改</button><button type="button"  class="am-btn am-btn-default am-btn-xs am-text-danger amt-hide-sm-only  del" data-id =${i.id} ><span class="am-icon-trash-o"></span> 删除</button></div>
                                            </div>
												</td>
											</tr>
              `).join(" ");
          }
      })
    })



    
    $(document).on('click','.del',function(){
      let id = $(this).attr("data-id")
                $.ajax({
                    url: "/manage/table/del/"+id,
                    type: "DELETE",
                    success: function(data){
                        if(data =='success'){
                            window.location.href = "/manage/depart"
                            // $(this).parent().parent().parent().remove()
                            // $(i).parent().parent().parent().parent().remove()
                            alert('成功删除')
                        }
                    }
                })
    })

    // Array.from($()).forEach(i =>
    //     i.onclick = function(){
    //         let id = i.getAttribute('data-id')
    //         $.ajax({
    //             url: "/manage/table/del/"+id,
    //             type: "DELETE",
    //             success: function(data){
    //                 if(data =='success'){
    //                     $(i).parent().parent().parent().parent().remove()
    //                     alert('成功删除')
    //                 }
    //             }
    //         })
    //     })
})

$(document).on('click','.update',function(){
    let ind = $(this).attr('data-id1')
        window.location.href='/manage/table/upd/'+ind
})


// Array.from(document.getElementsByClassName('update')).forEach(i=>{
//     i.onclick =function(){
//         let ind = this.getAttribute('data-id1')
//         window.location.href='/manage/table/upd/'+ind
//     }
// })

