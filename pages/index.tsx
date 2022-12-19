import { Flex, Heading } from "@chakra-ui/react";
import Articles from "./Componants/Articles";
import HomePage from "./HomePage";

const articles = [
  {
    description:`Le Chat domestique (Felis silvestris catus) est la sous-espèce issue de la domestication du Chat sauvage (Felis silvestris), mammifère carnivore de la famille des Félidés.
    Il est l’un des principaux animaux de compagnie et compte aujourd’hui une cinquantaine de races différentes reconnues par les instances de certification. Dans de très nombreux pays, le chat entre dans le cadre de la législation sur les carnivores domestiques à l’instar du chien et du furet. Essentiellement territorial, le chat est un prédateur de petites proies comme les rongeurs ou les oiseaux.`,
    src:"/chat1.jpg"
  },
  {
    description:`Les chats ont diverses vocalisations dont les ronronnements, les miaulements, les feulements ou les grognements, bien qu’ils communiquent principalement par des positions faciales et corporelles et des phéromones.`,
    src:"/chat2.jpg"
  },
  {
    description:`Selon les résultats de travaux menés en 2006 et 20071, le chat domestique est une sous-espèce du chat sauvage issue d’ancêtres appartenant à la sous-espèce du chat sauvage d’Afrique (Felis silvestris lybica). Les premières domestications auraient eu lieu il y a 8 000 à 10 000 ans au Néolithique dans le Croissant fertile, époque correspondant au début de la culture de céréales et à l’engrangement de réserves susceptibles d’être attaquées par des rongeurs, le chat devenant alors pour l’Homme un auxiliaire utile se prêtant à la domestication.`,
    src:"/chat3.jpg"
  },
  {
    description:`Tout d’abord vénéré par les Égyptiens, il fut diabolisé en Europe au Moyen Âge et ne retrouva ses lettres de noblesse qu’au xviiie siècle. En Asie, le chat reste synonyme de chance, de richesse ou de longévité. Ce félin a laissé son empreinte dans la culture populaire et artistique, tant au travers d’expressions populaires que de représentations diverses au sein de la littérature, de la peinture ou encore de la musique.`,
    src:"/chat4.jpg"
  },
 ]

export default function Index() { 
  return (
  <Flex 
    width="100%"
    line-height="1.3334"
    display="flex"
    alignItems="center"
    direction="column"
    fontFamily= "Roboto,sans-serif"
    fontSize="16px"
    box-sizing="border-box"
    height="100%"
  >
    <HomePage/>
    <Flex box-boxSizing="border-box" 
    min-height="300px" p="0" m="0" background-repeat="no-repeat"
    display="block" text-rendering="optimizeLegibility"
    direction="column" justifyContent="center" alignItems="center"
    border-top='1px solid rgba(138,150,163,.25)' font-family='Roboto,sans-serif'
    fontSize='16px' line-height='1.3334'
    >
    <Heading fontFamily="Roboto,sans-serif" fontSize= "32px" font-weight='400' mb='10px' mt='36px' line-height= "40px"> Derniers Articles en vedette </Heading>
    <Flex border-top= "1px solid rgba(138,150,163,.25)" display="flex" flexDirection="column">
      <Articles articlesData={articles}/>
    </Flex>
    </Flex>

  </Flex>
  )
}
