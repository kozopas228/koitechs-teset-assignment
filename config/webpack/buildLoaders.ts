import { IBuildOptions } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(buildOptions: IBuildOptions): any[] {
    return [
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
            // Тут раніше ще був svg, проте він не працює в поєднанні з svgr лоадером, який і відповідає
            // за коректну роботу svg
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [{ loader: '@svgr/webpack', options: { icon: true } }],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(csv|tsv)$/i,
            use: ['csv-loader'],
        },
        {
            test: /\.xml$/i,
            use: ['xml-loader'],
        },
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        },
        {
            test: /\.m?js/,
            type: 'javascript/auto',
        },
        {
            test: /\.m?js/,
            resolve: {
                fullySpecified: false,
            },
        },
    ];
}
