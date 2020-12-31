import { heroes } from '../data/heroes';

export const getHeroById = ( id ) => {



    return heroes.find( hero => hero.id === id ); // el find es para decir que apenas encuentre un heroe ya seria todo

}