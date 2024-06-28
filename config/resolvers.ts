import { Configuration } from "webpack";
import { IWebpackOptions } from "../types/webpack.types";


export function createResolvers  (option : IWebpackOptions) : Configuration["resolve"]{
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias : {
            "@" : option.src
        }
    }
}