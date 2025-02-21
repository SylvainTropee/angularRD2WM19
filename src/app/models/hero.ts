import {Powerstats} from "./powerstats";

export interface Hero {
  name : string
  images : {
    sm : string
  }
  id : number
  powerstats : Powerstats
}
