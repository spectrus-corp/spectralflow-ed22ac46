import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/cookies")({
  component: CookiesPage,
  head: () => ({
    meta: [
      { title: "Politique des Cookies — SpectralFlow" },
      {
        name: "description",
        content:
          "Politique des cookies de SpectralFlow. Informations sur les cookies utilises et comment les gerer.",
      },
    ],
  }),
});

function CookiesPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Politique des Cookies</h1>
      <p className="lead">Derniere mise a jour : 20 mai 2026</p>

      <section>
        <h2>1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
        <p>
          Un cookie est un petit fichier texte stocke sur votre appareil lorsque vous visitez un
          site web. Les cookies permettent au site de se souvenir de vos actions et preferences
          (comme la connexion, la langue, la taille de police, etc.) sur une periode donnee.
        </p>
      </section>

      <section>
        <h2>2. Types de cookies utilises</h2>

        <h3>2.1 Cookies strictement necessaires</h3>
        <p>
          Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas etre
          desactives.
        </p>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Finalite</th>
              <th>Duree</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sb-access-token</td>
              <td>Authentification Supabase</td>
              <td>Session</td>
            </tr>
            <tr>
              <td>sb-refresh-token</td>
              <td>Renouvellement de session</td>
              <td>7 jours</td>
            </tr>
          </tbody>
        </table>

        <h3>2.2 Cookies de preferences</h3>
        <p>Ces cookies memorisent vos choix et preferences d&apos;affichage.</p>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Finalite</th>
              <th>Duree</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>theme</td>
              <td>Preference de theme (sombre/clair)</td>
              <td>1 an</td>
            </tr>
            <tr>
              <td>notification-consent</td>
              <td>Choix des notifications</td>
              <td>1 an</td>
            </tr>
            <tr>
              <td>cookie-consent</td>
              <td>Votre choix concernant les cookies</td>
              <td>1 an</td>
            </tr>
          </tbody>
        </table>

        <h3>2.3 Cookies analytiques</h3>
        <p>
          Ces cookies nous aident a comprendre comment les visiteurs interagissent avec notre site.
          Les donnees sont anonymisees.
        </p>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Finalite</th>
              <th>Duree</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_analytics_id</td>
              <td>Identification anonyme pour statistiques</td>
              <td>1 an</td>
            </tr>
            <tr>
              <td>_session_id</td>
              <td>Suivi de session anonymise</td>
              <td>Session</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>3. Stockage local (Local Storage)</h2>
        <p>
          En plus des cookies, nous utilisons le stockage local de votre navigateur pour certaines
          fonctionnalites :
        </p>
        <ul>
          <li><strong>Brouillons de posts :</strong> sauvegarde temporaire de vos publications non terminees</li>
          <li><strong>Projets video :</strong> donnees de l&apos;editeur video en cours</li>
          <li><strong>Parametres d&apos;interface :</strong> preferences d&apos;affichage</li>
        </ul>
        <p>
          Ces donnees restent uniquement sur votre appareil et ne sont pas envoyees a nos serveurs.
        </p>
      </section>

      <section>
        <h2>4. Gestion des cookies</h2>
        <h3>4.1 Via notre bandeau de cookies</h3>
        <p>
          Lors de votre premiere visite, un bandeau vous permet d&apos;accepter ou de refuser les
          cookies non essentiels. Vous pouvez modifier vos choix a tout moment dans les parametres
          de votre compte.
        </p>

        <h3>4.2 Via votre navigateur</h3>
        <p>
          Vous pouvez egalement gerer les cookies directement dans les parametres de votre
          navigateur :
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          <strong>Attention :</strong> La desactivation des cookies essentiels peut empecher le bon
          fonctionnement de certaines fonctionnalites du site.
        </p>
      </section>

      <section>
        <h2>5. Cookies tiers</h2>
        <p>
          Nous integrons des contenus de plateformes tierces (videos YouTube embedees) qui peuvent
          deposer leurs propres cookies. Ces cookies sont regis par les politiques de confidentialite
          de ces services tiers.
        </p>
        <ul>
          <li>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Politique de confidentialite de Google/YouTube
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Cookies et mineurs</h2>
        <p>
          Pour les utilisateurs de moins de 13 ans, nous minimisons l&apos;utilisation des cookies
          aux seuls cookies strictement necessaires au fonctionnement du service. Aucun cookie de
          ciblage publicitaire ou de tracking avance n&apos;est utilise pour les comptes mineurs.
        </p>
      </section>

      <section>
        <h2>7. Modifications</h2>
        <p>
          Cette politique des cookies peut etre mise a jour. La date de derniere mise a jour est
          indiquee en haut de cette page.
        </p>
      </section>

      <section>
        <h2>8. Contact</h2>
        <p>
          Pour toute question concernant notre utilisation des cookies :{" "}
          <a href="mailto:privacy@spectralflow.app">privacy@spectralflow.app</a>
        </p>
      </section>
    </article>
  );
}
