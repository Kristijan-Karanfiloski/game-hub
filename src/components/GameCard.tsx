import { Game } from "../hooks/useGames.ts";
import { Card, CardBody, Heading, HStack, Img } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";
import Emoj from "./Emoj.tsx";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card >
      <Img src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}<Emoj rating={game.rating_top}/></Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
