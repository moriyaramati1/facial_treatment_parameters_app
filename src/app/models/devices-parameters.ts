import {AndimedHandlers, HifuHandles} from "src/app/models/handles";
import { GuinotProcedures, PlasmaProcedures } from "./procedures-types";

export interface AndimedParameters {
    handle?: AndimedHandlers ,
    level?: number,
}


export interface PalsmaParameters {
    selectedProcedure?: PlasmaProcedures ,
    parameterValue?: number,
}

export interface ApolloDuetParameters {
    procedureName: string,
    intensity?: number,
    maxIntensity:number,
    temperature?: number,
    maxTemperature: number,
}

export interface RinnovaParameters {
    procedureName: string,
    procedureValue?: number,
    density?: number,
    energy?: number,
}

export interface GuinotParameters {
    selectedProcedure?: GuinotProcedures,
    parameterValue?: number,
}

export interface SonnextParameters {
  intensity?: number,
  wave?: string,
  velocity?: number
}

export interface WishParameters {
  head: string[],
  capsule?: string,
}


export interface HifuParameters {
  handles: HifuHandles[],
  intensity?: number,
}
