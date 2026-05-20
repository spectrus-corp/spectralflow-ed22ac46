import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Conditions Generales d'Utilisation — SpectralFlow" },
      {
        name: "description",
        content:
          "Conditions Generales d'Utilisation de SpectralFlow. Regles, droits et responsabilites des utilisateurs.",
      },
    ],
  }),
});

function TermsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Conditions Generales d&apos;Utilisation</h1>
      <p className="lead">Derniere mise a jour : 20 mai 2026</p>

      <section>
        <h2>1. Objet</h2>
        <p>
          Les presentes Conditions Generales d&apos;Utilisation (CGU) regissent l&apos;utilisation
          de la plateforme SpectralFlow, un reseau social permettant le partage de contenus video,
          les appels video/audio, les diffusions en direct (lives) et la messagerie instantanee.
        </p>
        <p>
          En accedant ou en utilisant SpectralFlow, vous acceptez d&apos;etre lie par ces CGU. Si
          vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser notre service.
        </p>
      </section>

      <section>
        <h2>2. Conditions d&apos;acces</h2>
        <h3>2.1 Age minimum</h3>
        <p>
          SpectralFlow est accessible aux utilisateurs de tout age sous certaines conditions :
        </p>
        <ul>
          <li>
            <strong>Utilisateurs de 13 ans et plus :</strong> Peuvent creer un compte et utiliser
            toutes les fonctionnalites du service.
          </li>
          <li>
            <strong>Utilisateurs de moins de 13 ans :</strong> Peuvent creer un compte UNIQUEMENT
            avec le consentement parental verifie. Sans ce consentement, le compte sera restreint
            jusqu&apos;a validation par un parent ou tuteur legal.
          </li>
          <li>
            <strong>Utilisateurs de moins de 18 ans :</strong> Sont consideres comme mineurs et
            beneficient de protections supplementaires detaillees dans notre{" "}
            <a href="/legal/minors">Politique de Protection des Mineurs</a>.
          </li>
        </ul>

        <h3>2.2 Inscription</h3>
        <p>Pour creer un compte, vous devez fournir :</p>
        <ul>
          <li>Une adresse email valide</li>
          <li>Un nom d&apos;utilisateur unique</li>
          <li>Un mot de passe securise</li>
          <li>Votre date de naissance (obligatoire)</li>
        </ul>
        <p>
          Vous vous engagez a fournir des informations exactes et a jour. Toute fausse declaration
          sur votre age peut entrainer la suspension ou la suppression de votre compte.
        </p>
      </section>

      <section>
        <h2>3. Utilisation du service</h2>
        <h3>3.1 Comportement acceptable</h3>
        <p>En utilisant SpectralFlow, vous vous engagez a :</p>
        <ul>
          <li>Respecter les autres utilisateurs et leur dignite</li>
          <li>Ne pas publier de contenus illegaux, haineux, violents ou a caractere sexuel</li>
          <li>Ne pas harceler, menacer ou intimider d&apos;autres utilisateurs</li>
          <li>Ne pas usurper l&apos;identite d&apos;une autre personne</li>
          <li>Ne pas diffuser de fausses informations de maniere deliberee</li>
          <li>Respecter la propriete intellectuelle d&apos;autrui</li>
        </ul>

        <h3>3.2 Contenus interdits</h3>
        <p>Les contenus suivants sont strictement interdits :</p>
        <ul>
          <li>Pornographie ou contenus sexuellement explicites</li>
          <li>Violence gratuite ou incitation a la violence</li>
          <li>Discours de haine bases sur la race, la religion, le genre, l&apos;orientation sexuelle, etc.</li>
          <li>Harcelement ou cyber-harcelement</li>
          <li>Contenus promouvant l&apos;automutilation ou le suicide</li>
          <li>Contenus terroristes ou extremistes</li>
          <li>Contenus pedopornographiques (tolerance zero)</li>
          <li>Spam, arnaques ou tentatives de phishing</li>
        </ul>

        <h3>3.3 Appels video et lives</h3>
        <p>Lors de l&apos;utilisation des fonctionnalites d&apos;appel video et de live :</p>
        <ul>
          <li>Vous ne devez pas enregistrer les appels sans le consentement de tous les participants</li>
          <li>Vous devez respecter les memes regles de conduite que pour les autres contenus</li>
          <li>Les lives sont soumis a moderation et peuvent etre interrompus en cas de violation</li>
        </ul>
      </section>

      <section>
        <h2>4. Propriete intellectuelle</h2>
        <h3>4.1 Vos contenus</h3>
        <p>
          Vous conservez tous les droits sur les contenus que vous publiez sur SpectralFlow.
          Cependant, en publiant du contenu, vous accordez a SpectralFlow une licence mondiale, non
          exclusive et gratuite pour afficher, distribuer et promouvoir ce contenu dans le cadre du
          service.
        </p>

        <h3>4.2 Notre propriete</h3>
        <p>
          SpectralFlow, son logo, son design et tous les elements graphiques sont proteges par le
          droit d&apos;auteur. Toute reproduction non autorisee est interdite.
        </p>
      </section>

      <section>
        <h2>5. Moderation et sanctions</h2>
        <p>SpectralFlow se reserve le droit de :</p>
        <ul>
          <li>Supprimer tout contenu violant ces CGU</li>
          <li>Suspendre temporairement ou definitivement les comptes en infraction</li>
          <li>Signaler aux autorites competentes tout contenu illegal</li>
          <li>Cooperer avec les forces de l&apos;ordre dans le cadre d&apos;enquetes</li>
        </ul>
        <p>
          Les utilisateurs peuvent signaler tout contenu problematique via le systeme de signalement
          integre. Chaque signalement est examine par notre equipe de moderation.
        </p>
      </section>

      <section>
        <h2>6. Protection des donnees</h2>
        <p>
          La collecte et le traitement de vos donnees personnelles sont regis par notre{" "}
          <a href="/legal/privacy">Politique de Confidentialite</a>, conforme au Reglement General
          sur la Protection des Donnees (RGPD).
        </p>
      </section>

      <section>
        <h2>7. Limitation de responsabilite</h2>
        <p>
          SpectralFlow est fourni &quot;tel quel&quot;. Nous ne garantissons pas que le service sera
          disponible de maniere ininterrompue ou exempt d&apos;erreurs. Nous ne sommes pas
          responsables des contenus publies par les utilisateurs.
        </p>
      </section>

      <section>
        <h2>8. Modifications des CGU</h2>
        <p>
          SpectralFlow peut modifier ces CGU a tout moment. Les utilisateurs seront informes des
          modifications significatives par email ou notification dans l&apos;application. La
          continuation de l&apos;utilisation du service apres modification vaut acceptation des
          nouvelles conditions.
        </p>
      </section>

      <section>
        <h2>9. Droit applicable et litiges</h2>
        <p>
          Ces CGU sont regies par le droit francais. En cas de litige, les tribunaux francais seront
          competents, sans prejudice des droits des consommateurs residant dans l&apos;Union
          Europeenne.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <p>
          Pour toute question concernant ces CGU, contactez-nous a :{" "}
          <a href="mailto:legal@spectralflow.app">legal@spectralflow.app</a>
        </p>
      </section>
    </article>
  );
}
