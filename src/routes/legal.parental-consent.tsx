import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle, Clock, XCircle, Mail, Shield } from "lucide-react";

export const Route = createFileRoute("/legal/parental-consent")({
  component: ParentalConsentPage,
  head: () => ({
    meta: [
      { title: "Consentement Parental (COPPA) — SpectralFlow" },
      {
        name: "description",
        content:
          "Processus de consentement parental pour les utilisateurs de moins de 13 ans sur SpectralFlow. Conformite COPPA et RGPD.",
      },
    ],
  }),
});

function ParentalConsentPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Consentement Parental</h1>
      <p className="lead">
        Conformement au Children&apos;s Online Privacy Protection Act (COPPA) et au RGPD, les
        utilisateurs de moins de 13 ans doivent obtenir le consentement verifie de leur
        parent ou tuteur legal pour utiliser SpectralFlow.
      </p>

      <div className="not-prose my-8 rounded-xl border border-primary/30 bg-primary/5 p-6">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold text-foreground">Pourquoi ce consentement ?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              La protection des enfants en ligne est notre priorite. Le consentement parental
              permet aux parents de controler l&apos;experience de leur enfant et de s&apos;assurer
              que SpectralFlow est utilise de maniere sure et appropriee.
            </p>
          </div>
        </div>
      </div>

      <section>
        <h2>1. Qui est concerne ?</h2>
        <p>Le consentement parental est <strong>obligatoire</strong> pour :</p>
        <ul>
          <li>Tout utilisateur age de moins de 13 ans</li>
          <li>Tout utilisateur dont l&apos;age ne peut etre verifie et qui semble mineur</li>
        </ul>
        <p>
          L&apos;age est determine par la date de naissance fournie lors de l&apos;inscription. Toute
          fausse declaration peut entrainer la suspension du compte.
        </p>
      </section>

      <section>
        <h2>2. Processus de consentement</h2>
        
        <div className="not-prose my-6 space-y-4">
          <div className="flex items-start gap-4 rounded-lg border border-border bg-card/50 p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              1
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Inscription de l&apos;enfant</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                L&apos;enfant cree un compte en fournissant son nom d&apos;utilisateur, email et
                date de naissance. Si l&apos;age calcule est inferieur a 13 ans, le compte passe
                en mode &quot;en attente de consentement&quot;.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-lg border border-border bg-card/50 p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              2
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Email au parent</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                L&apos;enfant doit fournir l&apos;adresse email de son parent ou tuteur legal.
                Un email est envoye a cette adresse contenant un lien securise de verification.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-lg border border-border bg-card/50 p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              3
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Verification parentale</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Le parent clique sur le lien et accede a une page de verification. Il doit
                confirmer son identite et accepter ou refuser le consentement.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-lg border border-border bg-card/50 p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              4
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Activation du compte</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Si le consentement est accorde, le compte de l&apos;enfant est active avec les
                protections renforcees pour mineurs. Le parent recoit un acces au tableau de
                bord parental.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>3. Etats du compte</h2>
        <div className="not-prose my-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
            <Clock className="h-6 w-6 text-yellow-500" />
            <h4 className="mt-2 font-semibold text-foreground">En attente</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Consentement demande, en attente de la reponse du parent. Compte en mode restreint.
            </p>
          </div>
          <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-4">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <h4 className="mt-2 font-semibold text-foreground">Approuve</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Consentement accorde. L&apos;enfant peut utiliser SpectralFlow avec les protections mineurs.
            </p>
          </div>
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
            <XCircle className="h-6 w-6 text-red-500" />
            <h4 className="mt-2 font-semibold text-foreground">Refuse</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Consentement refuse. Le compte reste bloque et sera supprime apres 30 jours.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>4. Fonctionnalites en mode restreint</h2>
        <p>Sans consentement parental approuve, le compte est limite a :</p>
        <table>
          <thead>
            <tr>
              <th>Fonctionnalite</th>
              <th>Disponible ?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Voir le flux public</td>
              <td>Limite</td>
            </tr>
            <tr>
              <td>Publier des posts</td>
              <td>Non</td>
            </tr>
            <tr>
              <td>Commenter</td>
              <td>Non</td>
            </tr>
            <tr>
              <td>Envoyer des messages</td>
              <td>Non</td>
            </tr>
            <tr>
              <td>Appels video/audio</td>
              <td>Non</td>
            </tr>
            <tr>
              <td>Regarder des lives</td>
              <td>Non</td>
            </tr>
            <tr>
              <td>Lancer un live</td>
              <td>Non</td>
            </tr>
            <tr>
              <td>Modifier le profil</td>
              <td>Non</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>5. Droits des parents</h2>
        <p>Une fois le consentement accorde, les parents ont acces a :</p>

        <h3>5.1 Tableau de bord parental</h3>
        <ul>
          <li>Vue d&apos;ensemble de l&apos;activite de l&apos;enfant</li>
          <li>Liste des amis et contacts</li>
          <li>Historique des sessions (heures de connexion)</li>
          <li>Alertes en cas de comportement suspect detecte</li>
        </ul>

        <h3>5.2 Controles disponibles</h3>
        <ul>
          <li>Approuver/bloquer les demandes d&apos;amis</li>
          <li>Definir des limites de temps d&apos;utilisation</li>
          <li>Activer/desactiver certaines fonctionnalites</li>
          <li>Consulter les messages (option activable)</li>
        </ul>

        <h3>5.3 Actions possibles</h3>
        <ul>
          <li><strong>Revoquer le consentement :</strong> le compte repasse en mode restreint</li>
          <li><strong>Supprimer le compte :</strong> suppression complete et immediate</li>
          <li><strong>Demander les donnees :</strong> export des donnees de l&apos;enfant</li>
        </ul>
      </section>

      <section>
        <h2>6. Verification de l&apos;identite parentale</h2>
        <p>
          Pour garantir que le consentement provient bien d&apos;un adulte responsable, nous
          utilisons plusieurs methodes de verification :
        </p>
        <ul>
          <li>Lien unique envoye par email avec expiration (48h)</li>
          <li>Question de securite personnalisee</li>
          <li>Verification de l&apos;adresse email (pas d&apos;emails jetables)</li>
          <li>Detection des tentatives de fraude (meme IP, comportement suspect)</li>
        </ul>
      </section>

      <section>
        <h2>7. Donnees collectees pour les moins de 13 ans</h2>
        <p>
          Nous collectons le minimum de donnees necessaires au fonctionnement du service :
        </p>
        <ul>
          <li>Nom d&apos;utilisateur (pas le nom reel)</li>
          <li>Adresse email (pour la connexion uniquement)</li>
          <li>Date de naissance (pour la verification d&apos;age)</li>
          <li>Email du parent (pour le consentement)</li>
          <li>Contenus publies (posts, messages, etc.)</li>
        </ul>
        <p>
          <strong>Nous ne collectons pas :</strong> localisation precise, donnees biometriques,
          identifiants publicitaires, donnees de navigation hors SpectralFlow.
        </p>
      </section>

      <section>
        <h2>8. Revocation du consentement</h2>
        <p>
          Les parents peuvent revoquer leur consentement a tout moment via :
        </p>
        <ul>
          <li>Le tableau de bord parental</li>
          <li>Un email a <a href="mailto:parents@spectralflow.app">parents@spectralflow.app</a></li>
        </ul>
        <p>
          La revocation entraine immediatement :
        </p>
        <ul>
          <li>Le passage du compte en mode restreint</li>
          <li>La suspension de toutes les fonctionnalites sociales</li>
          <li>Si aucun nouveau consentement n&apos;est donne sous 30 jours, le compte est supprime</li>
        </ul>
      </section>

      <section>
        <h2>9. Questions frequentes</h2>
        
        <h3>Mon enfant a menti sur son age, que faire ?</h3>
        <p>
          Contactez-nous immediatement a <a href="mailto:parents@spectralflow.app">parents@spectralflow.app</a>.
          Nous corrigerons l&apos;age et activerons les protections appropriees. Le compte pourra
          etre maintenu avec votre consentement.
        </p>

        <h3>Je n&apos;ai pas recu l&apos;email de consentement</h3>
        <p>
          Verifiez votre dossier spam. Si l&apos;email n&apos;y est pas, demandez un renvoi via
          le compte de votre enfant ou contactez <a href="mailto:support@spectralflow.app">support@spectralflow.app</a>.
        </p>

        <h3>Puis-je voir les messages de mon enfant ?</h3>
        <p>
          Oui, cette option est disponible dans le tableau de bord parental. Cependant, nous
          recommandons d&apos;en discuter avec votre enfant pour maintenir une relation de confiance.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <div className="not-prose my-6 flex items-start gap-4 rounded-lg border border-border bg-card/50 p-4">
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <h4 className="font-semibold text-foreground">Equipe Parents & Mineurs</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Pour toute question concernant le consentement parental ou la protection de votre
              enfant, contactez notre equipe dediee.
            </p>
            <a
              href="mailto:parents@spectralflow.app"
              className="mt-2 inline-block text-sm text-primary hover:underline"
            >
              parents@spectralflow.app
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
