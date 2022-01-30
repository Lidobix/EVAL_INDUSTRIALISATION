/* eslint-disable import/extensions */
/* eslint-disable no-undef */
// import {jest} from '@jest/globals';
import {
  returnAnObject,
  multiplyAllByTwo,
} from './public/js/functionsToTest.js';

describe('La fonction returnAnObject...', () => {
  test("doit retourner un objet quelque soit le type de l'argument passé, tant qu'il est non vide", () => {
    const tabAllTypes = [12, '', {}, () => {}, undefined, true];
    for (let i = 0; i < tabAllTypes.length; i += 1) {
      expect(returnAnObject(tabAllTypes[i])).toBeInstanceOf(Object);
    }
  });

  test("doit retourner un string si aucun argument n'est passé", () => {
    expect(returnAnObject()).toBe('No argument was given to the function.');
  });
});

describe('La fonction multiplieAllByTwo...', () => {
  test("doit doubler les valeurs d'un tableau qui lui est passé en argument", () => {
    expect(multiplyAllByTwo([8, 992])).toStrictEqual([16, 1984]);
  });

  test("doit renvoyer un message d'erreur quand l'argument n'est pas un tableau", () => {
    const tabTypesToTest = [12, '', {}, () => {}, true];
    for (let j = 0; j < tabTypesToTest.length; j += 1) {
      expect(multiplyAllByTwo(tabTypesToTest[j])).toBe(
        'The argument is not an Array of numbers',
      );
    }
  });
});
