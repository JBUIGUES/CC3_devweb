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
Elle a ajouté les fichiers nodes et le package.


**Question 1.7** quelles sont les différences entre les scripts `http-dev` et `http-prod` ?
NODE_ENV=development est utilisé pour le développement actif de l'application, tandis que NODE_ENV=production est utilisé pour la mise en production de l'application.


**Question 1.8** donner les codes HTTP reçus par votre navigateur pour chacune des quatre pages précédentes.
Elles rendent toutes 404: NOT FOUND sauf "http://localhost:8000/random.html" qui rend "40"

**Question 2.1** donner les URL des documentations de chacun des modules installés par la commande précédente.
https://tidelift.com/funding/github/npm/loglevel
├─┬ https://opencollective.com/eslint
│ ├── https://github.com/sponsors/nzakas
│ ├── https://github.com/sponsors/epoberezkin
│ ├─┬ https://github.com/chalk/chalk?sponsor=1
│ │ └── https://github.com/chalk/ansi-styles?sponsor=1
│ ├── https://github.com/sponsors/feross
│ └── https://github.com/sponsors/isaacs
├─┬ https://github.com/sindresorhus/
│ └── https://github.com/sponsors/sibiraj-s
├─┬ https://opencollective.com/nodemon
│ └── https://paulmillr.com/funding/
├── https://github.com/prettier/prettier?sponsor=1
├── https://github.com/sponsors/ljharb
├── https://opencollective.com/typescript-eslint
└── https://github.com/sponsors/mysticatea


**Question 2.2** vérifier que les trois routes fonctionnent.
PS C:\Users\jolan\OneDrive\Documents\devweb\CC3> npm run express-prod

> devweb-tp5@1.0.0 express-prod
> cross-env NODE_ENV=production node devweb-tp5/server-http.mjs

NODE_ENV = production
Server is running on http://localhost:8000
^C^CTerminer le programme de commandes (O/N) ? o
PS C:\Users\jolan\OneDrive\Documents\devweb\CC3> npm run express-dev 

> devweb-tp5@1.0.0 express-dev
> cross-env NODE_ENV=development nodemon devweb-tp5/server-http.mjs

[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node devweb-tp5/server-http.mjs`
NODE_ENV = development
Server is running on http://localhost:8000

et les 3 types de pages répondent normalement.


**Question 2.3** lister les en-têtes des réponses fournies par Express. Lesquelles sont nouvelles par rapport au serveur HTTP ?
Connection:keep-alive
Content-Type:text/html
Date:Thu, 28 Sep 2023 10:04:50 GMT
Keep-Alive:timeout=5
Transfer-Encoding:chunked
rien n'a change


**Question 2.4** quand l'événement `listening` est-il déclenché ?
l'événement "listening" sera déclenché lorsque le serveur sera en cours d'écoute sur le port 8000 de l'adresse "localhost".


**Question 2.5** indiquer quelle est l'option (activée par défaut) qui redirige `/` vers `/index.html` ?
Cette fonctionnalité est appelée la "redirection par défaut" et elle est activée pour assurer que les requêtes vers le répertoire racine ("/") sont gérées en redirigeant automatiquement vers la page par défaut, qui est souvent "index.html".


**Question 2.6** visiter la page d'accueil puis rafraichir (Ctrl+R) et _ensuite_ **forcer** le rafraichissement (Ctrl+Shift+R). Quels sont les codes HTTP sur le fichier `style.css` ? Justifier.
GET http://localhost:8000/static/style.css net::ERR_ABORTED 404 (Not Found)
favicon.ico:1     GET http://localhost:8000/favicon.ico 404 (Not Found)

css:
Request URL:http://localhost:8000/static/style.css
Request Method:GET
Status Code:404 Not Found
Remote Address:[::1]:8000
Referrer Policy:strict-origin-when-cross-origin

Connection:keep-alive
Content-Type:text/html
Date:Thu, 28 Sep 2023 10:54:40 GMT
Keep-Alive:timeout=5
Transfer-Encoding:chunked




**Question 2.7** vérifier que l'affichage change bien entre le mode _production_ et le mode _development_.
