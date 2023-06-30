import { Game } from "../hooks/useGames.ts";
import { Card, CardBody, Heading, Img } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Img src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((platform) => platform.platform)}
        />
      </CardBody>
    </Card>
  );
}

export default GameCard;
