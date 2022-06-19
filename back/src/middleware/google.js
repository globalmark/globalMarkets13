let passport=require('passport');
let GoogleStrategy= require('passport-google-oauth').OAuth2Strategy


let emails=["danielperco4@gmail.com"];
passport.use={
    "auth-google":
    new GoogleStrategy (
        {
            clientID:'179971198990-9qvllpo7gecm4rgopq4ua59pbebgq0do.apps.googleusercontent.com',
            clientSecret:'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',
            callbackURL:'http://localhost:9000/authGoogle/google'
        },
        function (accessToken,refreshToken,profile,done){
            const response=emails.includes(profile.emails[0].value);
             if(response){
                done(null,profile);
             }else{
                emails.push(profile.emails[0].value);
                done(null,profile)
             }
        }

    )   
}