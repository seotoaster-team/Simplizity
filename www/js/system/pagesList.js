var app_name = 'Simpliziti';
var pagesList = {
    'login'      : function(){
        parseTemplate('_login.htm', {
            page_name  : 'login',
            page_title : app_name
        }, false)
    },
    'home'       : function(){
        parseTemplate('_home.htm', {
            page_name  : 'home',
            page_title : app_name,
            users      : users
        }, false)
    },
    'profile'    : function(profile){
        if(typeof profile === 'undefined'){
            profile = {
                user       : true,
                page_name  : 'profile',
                page_title : 'Profile',
                userData   : users[1]
            }
        }
        parseTemplate('_profile.htm', profile, false)
    },
    'send-money' : function(){
        parseTemplate('_send-money.htm', {
            page_name  : 'send-money',
            page_title : 'Send money',
            users      : users
        }, false)
    },
    'add_wish'   : function(url){
        parseTemplate('_add-wish.htm', {
            page_name  : 'Add wish',
            page_title : 'Add wish',
            wish_image : url || ''
        }, false)
    },
    'my-donation'   : function(){
        parseTemplate('_my-contribute.htm', {
            page_name  : 'my-contribute',
            page_title : 'My contribute',
            donations : donationsDavid
        }, false)
    }
}