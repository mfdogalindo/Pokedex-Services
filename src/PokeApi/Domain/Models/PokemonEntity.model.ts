export interface PokemonEntity {
  abilities?: AbilitiesEntity[] | null;
  base_experience: number;
  forms?:
    | AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies[]
    | null;
  game_indices?: GameIndicesEntity[] | null;
  height: number;
  held_items?: HeldItemsEntity[] | null;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves?: MovesEntity[] | null;
  name: string;
  order: number;
  past_types?: null[] | null;
  species: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  sprites: Sprites;
  stats?: StatsEntity[] | null;
  types?: TypesEntity[] | null;
  weight: number;
}
export interface AbilitiesEntity {
  ability: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  is_hidden: boolean;
  slot: number;
}
export interface AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies {
  name: string;
  url: string;
}
export interface GameIndicesEntity {
  game_index: number;
  version: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface HeldItemsEntity {
  item: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  version_details?: VersionDetailsEntity[] | null;
}
export interface VersionDetailsEntity {
  rarity: number;
  version: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface MovesEntity {
  move: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  version_group_details?: VersionGroupDetailsEntity[] | null;
}
export interface VersionGroupDetailsEntity {
  level_learned_at: number;
  move_learn_method: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  version_group: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other?: any;
  versions: any;
}

export interface StatsEntity {
  base_stat: number;
  effort: number;
  stat: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface TypesEntity {
  slot: number;
  type: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}

//  export interface Other {
//    dream_world: DreamWorldOrIcons;
//    home: HomeOrOmegaruby-alphasapphireOrX-yOrUltra-sun-ultra-moon;
//    official-artwork: Official-artwork;
//  }
// export interface DreamWorldOrIcons {
//   front_default: string;
//   front_female?: null;
// }
//  export interface HomeOrOmegaruby-alphasapphireOrX-yOrUltra-sun-ultra-moon {
//    front_default: string;
//    front_female: string;
//    front_shiny: string;
//    front_shiny_female: string;
//  }
//  export interface Official-artwork {
//    front_default: string;
//  }

//  export interface Red-blueOrYellow {
//    back_default: string;
//    back_gray: string;
//    back_transparent: string;
//    front_default: string;
//    front_gray: string;
//    front_transparent: string;
//  }

//  export interface Crystal {
//    back_default: string;
//    back_shiny: string;
//    back_shiny_transparent: string;
//    back_transparent: string;
//    front_default: string;
//    front_shiny: string;
//    front_shiny_transparent: string;
//    front_transparent: string;
//  }
//  export interface GoldOrSilver {
//    back_default: string;
//    back_shiny: string;
//    front_default: string;
//    front_shiny: string;
//    front_transparent: string;
//  }

//  export interface Emerald {
//    front_default: string;
//    front_shiny: string;
//  }
//  export interface Firered-leafgreenOrRuby-sapphire {
//    back_default: string;
//    back_shiny: string;
//    front_default: string;
//    front_shiny: string;
//  }
//
//  export interface Diamond-pearlOrHeartgold-soulsilverOrPlatinumOrAnimated {
//    back_default: string;
//    back_female: string;
//    back_shiny: string;
//    back_shiny_female: string;
//    front_default: string;
//    front_female: string;
//    front_shiny: string;
//    front_shiny_female: string;
//  }

//  export interface Black-white {
//    animated: Diamond-pearlOrHeartgold-soulsilverOrPlatinumOrAnimated;
//    back_default: string;
//    back_female: string;
//    back_shiny: string;
//    back_shiny_female: string;
//    front_default: string;
//    front_female: string;
//    front_shiny: string;
//    front_shiny_female: string;
//  }
//  export interface Icons {
//    front_default: string;
//    front_female: string;
//  }

//  export interface Versions {
//    generation-i: GenerationI;
//    generation-ii: GenerationII;
//    generation-iii: GenerationIII;
//    generation-iv: GenerationIV;
//    generation-v: GenerationV;
//    generation-vi: GenerationVI;
//    generation-vii: GenerationVII;
//    generation-viii: GenerationVIII;
//  }
//  export interface GenerationI {
//    red-blue: Red-blueOrYellow;
//    yellow: Red-blueOrYellow;
//  }
//  export interface GenerationII {
//    crystal: Crystal;
//    gold: GoldOrSilver;
//    silver: GoldOrSilver;
//  }
//  export interface GenerationIII {
//    emerald: Emerald;
//    firered-leafgreen: Firered-leafgreenOrRuby-sapphire;
//    ruby-sapphire: Firered-leafgreenOrRuby-sapphire;
//  }
// export interface GenerationIV {
//    diamond-pearl: Diamond-pearlOrHeartgold-soulsilverOrPlatinumOrAnimated;
//    heartgold-soulsilver: Diamond-pearlOrHeartgold-soulsilverOrPlatinumOrAnimated;
//    platinum: Diamond-pearlOrHeartgold-soulsilverOrPlatinumOrAnimated;
//  }
// export interface GenerationV {
//    black-white: Black-white;
//  }
//  export interface GenerationVI {
//    omegaruby-alphasapphire: HomeOrOmegaruby-alphasapphireOrX-yOrUltra-sun-ultra-moon;
//    x-y: HomeOrOmegaruby-alphasapphireOrX-yOrUltra-sun-ultra-moon;
//  }
//  export interface GenerationVII {
//    icons: DreamWorldOrIcons;
//    ultra-sun-ultra-moon: HomeOrOmegaruby-alphasapphireOrX-yOrUltra-sun-ultra-moon;
//  }
//  export interface GenerationVIII {
//    icons: Icons;
//  }
