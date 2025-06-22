// types/header.ts
 interface ImageAsset {
  url: string;
  title: string;
}

interface NavLinkItem {
  linklogo: ImageAsset | null;
  linktitle: string;
}

interface MultiLinkItem {
  multititle: string;
  upperlink: NavLinkItem[];
  lowertitle: string[];
}

interface NavLinks {
  singlink: string[];
  multilink: MultiLinkItem[];
}

 interface StartButtonLink {
  linklogo: ImageAsset | null;
  linktitle: string;
}

interface StartButton {
  signinmenu: string;
  link: StartButtonLink[];
}

export interface HeaderData {
  logoimage: ImageAsset;
  navlinkimg: ImageAsset;
  navlinks: NavLinks;
  startbutton: StartButton;
}


//herosection
export interface HeroBlock{
  block: {
    hero: {
      title: string;
      subtitle: string;
      buttitle?: string;
      bglinkjson: string;
    };
  }[];
};


//inifinate loader
type Logo = {
  uid: string;
  url: string;
  title?: string;
};

type MovingCardBlock = {
  movingcard: {
    fillogo: Logo[];
  };
};

export type CMSResponse = {
  block: MovingCardBlock[];
};


//grid-view-card
type CardItem = {
  cardtitle: string;
  cardsub: string;
};

export type LMSResponse = {
    block: {
      gridview:{
  buttitle: string;
  title: {
    children: {
      type: string;
      children: { text: string; italic?: boolean }[];
    }[];
  };
  cardd: CardItem[];
      };
  }[];
};


//payment-grid
type RichTextChild = {
  text: string;
  italic?: boolean;
};

type RichTextNode = {
  type: string;
  children: RichTextChild[];
};

type ButtonIcon = {
  butttile: string;
  bicon: ImageAsset;
};

type FirstCard = {
  title: string;
  subtitle: string;
  button: {
    buttitle: string;
    butimage: ImageAsset;
  }[];
  frontcard: {
    ftitle: string;
    fmoney: string;
    fbutton: string;
    opt1: string;
    opt2: string;
  };
  backcard: {
    btitle: string;
    bmoney: string;
    bbut: ButtonIcon[];
  };
};

type SecondCard = {
  title: string;
  subtitle: string;
  imagew: ImageAsset;
  button: {
    buttutle: string;
    buticon: ImageAsset;
  }[];
  cardd: {
    cartitle: string;
    cardmoney: string;
    cardimg: ImageAsset;
  };
};

type PaymentGridData = {
  title: {
    children: RichTextNode[];
  };
  buttitle: string;
  firstcard: FirstCard;
  secondcard: SecondCard;
};

export type LMSResponses = {
  block: {
    paymentgrid?: PaymentGridData;
  }[];
};


//CapitalCard
export type SecondCards = {
  title: string;
  subtitle: string;
  imagew: ImageAsset;
  button: {
    buttutle: string;
    buticon: ImageAsset;
  }[];
  cardd: {
    cartitle: string;
    cardmoney: string;
    cardimg: ImageAsset;
  };
};


//SolutionCard
type SolutionCard = {
  titimage: ImageAsset;
  userimage: ImageAsset;
  buttitle: string;
  infoo: string[];
};

type SolutionsBlock = {
  title: string;
  buttitle: string;
  cards: SolutionCard[];
};

export type LMSResponseSolution = {
  block: {
    solutions?: SolutionsBlock;
  }[];
};


// types/convince.ts
interface ImageAssetc{
  url: string;
}

interface MovingLogo {
  logos: ImageAssetc[];
}

interface CardContent {
  bgcard: ImageAssetc;
  title: string;
  subtitle: string;
  sidelogo: ImageAssetc;
}

interface MovingCardContent extends CardContent {
  botttom: string;
  movinglogo: MovingLogo;
}

interface ConvinceData {
  title: {
    children: {
      type: string;
      children: { text: string; italic?: boolean }[];
    }[];
  };
  movingcard: MovingCardContent;
  card: CardContent;
}

export interface BlockData {
  block?: Array<{
    convince?: ConvinceData;
  }>;
}


//Testomonial
interface TestimonialCard {
  name: string;
  profess: string;
  detail: string;
  userimage: ImageAssetc;
}

export interface TestimonialData {
  title: string;
  card: TestimonialCard[];
}


//secteso:
export interface PrefooterData {
  title: string;
  frontimg: ImageAssetc;
  backimg: ImageAssetc;
  buttitle: string;
  bottomtitle: string;
  bottombuttext: string;
}


//footer:
export interface FooterData {
  logo: ImageAssetc;
  subtitle: string;
  buttitle: string;
  address: string;
  bottom1: ImageAssetc;
  bottomimg2: ImageAssetc;
  linkn: {
    link: string[];
  };
  linkdomain: string[];
  cotact: string;
}
