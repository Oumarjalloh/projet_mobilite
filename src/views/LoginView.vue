<template lang="fr">
<div class="container">
    <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true">

            <div class="signup">
                <form>
                    <label class="lbl" for="chk" aria-hidden="true">Créer un compte</label>
                    <label class="lbl1" for="chk" aria-hidden="true">Pseudo</label>
                    <input type="text" name="txt"  required="" class="input">
                    <label class="lbl1" for="chk" aria-hidden="true">E-mail</label>
                    <input type="email" name="email"  required="" class="input">
                    <label class="lbl1" for="chk" aria-hidden="true">Mot de passe:</label>
                    <input type="password" name="mdp" required="" class="input">
                    <button class="ipt">Créer un compte</button>
                </form>
            </div>

            <div class="login">
                <form>
                    <label class="lbl2" for="chk" aria-hidden="true">Se connecter</label>
                    <label class="lbl3" for="chk" aria-hidden="true">Pseudo/E-mail</label>
                    <input type="email" name="email" required="" class="input">
                    <label class="lbl3" for="chk" aria-hidden="true">Mot de passe:</label>
                    <input type="password" name="mdp" required="" class="input">
                    <button class='connect'>Me connecter</button>
                </form>
            </div>
    </div>
    
    
</div>


</template>
<script>


export default {
 
}
</script>
<style >


.container{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
}

.main{
    width: 350px;
    height: 500px;
    background: #fff;
    overflow: hidden;
    border-radius: 10px;
}
#chk{
    display: none;
}
.signup{
    position: relative;
    width:100%;
    height: 100%;
    margin: 10px;
}

.lbl{
    color: #573b8a;
    font-size: 1.5em;
    justify-content: center;
    display: flex;
    margin: 25px 50px 25px 50px;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
}

.lbl1{
    color: #573b8a;
    font-size: 17px;
    justify-content: left;
}
.lbl2{
    padding: 15px 0px 37px 0px;
}
.lbl3{
    justify-content: left;
    font-size: 20px;
    margin: 0% 30% 0% 8%;
    width: 60%;
}

.login label{
    color: #fff;
    font-size: 24px;
    justify-content: center;
    display: flex;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
}
.input{
    width: 70%;
    height: 10px;
    background-color: #EBF0FF;
    justify-content: center;
    display: flex;
    margin: 10px auto;
    padding: 15px 20px 17px 20px;
    border: none;
    outline: none;
    border-radius: 5px;
}


.connect{
    width: 40%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #FF715B;
    background: #EBF0FF;
    font-size: 1em;
    font-weight: bold;
    margin-top: 40px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .2s ease-in;
    cursor: pointer;
}

.ipt{
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #573b8a;
    background: #FF715B;
    font-size: 1em;
    font-weight: bold;
    margin-top: 40px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .2s ease-in;
    cursor: pointer;
}
.login{
    height: 700px;
    background: #AEC3FF;
    border-radius: 10% / 5%;
    transform: translateY(-107px);
    transition: .5s ease-in-out;
}
.login label{
    color: #573b8a;
    transform: scale(.6);
}

#chk:checked ~ .login{
    transform: translateY(-450px);
}
#chk:checked ~ .login label{
    transform: scale(0.8);
}
#chk:checked ~ .signup label{
    transform: scale(.6);
}


</style>