/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import {PieChart} from 'react-native-svg-charts';

export default function App() {
  const data = [30, 10, 25, 18, 17];
  const pieData = data.map((value, index) => ({
    value,
    key: `${index}-${value}`,
    svg: {
      fill: '#FF0000',
    },
  }));

  const Label = ({slices}) => {
    return slices.map((slice, index) => {
      // eslint-disable-next-line no-shadow
      const {pieCentroid, data} = slice;
      return (
        <Text
          key={`label-${index}`}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="black"
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={22}>
          {data.value}
        </Text>
      );
    });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <PieChart style={{height: 400}} data={pieData}>
        <Label />
      </PieChart>
    </View>
  );
}
