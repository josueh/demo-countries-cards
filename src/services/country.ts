import { random } from '../helpers/random';

export const getPopulation = (countryName: string): Promise<number> => {
  // fake...
  return new Promise((resolve) => {
    console.log(`loading... fake data for ${countryName}...`);
    setTimeout(() => {
      const type = random(5);
      if (type === 1) return resolve(random(100_000_000));
      if (type === 2) return resolve(random(100_000));
      resolve(random(1_000));
    }, 500 + random(500));
  });
};
