import { createFileRoute } from "@tanstack/react-router";
import { Shield, Eye, MessageSquare, Phone, AlertTriangle, Lock } from "lucide-react";

export const Route = createFileRoute("/legal/minors")({
  component: MinorsPage,
  head: () => ({
    meta: [
      { title: "Protection des Mineurs — SpectralFlow" },
      {
        name: "description",
        content:
          "Mesures de protection pour les utilisateurs mineurs sur SpectralFlow. Securite, moderation et controle parental.",
      },
    ],
  }),
});

function MinorsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Protection des Mineurs</h1>
      <p className="lead">
        SpectralFlow s&apos;engage a fournir un environnement sur et adapte aux utilisateurs
        mineurs. Cette page detaille les mesures de protection mises en place.
      </p>

      <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
        {[
          {
            icon: Shield,
            title: "Moderation renforcee",
            description: "Contenus verifies et moderes 24/7 par notre equipe.",
          },
          {
            icon: Eye,
            title: "Controle parental",
            description: "Les parents peuvent superviser l'activite de leur enfant.",
          },
          {
            icon: Lock,
            title: "Parametres restrictifs",
            description: "Parametres de confidentialite renforces par defaut.",
          },
          {
            icon: AlertTriangle,
            title: "Signalement prioritaire",
            description: "Signalements impliquant des mineurs traites en priorite.",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-border bg-card/50 p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <feature.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-3 font-semibold text-foreground">{feature.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      <section>
        <h2>1. Tranches d&apos;age et restrictions</h2>
        
        <h3>1.1 Moins de 13 ans</h3>
        <p>
          Conformement au RGPD et a la loi COPPA americaine, les utilisateurs de moins de 13 ans
          doivent obtenir le <strong>consentement parental verifie</strong> avant de pouvoir utiliser
          SpectralFlow. Sans ce consentement :
        </p>
        <ul>
          <li>Le compte est en mode restreint</li>
          <li>Aucune publication n&apos;est possible</li>
          <li>Les appels video et lives sont desactives</li>
          <li>La messagerie est limitee aux contacts approuves par un parent</li>
        </ul>

        <h3>1.2 De 13 a 15 ans</h3>
        <ul>
          <li>Profil prive par defaut</li>
          <li>Messages limites aux amis confirmes</li>
          <li>Contenus sensibles masques automatiquement</li>
          <li>Appels video limites aux contacts approuves</li>
        </ul>

        <h3>1.3 De 16 a 17 ans</h3>
        <ul>
          <li>Profil prive par defaut (modifiable)</li>
          <li>Acces a toutes les fonctionnalites non-adultes</li>
          <li>Avertissements supplementaires pour les contenus sensibles</li>
        </ul>
      </section>

      <section>
        <h2>2. Parametres de confidentialite par defaut</h2>
        <p>Pour les comptes mineurs, les parametres par defaut sont :</p>
        <table>
          <thead>
            <tr>
              <th>Parametre</th>
              <th>Adulte</th>
              <th>Mineur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Visibilite du profil</td>
              <td>Public</td>
              <td>Prive</td>
            </tr>
            <tr>
              <td>Qui peut envoyer des messages</td>
              <td>Tout le monde</td>
              <td>Amis uniquement</td>
            </tr>
            <tr>
              <td>Qui peut appeler</td>
              <td>Tout le monde</td>
              <td>Amis uniquement</td>
            </tr>
            <tr>
              <td>Apparaitre dans les suggestions</td>
              <td>Oui</td>
              <td>Non</td>
            </tr>
            <tr>
              <td>Localisation visible</td>
              <td>Optionnel</td>
              <td>Desactive</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>3. Moderation des contenus</h2>
        <h3>3.1 Filtrage automatique</h3>
        <ul>
          <li>Detection automatique des contenus inappropries (IA)</li>
          <li>Filtrage des mots-cles sensibles dans les messages</li>
          <li>Blocage des images explicites</li>
          <li>Analyse des comportements suspects (grooming, harcelement)</li>
        </ul>

        <h3>3.2 Moderation humaine</h3>
        <ul>
          <li>Equipe de moderation formee a la protection des mineurs</li>
          <li>Verification manuelle des contenus signales</li>
          <li>Intervention rapide en cas de situation a risque</li>
          <li>Cooperation avec les autorites si necessaire</li>
        </ul>
      </section>

      <section>
        <h2>4. Appels video et lives</h2>
        <div className="not-prose my-6 flex items-start gap-4 rounded-lg border border-destructive/50 bg-destructive/10 p-4">
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
          <div>
            <h4 className="font-semibold text-destructive">Restrictions importantes</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Les appels video et les lives impliquant des mineurs sont soumis a des regles strictes
              pour prevenir tout abus.
            </p>
          </div>
        </div>

        <h3>4.1 Appels video</h3>
        <ul>
          <li>Mineurs de moins de 13 ans : appels desactives sans consentement parental</li>
          <li>13-15 ans : appels limites aux amis confirmes</li>
          <li>Pas d&apos;appels avec des adultes inconnus</li>
          <li>Option d&apos;enregistrement pour surveillance parentale (avec consentement)</li>
        </ul>

        <h3>4.2 Lives</h3>
        <ul>
          <li>Moins de 16 ans : impossible de lancer un live</li>
          <li>16-17 ans : lives possibles avec restrictions</li>
          <li>Moderation en temps reel des chats de live</li>
          <li>Possibilite de couper un live instantanement en cas de probleme</li>
        </ul>
      </section>

      <section>
        <h2>5. Signalement et urgences</h2>
        <h3>5.1 Systeme de signalement</h3>
        <p>
          Tout utilisateur peut signaler un contenu ou un comportement inapproprie. Les signalements
          impliquant des mineurs sont traites en priorite absolue.
        </p>

        <h3>5.2 Situations d&apos;urgence</h3>
        <p>En cas de situation grave (menace, exploitation, danger immediat) :</p>
        <ul>
          <li>Contactez immediatement les autorites locales (17 en France)</li>
          <li>Utilisez le bouton d&apos;urgence dans l&apos;application</li>
          <li>Notre equipe est alertee et coopere avec les forces de l&apos;ordre</li>
        </ul>

        <div className="not-prose my-6 flex items-start gap-4 rounded-lg border border-primary/50 bg-primary/10 p-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <h4 className="font-semibold text-foreground">Numeros d&apos;urgence</h4>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li><strong>119</strong> — Enfance en danger</li>
              <li><strong>3018</strong> — Cyber-harcelement</li>
              <li><strong>17</strong> — Police/Gendarmerie</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>6. Controle parental</h2>
        <p>
          Les parents d&apos;utilisateurs de moins de 13 ans ont acces a des outils de supervision :
        </p>
        <ul>
          <li>Tableau de bord de l&apos;activite de l&apos;enfant</li>
          <li>Validation des demandes d&apos;amis</li>
          <li>Limites de temps d&apos;utilisation</li>
          <li>Revocation du consentement a tout moment</li>
          <li>Notifications d&apos;activite suspecte</li>
        </ul>
        <p>
          Consultez notre page{" "}
          <a href="/legal/parental-consent">Consentement Parental</a> pour plus de details.
        </p>
      </section>

      <section>
        <h2>7. Education et sensibilisation</h2>
        <p>SpectralFlow s&apos;engage dans la prevention :</p>
        <ul>
          <li>Messages de sensibilisation dans l&apos;application</li>
          <li>Ressources educatives sur la securite en ligne</li>
          <li>Guides pour les parents</li>
          <li>Partenariats avec des associations de protection de l&apos;enfance</li>
        </ul>
      </section>

      <section>
        <h2>8. Contact</h2>
        <p>
          Pour toute question concernant la protection des mineurs :{" "}
          <a href="mailto:mineurs@spectralflow.app">mineurs@spectralflow.app</a>
        </p>
        <p>
          Pour signaler un abus ou un contenu illegal concernant un mineur :{" "}
          <a href="mailto:abuse@spectralflow.app">abuse@spectralflow.app</a>
        </p>
      </section>
    </article>
  );
}
