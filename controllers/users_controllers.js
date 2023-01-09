module.exports.profile= function(req,res){
    // return res.end('<h1>Profile Page Loaded</h1>')
    return res.render('user_profile',{
        title:'profile'
    });
}