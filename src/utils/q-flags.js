import Colors from './colors';

const Flags = {
  pride: `linear-gradient(
    180deg,
    ${Colors.pride.black} 0%,
    ${Colors.pride.black} 12.5%,
    ${Colors.pride.brown} 12.5%,
    ${Colors.pride.brown} 25%,
    ${Colors.pride.red} 25%,
    ${Colors.pride.red} 37.5%,
    ${Colors.pride.orange}  37.5%,
    ${Colors.pride.orange}  50%,
    ${Colors.pride.yellow}  50%,
    ${Colors.pride.yellow}  62.5%,
    ${Colors.pride.green}  62.5%,
    ${Colors.pride.green}  75%,
    ${Colors.pride.blue}  75%,
    ${Colors.pride.blue}  87.5%,
    ${Colors.pride.purple}  87.5%,
    ${Colors.pride.purple}  100%
    )`,
  trans: `linear-gradient(
    180deg,
    ${Colors.trans.blue} 0%,
    ${Colors.trans.blue} 20%,
    ${Colors.trans.pink} 20%,
    ${Colors.trans.pink} 40%,
    ${Colors.trans.white} 40%,
    ${Colors.trans.white} 60%,
    ${Colors.trans.pink} 60%,
    ${Colors.trans.pink} 80%,
    ${Colors.trans.blue} 80%,
    ${Colors.trans.blue} 100%
    )`,
  bisexual: `linear-gradient(
    180deg,
    ${Colors.bisexual.pink} 0%,
    ${Colors.bisexual.pink} 40%,
    ${Colors.bisexual.purple} 40%,
    ${Colors.bisexual.purple} 60%,
    ${Colors.bisexual.blue} 60%,
    ${Colors.bisexual.blue} 1000%
  )`,
  pan: `linear-gradient(
    180deg,
    ${Colors.pan.pink} 0%,
    ${Colors.pan.pink} ${100 / 3}%,
    ${Colors.pan.yellow} ${100 / 3}%,
    ${Colors.pan.yellow} ${(100 / 3) * 2}%,
    ${Colors.pan.blue} ${(100 / 3) * 2}%,
    ${Colors.pan.blue} ${(100 / 3) * 3}%
  )`,
  polysexual: `linear-gradient(
    180deg,
    ${Colors.polysexual.pink} 0%,
    ${Colors.polysexual.pink} ${100 / 3}%,
    ${Colors.polysexual.green} ${100 / 3}%,
    ${Colors.polysexual.green} ${(100 / 3) * 2}%,
    ${Colors.polysexual.blue} ${(100 / 3) * 2}%,
    ${Colors.polysexual.blue} ${(100 / 3) * 3}%
  )`,
  asexual: `linear-gradient(
    180deg,
    ${Colors.asexual.black} 0%,
    ${Colors.asexual.black} 25%,
    ${Colors.asexual.grey} 25%,
    ${Colors.asexual.grey} 50%,
    ${Colors.asexual.white} 50%,
    ${Colors.asexual.white} 75%,
    ${Colors.asexual.purple} 75%,
    ${Colors.asexual.purple} 100%
    )`,
  nonbinary: `linear-gradient(
      180deg,
      ${Colors.nonbinary.black} 0%,
      ${Colors.nonbinary.black} 20%,
      ${Colors.nonbinary.yellow} 20%,
      ${Colors.nonbinary.yellow} 40%,
      ${Colors.nonbinary.white} 40%,
      ${Colors.nonbinary.white} 60%,
      ${Colors.nonbinary.purple} 60%,
      ${Colors.nonbinary.purple} 80%,
      ${Colors.nonbinary.black} 80%,
      ${Colors.nonbinary.black} 100%
      )`,
  genderqueer: `linear-gradient(
    180deg,
    ${Colors.genderqueer.purple} 0%,
    ${Colors.genderqueer.purple} ${100 / 3}%,
    ${Colors.genderqueer.white} ${100 / 3}%,
    ${Colors.genderqueer.white} ${(100 / 3) * 2}%,
    ${Colors.genderqueer.green} ${(100 / 3) * 2}%,
    ${Colors.genderqueer.green} ${(100 / 3) * 3}%
  )`,
  nonbinary: `linear-gradient(
    180deg,
    ${Colors.genderfluid.pink} 0%,
    ${Colors.genderfluid.pink} 20%,
    ${Colors.genderfluid.white} 20%,
    ${Colors.genderfluid.white} 40%,
    ${Colors.genderfluid.purple} 40%,
    ${Colors.genderfluid.purple} 60%,
    ${Colors.genderfluid.black} 60%,
    ${Colors.genderfluid.black} 80%,
    ${Colors.genderfluid.blue} 80%,
    ${Colors.genderfluid.blue} 100%
    )`,
};

export default Flags;
