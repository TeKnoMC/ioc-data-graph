import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';
import React from 'react';

export const CustomQuoteTooltip = (props) => {
    if (!props.active) {
        return null
    }

    // Create new payload with additional quote at beginning
    const newPayload = [
        {
            name: 'Quote',
            value: props.payload[0].payload.quote,
        },
        ...props.payload,   // Expand rest of payloads and append to the end
    ];

    // Render default tooltip with new payload
    return <DefaultTooltipContent {...props} payload={newPayload} />;
};