$(function (){
    $('.find').click(()=>{
      let message = document.getElementById("userName").value
      $.ajax({
          url:"/manage/user/"+message,
          type:'get',
          success: (data) =>{
              document.getElementById('tUser').innerHTML =
              data.map(i =>
              `
            <tr>
					<td><input name="chks" value="27" type="checkbox"></td>
					<td>${i.user_name}</td>
					<td><input type="button" class="detailsdetails" value="详情"></td>
			</tr>
              `).join(" ");
          }
      })
    })

})


Array.from(document.getElementsByClassName('detailsdetails')).forEach(i=>{
    i.onclick =function(){
        alert(1)
        // let ind = this.getAttribute('data-id1')
        // window.location.href='/manage/table/upd/'+ind
    }
})