<template lang="fr">
<h2 class='i'>Inscription</h2>
<form method="post" action="" class="formulaire">
 <label for="pseudo">Nom</label>
 <input type="text" id="nom" name="nom" placeholder="Votre nom"  required><br>

 <label for="prenom">Prenom</label>
 <input type="text" id="prenom" name="prenom" placeholder="Votre prenom" required><br>

 <label for="email">Email</label>
 <input type="email" id="email" name="email" placeholder="Votre email"  required><br>

 <label for="mdp">Mot de passe</label>
 <input type="password" id="mdp" name="mdp" placeholder="Votre mot de passe"  required><br>

 <input type="submit" value="S'inscrire" required>
 <input type="submit" value="Se connecter" required>
</form>

</template>
<script>


export default {
 
}
</script>
<style >


</style>