import { Member, Gender } from './member';

//TODO: Turn this stuff into JSON 

var date = new Date()
date.setFullYear(date.getFullYear() - 25);

export const MEMBERS: Member[] = [
    new Member(0, "Lucas", "Togt", "van der", new Date(1998, 0, 26), Gender.male, "Great Moves"),
    new Member(1, "Tom", "Gelooven", "van", new Date(1998, 7, 25), Gender.male, "Great Moves"),
    new Member(2, "Michiel", "Versnel", "", new Date(1998, 3, 5), Gender.male, "Great Moves"),
    new Member(3, "Stijn", "Makkus", "", new Date(2000, 4, 2), Gender.male, "Great Moves"),
    new Member(4, "David", "Vorm", "van der", new Date(1998, 0, 26), Gender.male, "Great Moves"),
    new Member(5, "David", "Lim", "", new Date(1996, 11, 8), Gender.male, "Great Moves"),
    new Member(6, "Anton", "Es", "van", new Date(1998, 7, 17), Gender.male, "Great Moves"),
    new Member(7, "Leander", "Kalff", "", new Date(1998, 5, 25), Gender.male, "Great Moves"),
    new Member(8, "Edward", "Hissink", "", new Date(1998, 0, 12), Gender.male, "Great Moves"),
    new Member(9, "Joris", "Kerkhoff", "", new Date(1998, 0, 26), Gender.male, "Great Moves"),
    new Member(10, "Daniel", "Otten", "van", new Date(1998, 6, 20), Gender.male, "Great Moves"),
    new Member(999, "Subject", "Test", "van de", date, Gender.female, "Ik ben gewoon een testpersoon en ik ben vandaag jarig!"),  
];