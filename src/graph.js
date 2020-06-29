import React from 'react';
import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, Label, ResponsiveContainer, ReferenceLine, Tooltip } from 'recharts';
import { CustomQuoteTooltip } from './CustomTooltip';

export const Graph = (props) => {
    return (
        <ResponsiveContainer width="100%" height={500}>
          <ScatterChart
            width= {1000}
            height={500}
            margin={{ top: 40, right: 80, bottom: 20, left: 80 }}>
            <CartesianGrid />
            <XAxis dataKey="x" type="number">
              <Label value="Length of text" position="bottom" style={{ textAnchor: "middle" }} />
            </XAxis>
            <YAxis dataKey="y">
              <Label value="Index of Coincidence" position="left" angle={-90} style={{ textAnchor: "middle" }} />
            </YAxis>
            <Tooltip content={<CustomQuoteTooltip />} />
            <Scatter name="Dataset" data={props.dataArray} fill="#8884d8" />
            <ReferenceLine name="Average" stroke="red" strokeDasharray="3 3" y={props.yReferenceValue} />
          </ScatterChart>
        </ResponsiveContainer>
      );
}