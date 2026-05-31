import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Politique de Confidentialite — SpectralFlow" },
      {
        name: "description",
        content:
          "Politique de confidentialite de SpectralFlow. Comment nous collectons, utilisons et protegeons vos donnees personnelles conformement au RGPD.",
      },
    ],
  }),
});

function PrivacyPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Politique de Confidentialite</h1>
      <p className="lead">Derniere mise a jour : 20 mai 2026</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          SpectralFlow s&apos;engage a proteger votre vie privee. Cette politique de confidentialite
          explique comment nous collectons, utilisons, stockons et protegeons vos donnees
          personnelles conformement au Reglement General sur la Protection des Donnees (RGPD) et a
          la loi Informatique et Libertes.
        </p>
      </section>

      <section>
        <h2>2. Responsable du traitement</h2>
        <p>Le responsable du traitement de vos donnees est :</p>
        <address className="not-italic">
          SpectralFlow SAS<br />
          123 Avenue du Numerique<br />
          75001 Paris, France<br />
          Email : <a href="mailto:dpo@spectralflow.app">dpo@spectralflow.app</a>
        </address>
      </section>

      <section>
        <h2>3. Donnees collectees</h2>
        <h3>3.1 Donnees que vous nous fournissez</h3>
        <ul>
          <li><strong>Informations de compte :</strong> nom d&apos;utilisateur, adresse email, mot de passe (chiffre), date de naissance</li>
          <li><strong>Informations de profil :</strong> photo de profil, biographie, liens sociaux</li>
          <li><strong>Contenus :</strong> posts, videos, commentaires, messages prives</li>
          <li><strong>Communications :</strong> echanges avec notre support</li>
        </ul>

        <h3>3.2 Donnees collectees automatiquement</h3>
        <ul>
          <li><strong>Donnees techniques :</strong> adresse IP, type de navigateur, systeme d&apos;exploitation</li>
          <li><strong>Donnees d&apos;utilisation :</strong> pages visitees, duree des sessions, interactions</li>
          <li><strong>Donnees de geolocalisation :</strong> pays/region (basee sur l&apos;IP)</li>
        </ul>

        <h3>3.3 Donnees specifiques aux mineurs</h3>
        <p>Pour les utilisateurs de moins de 13 ans :</p>
        <ul>
          <li>Email du parent/tuteur legal</li>
          <li>Statut du consentement parental</li>
          <li>Date du consentement</li>
        </ul>
      </section>

      <section>
        <h2>4. Bases legales du traitement</h2>
        <p>Nous traitons vos donnees sur les bases legales suivantes :</p>
        <ul>
          <li><strong>Execution du contrat :</strong> fourniture du service SpectralFlow</li>
          <li><strong>Consentement :</strong> pour les cookies non essentiels et le marketing</li>
          <li><strong>Interet legitime :</strong> securite, prevention de la fraude, amelioration du service</li>
          <li><strong>Obligation legale :</strong> conservation des donnees pour des raisons legales</li>
        </ul>
      </section>

      <section>
        <h2>5. Utilisation des donnees</h2>
        <p>Vos donnees sont utilisees pour :</p>
        <ul>
          <li>Fournir et gerer votre compte</li>
          <li>Permettre les fonctionnalites sociales (posts, messages, appels, lives)</li>
          <li>Personnaliser votre experience</li>
          <li>Envoyer des notifications (avec votre accord)</li>
          <li>Assurer la securite et prevenir les abus</li>
          <li>Ameliorer notre service via des analyses anonymisees</li>
          <li>Respecter nos obligations legales</li>
        </ul>
      </section>

      <section>
        <h2>6. Partage des donnees</h2>
        <h3>6.1 Avec d&apos;autres utilisateurs</h3>
        <p>
          Selon vos parametres de confidentialite, certaines informations peuvent etre visibles par
          d&apos;autres utilisateurs (profil public, posts publics, etc.).
        </p>

        <h3>6.2 Avec des tiers</h3>
        <p>Nous partageons vos donnees avec :</p>
        <ul>
          <li><strong>Supabase :</strong> hebergement de la base de donnees et authentification</li>
          <li><strong>Vercel :</strong> hebergement de l&apos;application</li>
          <li><strong>Services d&apos;analyse :</strong> donnees anonymisees uniquement</li>
        </ul>
        <p>
          Nous ne vendons jamais vos donnees personnelles a des tiers a des fins publicitaires.
        </p>

        <h3>6.3 Avec les autorites</h3>
        <p>
          Nous pouvons divulguer vos donnees si requis par la loi ou pour proteger la securite des
          utilisateurs.
        </p>
      </section>

      <section>
        <h2>7. Conservation des donnees</h2>
        <ul>
          <li><strong>Donnees de compte :</strong> conservees tant que le compte est actif</li>
          <li><strong>Contenus supprimes :</strong> supprimes dans les 30 jours</li>
          <li><strong>Comptes inactifs :</strong> supprimes apres 2 ans d&apos;inactivite (avec preavis)</li>
          <li><strong>Donnees de journalisation :</strong> 12 mois maximum</li>
          <li><strong>Donnees legales :</strong> selon les obligations legales applicables</li>
        </ul>
      </section>

      <section>
        <h2>8. Securite des donnees</h2>
        <p>Nous mettons en oeuvre des mesures de securite robustes :</p>
        <ul>
          <li>Chiffrement TLS pour toutes les communications</li>
          <li>Chiffrement des mots de passe (bcrypt)</li>
          <li>Acces restreint aux donnees (principe du moindre privilege)</li>
          <li>Audits de securite reguliers</li>
          <li>Politique de securite des donnees (RLS) au niveau de la base de donnees</li>
        </ul>
      </section>

      <section>
        <h2>9. Vos droits (RGPD)</h2>
        <p>Conformement au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li><strong>Droit d&apos;acces :</strong> obtenir une copie de vos donnees</li>
          <li><strong>Droit de rectification :</strong> corriger vos donnees inexactes</li>
          <li><strong>Droit a l&apos;effacement :</strong> demander la suppression de vos donnees</li>
          <li><strong>Droit a la portabilite :</strong> recevoir vos donnees dans un format structure</li>
          <li><strong>Droit d&apos;opposition :</strong> vous opposer a certains traitements</li>
          <li><strong>Droit a la limitation :</strong> limiter le traitement de vos donnees</li>
        </ul>
        <p>
          Pour exercer ces droits, contactez-nous a{" "}
          <a href="mailto:dpo@spectralflow.app">dpo@spectralflow.app</a>. Nous repondrons dans un
          delai de 30 jours.
        </p>
      </section>

      <section>
        <h2>10. Droits specifiques des mineurs</h2>
        <p>Les mineurs et leurs parents/tuteurs beneficient de droits supplementaires :</p>
        <ul>
          <li>Les parents peuvent demander l&apos;acces aux donnees de leur enfant de moins de 13 ans</li>
          <li>Les parents peuvent revoquer le consentement a tout moment</li>
          <li>Les parents peuvent demander la suppression des donnees de leur enfant</li>
          <li>Les mineurs peuvent demander la suppression de contenus qu&apos;ils regrettent</li>
        </ul>
      </section>

      <section>
        <h2>11. Transferts internationaux</h2>
        <p>
          Vos donnees peuvent etre transferees vers des serveurs situes hors de l&apos;UE. Dans ce
          cas, nous nous assurons que des garanties appropriees sont en place (clauses contractuelles
          types, decisions d&apos;adequation).
        </p>
      </section>

      <section>
        <h2>12. Cookies</h2>
        <p>
          Pour plus d&apos;informations sur notre utilisation des cookies, consultez notre{" "}
          <a href="/legal/cookies">Politique des Cookies</a>.
        </p>
      </section>

      <section>
        <h2>13. Modifications</h2>
        <p>
          Nous pouvons mettre a jour cette politique. Les modifications importantes seront notifiees
          par email ou notification dans l&apos;application.
        </p>
      </section>

      <section>
        <h2>14. Reclamations</h2>
        <p>
          Si vous estimez que vos droits ne sont pas respectes, vous pouvez deposer une reclamation
          aupres de la CNIL :{" "}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            www.cnil.fr
          </a>
        </p>
      </section>

      <section>
        <h2>15. Contact</h2>
        <p>
          Delegue a la Protection des Donnees (DPO) :{" "}
          <a href="mailto:dpo@spectralflow.app">dpo@spectralflow.app</a>
        </p>
      </section>
    </article>
  );
}
