
function ShoppingCarObserver(elInput, isAdd) {
	this.elInput = elInput
	this.parents = this.elInput.parents('.goods-item')
	this.count = parseInt(this.elInput.val())
	this.isAdd = isAdd
	this.singlePrice = parseFloat(this.parents.find('.single-price').text())
	this.computeGoodsMoney = function() {
		var moneyCount = this.count * this.singlePrice
		var singleTotalEl = this.parents.find('.single-total')
		console.log(moneyCount)
		singleTotalEl.empty().append(moneyCount)
	}
	this.showCount = function() {
		var isChecked = this.parents.find('.goods-list-item')[0].checked
		var GoodsTotalMoney = parseFloat($('#selectGoodsMoney').text())
		var goodsTotalCount = parseInt($('#selectGoodsCount').text())
		if(this.elInput) {
			if(this.isAdd) {
				++this.count
				if(isChecked) {
					$('#selectGoodsMoney').empty().append(GoodsTotalMoney + this.singlePrice)
					$('#selectGoodsCount').empty().append(goodsTotalCount + 1)
				}
			} else {
				if(parseInt(this.count) <= 1) {
					return
				} else {
					--this.count
					if(isChecked) {
						$('#selectGoodsMoney').empty().append(GoodsTotalMoney - this.singlePrice)
						$('#selectGoodsCount').empty().append(goodsTotalCount - 1)
					}
				}
			}
			this.elInput.val(this.count)
		}
	}
	this.checkIsAll = function() {
		var checkLen = $('.goods-list-item:checked').length
		if (checkLen > 0) {
			$('.submitData').removeClass('submitDis')
		} else {
			$('.submitData').addClass('submitDis')
		}
		if($('.goods-item').length === checkLen) {
			$('#checked-all-bottom, #check-goods-all').prop('checked', true)
		} else {
			$('#checked-all-bottom, #check-goods-all').prop('checked', false)
		}
	}
	this.checkedChange = function(isChecked) {
		if(isChecked === undefined) {
			var isChecked = this.parents.find('.goods-list-item')[0].checked
		}
		var itemTotalMoney = parseFloat(this.parents.find('.single-total').text())
		var GoodsTotalMoney = parseFloat($('#selectGoodsMoney').text())
		var itemCount = parseInt(this.parents.find('.goods-count').val())
		var goodsTotalCount = parseInt($('#selectGoodsCount').text())
		if(isChecked) {
			$('#selectGoodsMoney').empty().append(itemTotalMoney + GoodsTotalMoney)
			$('#selectGoodsCount').empty().append(itemCount + goodsTotalCount)
		} else {
			if (GoodsTotalMoney - itemTotalMoney === 0) {
				$('#selectGoodsMoney').empty().append('0.00')
				if (!$('.submitData').hasClass('submitDis')) {
					$('.submitData').addClass('submitDis')
				}
			} else {
				$('#selectGoodsMoney').empty().append(GoodsTotalMoney - itemTotalMoney)
			}
			$('#selectGoodsCount').empty().append(goodsTotalCount - itemCount)
		}
	}
	this.deleteGoods = function() {
		var isChecked = this.parents.find('.goods-list-item')[0].checked
		if(isChecked) {
			this.checkedChange(false)
		}
		this.parents.remove()
		this.checkOptions()
	}
	this.checkOptions = function() {
		if ($('#check-goods-all')[0].checked) {
			if ($('.goods-list-item').length <= 0) {
				$('#checked-all-bottom, #check-goods-all').prop('checked', false)
			}
		}
	}
}
function checkedAll(_this) {
	if ($('.goods-item').length <= 0) {
		$('.submitData').addClass('submitDis')
	} else {
		$('.submitData').removeClass('submitDis')
	}
	for(var i = 0; i < $('.goods-item').length; i++) {
		var elInput = $('.goods-item').eq(i).find('.goods-list-item')
		var isChecked = $('.goods-item').eq(i).find('.goods-list-item')[0].checked
		var checkAllEvent = new ShoppingCarObserver(elInput, null)
		if(_this.checked) {
			if(!isChecked) {
				elInput.prop('checked', true)
				checkAllEvent.checkedChange(true)
			}
		} else {
			if (!$('.submitData').hasClass('submitDis')){
				$('.submitData').addClass('submitDis')
			}
			if(isChecked) {
				elInput.prop('checked', false)
				checkAllEvent.checkedChange(false)
			}
		}
	}
}
$('#check-goods-all').on('change', function() {
	if(this.checked) {
		$('#checked-all-bottom').prop('checked', true)
	} else {
		$('#checked-all-bottom').prop('checked', false)
	}
	checkedAll(this)
})
$('#checked-all-bottom').on('change', function() {
	if(this.checked) {
		$('#check-goods-all').prop('checked', true)
	} else {
		$('#check-goods-all').prop('checked', false)
	}
	checkedAll(this)
})
$('.goods-list-item').on('change', function() {
	var tmpCheckEl = $(this)
	var checkEvent = new ShoppingCarObserver(tmpCheckEl, null)
	checkEvent.checkedChange()
	checkEvent.checkIsAll()
})
$('.goods-content').on('click', '.car-decrease', function() {
	var goodsInput = $(this).parents('.input-group').find('.goods-count')
	var decreaseCount = new ShoppingCarObserver(goodsInput, false)
	decreaseCount.showCount()
	decreaseCount.computeGoodsMoney()
})
$('.goods-content').on('click', '.car-add', function() {
	var goodsInput = $(this).parents('.input-group').find('.goods-count')
	var addCount = new ShoppingCarObserver(goodsInput, true)
	addCount.showCount()
	addCount.computeGoodsMoney()
})

// $('.goods-content').on('click', '.item-delete', function() {
// 	var goodsInput = $(this).parents('.goods-item').find('.goods-list-item')
// 	deleteGoods = new ShoppingCarObserver(goodsInput, null)
// 	$('#deleteItemTip').modal('show')
// })
$('.deleteSure').on('click', function() {
	if(deleteGoods !== null) {
		deleteGoods.deleteGoods()
	}
	$('#deleteItemTip').modal('hide')
})
$('#deleteMulty').on('click', function() {
	if($('.goods-list-item:checked').length <= 0) {
		$('#selectItemTip').modal('show')
	} else {
		$('#deleteMultyTip').modal('show')
	}
})
$('.deleteMultySure').on('click', function() {
	for (var i = 0; i < $('.goods-list-item:checked').length; i++) {
		var multyDelete = new ShoppingCarObserver($('.goods-list-item:checked').eq(i), null)
		multyDelete.deleteGoods()
		i--
	}
	multyDelete.checkOptions()
	$('#deleteMultyTip').modal('hide')
})

$(function(){
	Array.from(document.getElementsByClassName("item-delete")).forEach(i =>{
		i.onclick =() =>{
			let id = i.getAttribute('data-id')
			$.ajax({
				url:'/gou/del/'+id,
				type:'DELETE',
				success:function(data){
					if(data =="success"){
						$(i).parent().parent().parent().remove()
						alert('成功删除')
					}
				}
			})
		}	
	})
})

$(function(){
	document.getElementsByClassName('submitDis')[0].onclick =()=>{
		let  moneyNum = document.getElementById('selectGoodsMoney').innerText
		let goodsNum = document.getElementById('selectGoodsCount').innerText	
		$.ajax({
			url:'/gou/scu/'+moneyNum+'/'+goodsNum,
			type:'get',
			// data:{"moneyNum":moneyNum,
		    //       "goodsNum":goodsNum
			// 	},
			// dataType:"json",	
			success:function(data){
				if(data == 'success'){
					alert('购物成功')
					window.location.href='/shop/logout'
				}
			}
		})
	}
})


