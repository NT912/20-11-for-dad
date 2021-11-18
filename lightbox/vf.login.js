

 $(function(){
    $('body').append('<div class="vf-clickLogin"></div><div id="vf_screen"></div>'+
    '<div id="vf_box_login">'+
        '<div>'+
            '<h3>Đăng nhập</h3>'+        
            '<form onsubmit="md5hash(vb_login_password, vb_login_md5password, vb_login_md5password_utf, 0)" method="post" action="login.php">'+
                '<input name="vb_login_md5password" type="hidden" />'+
    			'<input name="s" type="hidden" value="" />'+
    			'<input name="do" type="hidden" value="login" /><br/>'+
				'<table width="100%" border="0" cellpadding="0" cellspacing="5" style="border-collapse: separate; border-spacing: 5px;">'+
                '<tr><td style="width: 90px;text-align: right;font-weight: bold;">Tài khoản</td><td><input class="input_login" type="text" value="" name="vb_login_username"/></td></tr>'+
                '<tr><td style="width: 90px;text-align: right;font-weight: bold;">Mật khẩu</td><td><input class="input_login" type="password" value="" name="vb_login_password"/></td></tr>'+
				'<tr><td colspan="2"><center><input type="checkbox" name="longtime" checked=""/> Ghi nhớ | <a href="login.php?do=lostpw">Quên mật khẩu?</a></center><br/></td></tr>'+
                '<tr><td colspan="2" class="login_bottom_boxy"><input class="bottom_login" type="submit" value="Đăng nhập" />   <input class="bottom_close" type="submit" value="Hủy bỏ" /></td></tr>'+
				'</table>'+
				'</form>'+
                '<div class="box_alert_close"></div>'+
        '</div>'+
    '</div>'
    )
    $('.vf-clickLogin').live('click',function(){
        $('#vf_screen').show()
        $('#vf_box_login').fadeIn('fast')
        return false
    })

	$('.box_alert_close').live('click',function(){
        $('#vf_screen').hide()
        $('#vf_box_login').fadeOut('fast')
        return false
    })
	
	$('.bottom_close').live('click',function(){
        $('#vf_screen').hide()
        $('#vf_box_login').fadeOut('fast')
        return false
    })

     $('*').keyup(function(event){
        if(event.keyCode=='27'){
            $('#vf_box_login').fadeOut('fast')
            $('#vf_screen').hide()
        }
    })
    //function center
    center()
    $(window).resize(function(){
        center()
    })
    function center(){
        var $wid=$(window).width()
        var $hei=$(window).height()
        var $boxLogin=$('#vf_box_login')
        $boxLogin.css({'left':($wid-$boxLogin.width())/2,'top':($hei-$boxLogin.height())/2})
    } 
 })