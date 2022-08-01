import SHA3 from 'sha3';

const PasswordRules = [
  {
    name: 'Has not minimum length',
    validator: (password: string) => {
      return password.length >= 6;
    },
  },
  {
    name: 'Must contain an uppercase letter',
    validator: (password: string) => {
      return !!password.match(/[A-Z]/);
    },
  },
  {
    name: 'Must contain an owercase letter',
    validator: (password: string) => {
      return !!password.match(/[a-z]/);
    },
  },
  {
    name: 'Must contain a number',
    validator: (password: string) => {
      return !!password.match(/[0-9]/);
    },
  },
  {
    name: 'Must contain a special character',
    validator: (password: string) => {
      return !!password.match(/[^A-Za-z0-9]/);
    },
  },
];

export class PasswordUtils {
  static Hash(password: string, seed: string): string {
    const hash = new SHA3(512);
    seed = seed.replace(/\s/g, '');
    hash.update(`${password}-${seed}`);
    return hash.digest('hex');
  }

  static Validator(password: string): {
    isValid: boolean;
    errors?: string[];
  } {
    let isValid = true;
    const errors: string[] = PasswordRules.map((rule) => {
      if (!rule.validator(password)) {
        isValid = false;
        return rule.name;
      }
    }).filter((error) => !!error);
    return { isValid, errors };
  }
}
