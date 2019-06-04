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
  )`
};

export default Flags;
