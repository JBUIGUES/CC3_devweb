**Question 1.1** donner la liste des en-têtes de la réponse HTTP du serveur.
Connection: keep-alive
Date: Wed, 27 Sep 2023 21:43:11 GMT
Keep-Alive: timeout=5
Transfer-Encoding: chunked


**Question 1.2** donner la liste des en-têtes qui ont changé depuis la version précédente.
Connection:keep-alive
Content-Length:20
Content-Type:application/json
Date:Wed, 27 Sep 2023 22:02:32 GMT
Keep-Alive:timeout=5


**Question 1.3** que contient la réponse reçue par le client ?
Erreur ENOENT
Server is running on http://localhost:8000
[Error: ENOENT: no such file or directory, open 'C:\Users\jolan\OneDrive\Documents\devweb\CC3\UsersjolanOneDriveDocumentsdevwebCC3index.html''] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: "C:\\Users\\jolan\\OneDrive\\Documents\\devweb\\CC3\\UsersjolanOneDriveDocumentsdevwebCC3index.html'"
}
j'ai changé une partie du readfile et j'ai ça :

Connection:keep-alive
Content-Type:text/html
Date:Wed, 27 Sep 2023 22:15:41 GMT
Keep-Alive:timeout=5
Transfer-Encoding:chunked


**Question 1.4** quelle est l'erreur affichée dans la console ? Retrouver sur <https://nodejs.org/api> le code d'erreur affiché.
ENOENT (No such file or directory): Commonly raised by fs operations to indicate that a component of the specified pathname does not exist. No entity (file or directory) could be found by the given path.



**Question 1.5** donner le code de `requestListener()` modifié _avec gestion d'erreur_ en `async/await`.

'''js
async function requestListener(_request, response) {
  try {
    const contents = await fs.readFile("devweb-tp5/index.html", "utf8");
    response.setHeader("Content-Type", "text/html");
    response.writeHead(200);
    response.end(contents);
  } catch (error) {
    console.error(error);
    response.writeHead(500, { "Content-Type": "text/plain" });
    response.end("Internal Server Error");
  }
}
'''

**Question 1.6** indiquer ce que cette commande a modifié dans votre projet.

**Question 1.7** quelles sont les différences entre les scripts `http-dev` et `http-prod` ?

**Question 1.8** donner les codes HTTP reçus par votre navigateur pour chacune des quatre pages précédentes.


**Question 2.1** donner les URL des documentations de chacun des modules installés par la commande précédente.

**Question 2.2** vérifier que les trois routes fonctionnent.

**Question 2.3** lister les en-têtes des réponses fournies par Express. Lesquelles sont nouvelles par rapport au serveur HTTP ?

**Question 2.4** quand l'événement `listening` est-il déclenché ?

**Question 2.5** indiquer quelle est l'option (activée par défaut) qui redirige `/` vers `/index.html` ?

**Question 2.6** visiter la page d'accueil puis rafraichir (Ctrl+R) et _ensuite_ **forcer** le rafraichissement (Ctrl+Shift+R). Quels sont les codes HTTP sur le fichier `style.css` ? Justifier.

**Question 2.7** vérifier que l'affichage change bien entre le mode _production_ et le mode _development_.

## Conclusion

À ce stade du tutoriel, vous avez vues les principales étapes de la création d'une application Node.js/Express.
Ces étapes seront déjà réalisées dans le projet de départ du [TP6](../TP6).

