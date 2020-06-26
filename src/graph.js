import React from 'react';
import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';

export const Graph = (props) => {
    return (
        <ResponsiveContainer width="100%" height={500}>
          <ScatterChart
            width= {1000}
            height={500}
            margin={{ top: 40, right: 80, bottom: 20, left: 80 }}>
            <CartesianGrid />
            <XAxis dataKey="x" name="stature" type="number">
              <Label value="Length of text" position="bottom" style={{ textAnchor: "middle" }} />
            </XAxis>
            <YAxis dataKey="y" name="weight">
              <Label value="Index of Coincidence" position="left" angle={-90} style={{ textAnchor: "middle" }} />
            </YAxis>
            <Scatter name="Dataset" data={props.dataArray} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      );
}