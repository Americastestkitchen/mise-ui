import AtkLogo from './AtkLogo';
import CcoLogo from './CcoLogo';
import CioLogo from './CioLogo';
import GearHeadsLogo from './GearHeadsLogo';
import KidsLogo from './KidsLogo';
import MysteryRecipeLogo from './MysteryRecipeLogo';
import PerfectlySeasonalLogo from './PerfectlySeasonalLogo';
import ProofLogo from './ProofLogo';
import TheWalkInLogo from './TheWalkInLogo';
import WhatsEatingDanLogo from './WhatsEatingDanLogo';

const logoMap = {
  americasTestKitchen: AtkLogo,
  cooksCountry: CcoLogo,
  cooksIllustrated: CioLogo,
  gearHeads: GearHeadsLogo,
  kids: KidsLogo,
  mysteryRecipe: MysteryRecipeLogo,
  perfectlySeasonal: PerfectlySeasonalLogo,
  proof: ProofLogo,
  theWalkIn: TheWalkInLogo,
  whatsEatingDan: WhatsEatingDanLogo,
};

export type LogoType = keyof typeof logoMap;

const useLogoMap = (type: LogoType) => {
  return logoMap[type];
};

export default useLogoMap;
