import { StrapiImage } from "../models";

export interface Quote {
    Zitat: string;
    Author: string;
    Berufsbezeichnung: string;
    Foto: StrapiImage;
}