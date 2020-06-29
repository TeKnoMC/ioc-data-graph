# Index of Coincidence Graph

## Purpose
The graph calculated by this app displays the variation in the Index of Coincidence (IoC) as the length of the input text varies.

## API
The app uses an API to provide the source for the IoC data - currently this is a random quotes API (https://api.quotable.io/).

This has a number of limitations:
- The language used in quotes is often less representative of general English text, and thus their IoC values can fluctuate further away from the average value.
- The passages can sometimes be too short to provide enough data to analyse.
- Quotes often make use of uncommon words, thus skewing their IoC values even further.

Despite this, the quotes provide a solid baseline shape to the graph. Later experiments may see the quotes API swapped out for a different source of English text to see if this has an effect on the resulting graph calculated.

## Future Development
Future points to develop include:
- UI features to customise the graph (e.g. options to change the number of quotes retrieved).
- Background colour formatting.
- Experimenting with swapping out the English data source.
