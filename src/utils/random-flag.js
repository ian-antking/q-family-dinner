import Flags from '../utils/q-flags';

const randomFlag = () => {
  const keys = Object.keys(Flags);
  return Flags[keys[Math.floor(Math.random() * keys.length)]];
};

export default randomFlag;
