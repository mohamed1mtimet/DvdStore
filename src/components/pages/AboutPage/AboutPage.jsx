import React from "react";

const AboutPage = () => {
  return (
    <div className="h-full overflow-auto p-5">
      <p>
        <strong>Forward to the Past</strong>
      </p>
      <p>
        <strong>Énoncé</strong>
      </p>
      <p>
        Note avant de commencer : la solution doit être faite comme si elle
        était réalisée pour un client et doit poser les bonnes bases de travail
        de votre future équipe. Elle doit être exemplaire.
      </p>
      <p>
        L'équipe de production de Back to the Future voudrait remettre au goût
        du jour sa saga avec une technique marketing imparable :
      </p>
      <p>
        Revenir dans le passé, en 2000 ! Et passer un deal super smart avec une
        boutique de vente de DVDs (vous vous rappelez encore ce que c'est on
        espère…) avec une promo qui déchire :
      </p>
      <p>
        Le DVD d'un volet de la saga vaut 15 €<br />
        Pour l'achat de 2 volets DIFFÉRENTS de la saga, on applique une
        réduction de 10 % sur l'ensemble des DVDs "Back to the Future" achetés
        <br />
        Pour l'achat de 3 volets DIFFÉRENTS de la saga, on applique une
        réduction de 20 % sur l'ensemble des DVDs "Back to the Future" achetés
        <br />
        La boutique de DVDs vend également d'autres films qui coûtent chacun 20
        €.
      </p>
      <p>
        L'équipe de production vous charge d'écrire un programme qui aura le
        comportement suivant :
      </p>
      <p>
        En entrée, un panier sous forme de texte, séparé par des retours à la
        ligne qui contient le nom des films achetés
        <br />
        En sortie, le nombre représentant le prix
        <br />
        Vous êtes libre de montrer le résultat de la manière qui vous convient
        et cela peut rester très minimaliste, tant qu'il est clair que le
        programme sait lire le format d'entrée et qu'il suit bien les règles
        spécifiées. Néanmoins, comme indiqué en début d’énoncé, ce code devra
        être traité comme si vous l’initiiez pour votre future équipe.
      </p>
      <p>
        Vous pourrez choisir le langage qui vous paraîtra le plus pertinent
        (dans lequel vous êtes à l'aise, c'est mieux), et qui devra pouvoir
        s'exécuter sur une JVM ou Python (dans le cas général) ou JS/TS (si vous
        êtes candidat front end ou full stack spécialiste front). Vous vous
        assurerez que le projet livré permette à quelqu'un ayant le SDK adéquat
        de lancer, utiliser et maintenir votre programme aisément. En résumé, le
        code doit être de très bonne qualité.
      </p>
      <p>
        Lors de l’éventuel entretien, venez avec votre code sur votre PC (pour
        vous permettre d’avoir un support sur lequel vous avez la main).
      </p>
      <p>
        <strong>Quelques exemples d’entrées et sortie</strong>
      </p>
      <p>
        <strong>Exemple n°1</strong>
      </p>
      <p>
        <strong>input :</strong>
        <br />
        Back to the Future 1<br />
        Back to the Future 2<br />
        Back to the Future 3
      </p>
      <p>
        <strong>Output :</strong>
        <br />
        36
      </p>
      <p>
        <strong>Exemple n°2</strong>
      </p>
      <p>
        <strong>input :</strong>
        <br />
        Back to the Future 1<br />
        Back to the Future 3
      </p>
      <p>
        <strong>Output :</strong>
        <br />
        27
      </p>
      <p>
        <strong>Exemple n°3 :</strong>
      </p>
      <p>
        <strong>Input :</strong>
        <br />
        Back to the Future 1
      </p>
      <p>
        <strong>Output :</strong>
        <br />
        15
      </p>
      <p>
        <strong>Exemple n°4 :</strong>
      </p>
      <p>
        <strong>Input :</strong>
        <br />
        Back to the Future 1<br />
        Back to the Future 2<br />
        Back to the Future 3<br />
        Back to the Future 2
      </p>
      <p>
        <strong>Output :</strong>
        <br />
        48
      </p>
      <p>
        <strong>Explication :</strong>
        <br />
        ((15*4)*0.8) = 48
      </p>
      <p>
        <strong>Exemple n°5</strong>
      </p>
      <p>
        <strong>Input :</strong>
        <br />
        Back to the Future 1<br />
        Back to the Future 2<br />
        Back to the Future 3<br />
        La chèvre
      </p>
      <p>
        <strong>Output :</strong>
        <br />
        56
      </p>
      <p>
        <strong>Explication :</strong>
        <br />
        ((15*3)*0.8)+20 = 56
      </p>
    </div>
  );
};

export default AboutPage;
