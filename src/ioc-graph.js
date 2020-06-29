import React from 'react';
import { Graph } from './graph';
import { GetQuotesFromAPI } from './EnglishWordsApi';

export class IOCGraph extends React.Component {
    calculateIOC(strInitial) {
        const str = strInitial.toUpperCase();
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        const N = str.length;

        let numerator = 0.0;

        for (let i = 0; i < alphabet.length; i++) {
            // Split on character, count number of elements in resulting array - minus 1 is the number
            // of times the character split by occurs
            const numOfCharOccuring = str.split(alphabet[i]).length - 1

            numerator += numOfCharOccuring * (numOfCharOccuring - 1);
        }

        const denominator = (N * (N - 1)) / 26

        return (numerator / denominator) / 26;
    }

    calculateIOCValues = (quoteArr) => {
        const graphPoints = quoteArr.flatMap((quote) => {
            const quoteAlphabetic = quote.replace(/[^a-zA-Z]/g, '');
            let iocAtDifferentLengths = [];

            for (let i = 2; i < quoteAlphabetic.length; i++ ) {
                iocAtDifferentLengths.push({
                    x: i,
                    y: this.calculateIOC(quoteAlphabetic.slice(0, i)),
                    quote: quote
                });
            }

            return iocAtDifferentLengths;
        });

        console.log(graphPoints);
        return graphPoints;
    }

    constructor() {
        super();

        this.state = {
            graphPoints: [
                {
                    x: 0,
                    y: 0,
                    quote: ""
                }
            ]
        };

        GetQuotesFromAPI()
        .then(this.calculateIOCValues)
        .then((values) => {
            this.setState({
                graphPoints: values
            });
        });
    }

    render() {
        return <Graph dataArray={this.state.graphPoints} yReferenceValue={0.067} />;
    }
}